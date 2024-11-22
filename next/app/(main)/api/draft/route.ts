import { draftMode } from "next/headers";
import { Api } from "@/lib/api";
import moment from "moment";

export async function GET(request: Request) {
  console.log("api draft");
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const id = searchParams.get("id");

  if (secret !== "MY_SECRET_TOKEN") {
    return new Response("Invalid token", { status: 401 });
  }

  if (!id) {
    return new Response("Missing id", { status: 401 });
  }

  const response = await Api.readSingleItemsPost({
    id: id,
    fields: [
      "*",
      "program.name",
      "program.slug",
      "authors.directus_users_id.first_name",
      "authors.directus_users_id.last_name",
      "audio_files.directus_files_id.*",
      "imagebox.*",
    ],
  });
  const post = response.data.data;

  console.log("post", post);
  d;
  if (!post) {
    return new Response("Invalid id", { status: 401 });
  }

  draftMode().enable();

  return new Response(null, {
    status: 307,
    headers: {
      Location: `/beitrag/${moment(post.date).format("DD-MM-YYYY")}/${post.slug}`,
    },
  });
}
