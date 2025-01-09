// app/api/users/route.ts
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const collection = searchParams.get("collection");
  const keys = searchParams.get("keys");

  console.log(
    "revalidateTag for collection: " + collection + " and keys: " + keys
  );

  // Fetch users logic
  revalidateTag("collection");
  return NextResponse.json({ status: "all good" });
}
