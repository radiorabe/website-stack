import { draftMode } from "next/headers";
import { Api } from "@/lib/api";
import moment from "moment";
import { logError } from "@/lib/loging";

// Start Draft Mode
export async function GET(request: Request) {
  console.log("api draft");
  try{
    const { searchParams } = new URL(request.url);
    const secret = searchParams.get("secret");
    const id = searchParams.get("id");

    if (secret !== process.env.DRAFT_MODE_TOKEN) {
      return new Response("Invalid token", { status: 401 });
    }

    if (!id) {
      return new Response("Missing id", { status: 401 });
    }
    const response = await Api.readSingleItemsPost({
      id: id,
      fields: ["date_published", "slug"],
    });
    const post = response.data.data;

    if (!post) {
      return new Response("Invalid id", { status: 401 });
    }

    (await draftMode()).enable();

    return new Response(null, {
      status: 307,
      headers: {
        Location: `/beitrag/${moment(post.date).format("DD-MM-YYYY")}/${post.slug}`,
      },
    });
  }catch (e){
    logError(e);
    return new Response("Internal Error", { status: 500 });
  }
}

// Stop Draft Mode
export async function POST(req: Request) {
  const referrer = req.headers.get("Referer");
  if (!referrer) {
    return new Response("Missing Referer", { status: 400 });
  }
  (await draftMode()).disable();
  return Response.redirect(referrer, 303);
}
