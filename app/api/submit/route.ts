import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, roll } = await req.json();
    if (!name || !roll) {
      return NextResponse.json(
        { error: "Missing fields", required: ["name", "roll"] },
        { status: 400 }
      );
    }
    return NextResponse.json({
      success: true,
      message: `Received from ${name} (${roll})`,
      timestamp: new Date().toISOString(),
    });
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
