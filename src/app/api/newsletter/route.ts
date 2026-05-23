import { NextRequest, NextResponse } from "next/server";
import { verifyTurnstile } from "@/lib/turnstile";

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

  // TODO: Integrate with Brevo for newsletter signup
  console.log("Newsletter signup:", email);

  return NextResponse.json({ success: true, message: "Subscribed successfully!" });
}
