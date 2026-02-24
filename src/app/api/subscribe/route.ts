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
      subject: "Welcome to Beyond Your API",
      html: `
  <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; line-height: 1.6; color: #111; max-width: 520px; margin: 0 auto; padding: 24px;">
    
    <h2 style="margin: 0 0 16px; font-weight: 600;">
      Welcome.
    </h2>
    
    <p style="margin: 0 0 16px;">
      Thanks for subscribing to <strong>Beyond Your API</strong>.
    </p>
    
    <p style="margin: 0 0 16px;">
      I’ll send you new deep-dives on systems, architecture, and AI engineering when they’re published.
    </p>
    
    <p style="margin: 32px 0 0; font-size: 14px; color: #555;">
      — Biswajit Rath
    </p>
    
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
