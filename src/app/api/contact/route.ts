import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { verifyTurnstile } from "@/lib/turnstile";
import { addBrevoContact } from "@/lib/brevo";

const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL || "delivered@resend.dev";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "GovLeaders Academy <onboarding@resend.dev>";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { name, email, organization, role, inquiryType, message, turnstileToken } = body;
  if (!name || !email || !inquiryType || !message) {
    return NextResponse.json(
      { error: "Name, email, inquiry type, and message are required." },
      { status: 400 }
    );
  }

  const verified = await verifyTurnstile(turnstileToken || "");
  if (!verified) {
    return NextResponse.json(
      { error: "Spam verification failed. Please try again." },
      { status: 403 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.log("Contact form submission (no RESEND_API_KEY configured):", body);
    return NextResponse.json({ success: true, message: "Message received. We'll be in touch!" });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: FROM_EMAIL,
      to: NOTIFY_EMAIL,
      replyTo: email,
      subject: `[GLA Contact] ${inquiryType} — ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Name</td><td style="padding:8px;border-bottom:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Email</td><td style="padding:8px;border-bottom:1px solid #eee">${email}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Organization</td><td style="padding:8px;border-bottom:1px solid #eee">${organization || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Role/Title</td><td style="padding:8px;border-bottom:1px solid #eee">${role || "—"}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;border-bottom:1px solid #eee">Inquiry Type</td><td style="padding:8px;border-bottom:1px solid #eee">${inquiryType}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Message</td><td style="padding:8px">${message.replace(/\n/g, "<br>")}</td></tr>
        </table>
      `,
    });

    // Also add to Brevo as a lead (non-blocking)
    addBrevoContact({
      email,
      attributes: {
        FIRSTNAME: name.split(" ")[0],
        LASTNAME: name.split(" ").slice(1).join(" ") || "",
        SOURCE: `Contact Form - ${inquiryType}`,
        ...(organization ? { COMPANY: organization } : {}),
      },
    }).catch((err) => console.error("Brevo contact creation failed:", err));

    return NextResponse.json({ success: true, message: "Message received. We'll be in touch!" });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
