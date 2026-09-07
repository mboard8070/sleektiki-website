const BODY = "google.com, pub-4958109498632646, DIRECT, f08c47fec0942fa0\n";

function txt() {
  return new Response(BODY, {
    status: 200,
    headers: {
      "Content-Type": "text/plain",
      "Cache-Control": "public, max-age=300",
    },
  });
}

export function GET() {
  return txt();
}
