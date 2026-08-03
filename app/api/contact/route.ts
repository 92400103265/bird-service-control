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
    const address = String(body.address ?? "").trim();
    const message = String(body.message ?? "").trim();

    if (!name || !phone || !email || !address || !message) {
      return NextResponse.json({ message: "Please complete every field." }, { status: 400 });
    }
    if (!emailPattern.test(email)) {
      return NextResponse.json({ message: "Please enter a valid email address." }, { status: 400 });
    }
    if (name.length > 100 || phone.length > 20 || email.length > 100) {
      return NextResponse.json({ message: "One or more fields are too long." }, { status: 400 });
    }
    if (address.length > 2000 || message.length > 5000) {
      return NextResponse.json({ message: "Address or message is too long." }, { status: 400 });
    }

    await db.contact.create({ data: { name, phone, email, address, message } });
    return NextResponse.json({ message: "Thanks! Your request has been received." }, { status: 201 });
  } catch (error) {
    console.error("Contact form error", error);
    return NextResponse.json(
      { message: "We could not save your request. Please call us on 8229006831." },
      { status: 500 },
    );
  }
}
