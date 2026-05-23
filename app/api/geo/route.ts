export const runtime = "edge";

import { NextRequest, NextResponse } from "next/server";

type GeoRequest = NextRequest & {
  geo?: {
    country?: string;
    city?: string;
    region?: string;
  };
};

export async function GET(req: NextRequest) {
  const geo = (req as GeoRequest).geo;
  return NextResponse.json({
    country: geo?.country ?? "Only available on production",
    city: geo?.city ?? "Test on your deployed Vercel URL",
    region: geo?.region ?? "N/A",
    runtime: "edge",
  });
}
