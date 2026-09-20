import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const email = String(body.email ?? "").trim().toLowerCase();
    const service = String(body.service ?? "").trim();
    const address = String(body.address ?? "").trim();
    const userMessage = String(body.message ?? "").trim();

    if (!name || !phone || !email || !address) {
      return NextResponse.json(
        { message: "Please fill in your name, phone number, email, and address." },
        { status: 400 }
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { message: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (name.length > 100 || phone.length > 25 || email.length > 100) {
      return NextResponse.json(
        { message: "One or more fields exceed maximum allowed character length." },
        { status: 400 }
      );
    }

    if (address.length > 2000 || userMessage.length > 5000) {
      return NextResponse.json(
        { message: "Address or message description is too long." },
        { status: 400 }
      );
    }

    const combinedMessage = service
      ? `[Requested Service: ${service}]\n${userMessage}`
      : userMessage || "Free on-site estimation requested.";

    try {
      await db.contact.create({
        data: {
          name,
          phone,
          email,
          address,
          message: combinedMessage,
        },
      });
    } catch (dbError) {
      console.warn("Database save notice (Prisma):", dbError);
      console.info("NEW INQUIRY RECEIVED FOR SHWETA INVISIBLE GRILL:", {
        name,
        phone,
        email,
        service,
        address,
        message: combinedMessage,
        timestamp: new Date().toISOString(),
      });
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Thank you! Your request has been received. Our Gurugram team will call you shortly on " +
          phone +
          ". For immediate assistance, call +91 8229006831.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      {
        message:
          "Could not process your request online. Please contact Shweta Invisible Grill directly at +91 8229006831 or email invisiblesafetygrillpatna@gmail.com.",
      },
      { status: 500 }
    );
  }
}