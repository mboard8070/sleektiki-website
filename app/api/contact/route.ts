import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validate
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    if (typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    // Send via Resend
    const { error } = await resend.emails.send({
      from: "sleektiki.ai <noreply@sleektiki.com>",
      to: ["matt@sleektiki.com"],
      replyTo: email,
      subject: `[sleektiki.ai] Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: system-ui, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #00d4ff; margin-bottom: 24px;">New message from sleektiki.ai</h2>
          <div style="background: #111118; padding: 24px; border-radius: 12px; border: 1px solid #252530;">
            <p style="color: #888899; margin: 0 0 8px;"><strong style="color: #f0f0f5;">Name:</strong> ${name}</p>
            <p style="color: #888899; margin: 0 0 16px;"><strong style="color: #f0f0f5;">Email:</strong> ${email}</p>
            <hr style="border: none; border-top: 1px solid #252530; margin: 16px 0;" />
            <p style="color: #f0f0f5; white-space: pre-wrap; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
