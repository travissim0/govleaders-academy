import { NextRequest, NextResponse } from "next/server";
import { verifyTurnstile } from "@/lib/turnstile";
import { addBrevoContact } from "@/lib/brevo";

// Brevo list ID for "The GLA Brief" newsletter subscribers
// Create this list in Brevo dashboard: Contacts → Lists → Add a list
const NEWSLETTER_LIST_ID = Number(process.env.BREVO_NEWSLETTER_LIST_ID) || 2;

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { email, turnstileToken } = body;
  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  const verified = await verifyTurnstile(turnstileToken || "");
  if (!verified) {
    return NextResponse.json(
      { error: "Spam verification failed. Please try again." },
      { status: 403 }
    );
  }

  const added = await addBrevoContact({
    email,
    attributes: { SOURCE: "Newsletter Signup" },
    listIds: [NEWSLETTER_LIST_ID],
  });

  if (!added) {
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true, message: "Subscribed successfully!" });
}
