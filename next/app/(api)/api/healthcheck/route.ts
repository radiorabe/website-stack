import { NextResponse } from "next/server";

// Endpoint to check if nextjs is accessible
export async function GET(request: Request) {
  console.log("healthcheck");
  return new NextResponse("OK");
}
