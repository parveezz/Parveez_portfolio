import { NextResponse } from "next/server";
import Contact from "@/backend/models/Contact";
import { sendEmail } from "@/backend/config/mailer";

export async function getContactStatus() {
  try {
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
      },
      {
        status: 500,
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

    const savedContact = await Contact.create(contactData);

    const emailPayload = {
      replyTo: email.trim(),
      subject: `Portfolio Inquiry: ${subject ? subject.trim() : "New Message"}`,
      text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #111;">
          <h2>New Portfolio Inquiry</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject || "General Inquiry"}</p>
          <hr />
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
    };

    await sendEmail(emailPayload);

    return NextResponse.json(
      {
        success: true,
        message: "Message sent and saved successfully",
        data: {
          id: savedContact._id,
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
