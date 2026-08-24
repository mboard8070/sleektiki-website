import { NextResponse } from "next/server";

export const dynamic = "force-static";

const body = {
  applinks: {
    details: [
      {
        appIDs: ["B4KM44DC6D.ai.sleektiki.Silt"],
        components: [{ "/": "/cyte" }, { "/": "/cyte/*" }],
      },
    ],
  },
  appclips: {
    apps: ["B4KM44DC6D.ai.sleektiki.Silt.Clip"],
  },
};

export async function GET() {
  const json = JSON.stringify(body);
  return new NextResponse(json, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Content-Length": String(new TextEncoder().encode(json).length),
      "Cache-Control": "public, max-age=300, no-transform",
    },
  });
}
