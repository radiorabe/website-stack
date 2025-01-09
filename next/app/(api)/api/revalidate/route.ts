// app/api/users/route.ts
import { revalidateTag } from "next/cache";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const collection = searchParams.get("collection");
  const key = searchParams.get("key");
  const keys = searchParams.getAll("keys");
  console.log(`collection: ${collection} key: ${key} keys: ${keys}`);

  if (keys) {
    console.log(`revalidate collection: ${collection}`);
    keys.forEach((item) => {
      console.log(`    key: `, item);
      revalidateTag(item);
    });
  }
  if (key) {
    console.log(`revalidate collection: ${collection} key: ${key}`);
    revalidateTag(key);
  }
  if (!key && !keys) {
    console.log(`revalidate collection: ${collection}`);
  }
  revalidateTag(collection);
  revalidateTag("page_home"); // allways revalidate home
  return NextResponse.json({ status: "all good" });
}
