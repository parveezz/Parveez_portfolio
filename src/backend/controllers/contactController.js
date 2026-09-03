import { NextResponse } from "next/server";
import connectDB from "@/backend/config/db";
import Contact from "@/backend/models/Contact";
import { sendEmail } from "@/backend/config/mailer";

export async function getContactStatus() {
  try {
    await connectDB();
    const count = await Contact.countDocuments();

    return NextResponse.json(
      {
        status: "connected",
        database: "MongoDB Atlas",
        totalMessages: count,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        error: error.message,
        hint: "Check if your IP address is whitelisted in MongoDB Atlas under Network Access (0.0.0.0/0)",
      },
      {
        status: 200, // Return 200 so UI health check doesn't crash
      }
    );
  }
}

export async function sendContactMessage(req) {
  try {
    const body = await req.json();

    const name = body.name;
    const email = body.email;
    const subject = body.subject;
    const message = body.message;

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          success: false,
          error: "Name, email, and message are required fields",
        },
        {
          status: 400,
        }
      );
    }

    const contactData = {
      name: name.trim(),
      email: email.trim(),
      subject: subject ? subject.trim() : "Portfolio Inquiry",
      message: message.trim(),
    };

    // 1. Attempt to save to MongoDB Atlas
    let savedContactId = null;
    let dbWarning = null;

    try {
      await connectDB();
      const savedContact = await Contact.create(contactData);
      savedContactId = savedContact?._id;
    } catch (dbErr) {
      console.warn("MongoDB Atlas save warning:", dbErr.message);
      dbWarning = dbErr.message;
    }

    // 2. Send email notification via Nodemailer
    const emailPayload = {
      replyTo: email.trim(),
      subject: `Portfolio Inquiry: ${subject ? subject.trim() : "New Message"}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #111; max-width: 600px; border: 1px solid #e5ded2; border-radius: 8px;">
          <h2 style="color: #2F5D50; margin-top: 0;">New Portfolio Inquiry</h2>
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f9f8f5; padding: 12px; border-radius: 6px;">${message}</p>
        </div>
      `,
    };

    let emailSent = false;
    let emailWarning = null;

    try {
      await sendEmail(emailPayload);
      emailSent = true;
    } catch (mailErr) {
      console.warn("Nodemailer dispatch warning:", mailErr.message);
      emailWarning = mailErr.message;
    }

    // If both failed, return actionable error
    if (!savedContactId && !emailSent) {
      return NextResponse.json(
        {
          success: false,
          error: dbWarning || emailWarning || "Unable to process message right now. Please check MongoDB Atlas IP Whitelist.",
        },
        {
          status: 500,
        }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: savedContactId 
          ? "Message sent and saved successfully!" 
          : "Message delivered to inbox successfully!",
        data: {
          id: savedContactId || "delivered-via-email",
        },
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: false,
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}
