import { NextResponse } from "next/server";

export const dynamic = "force-static";

const body = {
  applinks: {
    apps: [] as string[],
    details: [
      {
        appID: "B4KM44DC6D.ai.sleektiki.Silt",
        paths: ["/cyte", "/cyte/*"],
      },
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
  return new NextResponse(JSON.stringify(body), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
