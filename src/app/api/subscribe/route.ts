import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;

  if (!apiKey || !from) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as { email?: string };
  const email = body.email?.trim();

  if (!email || !emailRegex.test(email)) {
    return NextResponse.json({ error: "Enter a valid email address." }, { status: 400 });
  }

  const resend = new Resend(apiKey);

  try {
    await resend.emails.send({
      from,
      to: email,
      subject: "Welcome to Beyond your API",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="margin: 0 0 12px;">Welcome aboard</h2>
          <p>Thanks for subscribing. I will send new posts and updates here.</p>
          <p style="margin: 24px 0 0; color: #555; font-size: 13px;">Biswajit Rath</p>
        </div>
      `,
    });
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to send the welcome email right now." },
      { status: 500 },
    );
  }

  return NextResponse.json({ success: true });
}
