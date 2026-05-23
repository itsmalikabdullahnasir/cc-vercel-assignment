import { NextRequest, NextResponse } from "next/server";

const data: Record<string, object> = {
  "001": { name: "Ali Ahmed", roll: "001", lab: 8 },
  "002": { name: "Sara Khan", roll: "002", lab: 8 },
  "008": { name: "Abdullah Nasir", roll: "01-131232-008", lab: 8 },
};

export async function GET(
  _: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const student = data[id];
  if (!student) {
    return NextResponse.json({ error: "Not found", id }, { status: 404 });
  }
  return NextResponse.json(student);
}
