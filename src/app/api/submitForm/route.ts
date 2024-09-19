import { NextResponse } from "next/server";
import prisma from "../../../../lib/prisma"; // Adjust import if needed

export async function POST(req: Request) {
  try {
    const { name, phoneNumber, email, project } = await req.json();

    // Save the form data to your database
    const result = await prisma.user.create({
      data: {
        name,
        contact: phoneNumber,
        email,
        about: project,
      },
    });

    return NextResponse.json({ success: true, data: result }, { status: 201 });
  } catch (error) {
    console.error("Error saving data:", error);
    return NextResponse.json({ error: "Failed to save data" }, { status: 500 });
  }
}
