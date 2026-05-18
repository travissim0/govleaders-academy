import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { email } = body;
  if (!email) {
    return NextResponse.json({ error: "Email is required." }, { status: 400 });
  }

  // TODO: Integrate with Brevo for newsletter signup
  console.log("Newsletter signup:", email);

  return NextResponse.json({ success: true, message: "Subscribed successfully!" });
}
