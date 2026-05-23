import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello from Vercel Serverless!",
    student: "Abdullah Nasir",
    roll: "01-131232-008",
    time: new Date().toISOString(),
    runtime: "nodejs",
  });
}
