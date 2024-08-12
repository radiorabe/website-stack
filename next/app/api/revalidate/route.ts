// app/api/users/route.ts
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET() {
  // Fetch users logic
  revalidateTag("collection");
  return NextResponse.json({ status: "all good" });
}
