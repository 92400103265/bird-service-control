import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const contact = await db.contact.create({
      data: {
        name: body.name,
        phone: body.phone,
        email: body.email,
        address: body.address,
        message: body.message,
      },
    });

    return NextResponse.json(contact);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Database error" },
      { status: 500 }
    );
  }
}