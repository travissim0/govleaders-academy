import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  const { name, email, inquiryType, message } = body;
  if (!name || !email || !inquiryType || !message) {
    return NextResponse.json(
      { error: "Name, email, inquiry type, and message are required." },
      { status: 400 }
    );
  }

  // TODO: Send email via Resend or store in database
  console.log("Contact form submission:", body);

  return NextResponse.json({ success: true, message: "Message received. We'll be in touch!" });
}
