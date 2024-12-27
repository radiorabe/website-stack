import { Api } from "@/lib/api";
import { ItemsPost } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import moment from "moment";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import PagePost from "./PagePost";
import { loadTipTapContent } from "@/components/RenderTipTap/TipTapContentLoader";

async function getPost(params) {
  try {
    const date = moment(params.date, "DD-MM-YYYY");
    const slug = params.postslug;
    const nextDayDate = moment(params.date, "DD-MM-YYYY").add(1, "d");

    const itemResponse = await Api.readItemsPost(
      {
        fields: [
          "*",
          "program.name",
          "program.slug",
          "authors.directus_users_id.first_name",
          "authors.directus_users_id.last_name",
          "authors.directus_users_id.id",
          "audio_files.directus_files_id.*",
          "imagebox.*",
          "imagebox.image.*",
        ],
        filter: JSON.stringify({
          slug: {
            _eq: slug,
          },
          date: { _gte: date, _lte: nextDayDate },
        }),
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let items: ItemsPost[] = itemResponse.data.data;

    // check if not empty
    if (items.length === 0) {
      notFound();
    }
    // load relational tiptap components
    if (items[0].content) {
      items[0].content = await loadTipTapContent(items[0].content);
    }

    return items[0];
  } catch (error) {
    logError(error);

    notFound();
  }
}

async function getRelatedPosts(slug) {
  try {
    const itemResponse = await Api.readItemsPost(
      {
        fields: ["*"],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          program: {
            _eq: slug,
          },
        }),
        sort: ["-date"],
        limit: 3,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPost[] = itemResponse.data.data;
    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const post = await getPost(params);
  // console.log("constent", post.content.content);

  let description = post.short_description;

  if (!description) {
    let paragraph = post.content.content.find(
      (item) => item.type === "paragraph"
    );
    description = paragraph.content.find((item) => item.type === "text").text;
  }

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.title,
    description: description,
    openGraph: {
      images: [
        `${process.env.NEXT_PUBLIC_BE_URL}/assets/${post.imagebox.image.id}?width=${300}&height=${300}&fit=cover&format=webp`,
        ...previousImages,
      ],
    },
  };
}

export default async function BeitragPage({ params }: Props) {
  const post = await getPost(params);
  return <PagePost post={post}></PagePost>;
}
