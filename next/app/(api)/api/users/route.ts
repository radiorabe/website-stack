// app/api/users/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  // Fetch users logic
  return NextResponse.json({ users: ["Alice", "Bob"] });
}
