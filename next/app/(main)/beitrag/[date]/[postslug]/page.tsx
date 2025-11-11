import { Api } from "@/lib/api";
import { ItemsPost } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import moment from "moment";
import type { Metadata, ResolvingMetadata } from "next";
import { notFound } from "next/navigation";
import PagePost from "./PagePost";
import { loadTipTapContent } from "@/components/RenderTipTap/TipTapContentLoader";
import Flows from "@/lib/api/Flows";
import { draftMode } from "next/headers";

async function getPost(params) {
  const { isEnabled } = draftMode();

  try {
    const date = moment.utc(params.date, "DD-MM-YYYY").subtract(2, "h"); // subtract two hours because of the timediff to Switzerland
    const slug = params.postslug;
    const nextDayDate = moment
      .utc(params.date, "DD-MM-YYYY")
      .add(1, "d")
      .subtract(2, "h");
    console.info("Rerender Post: " + slug);
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
          date_published: isEnabled
            ? {
                _nnull: true,
              }
            : { _gte: date, _lte: nextDayDate },
          status: isEnabled
            ? {
                _nnull: true,
              }
            : {
                _eq: "published",
              },
        }),
      },
      {
        next: {
          tags: process.env.NODE_ENV === "production" ? [slug] : undefined, // reload only when slug is revalidated
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
      items[0].content = await loadTipTapContent(items[0].content, slug);
    }

    return items[0];
  } catch (error) {
    console.log("Beitrag getPost Error");
    logError(error);

    notFound();
  }
}

async function getRelatedPosts(postSlug, programSlug) {
  try {
    const itemResponse = await Api.randomizedItemsPost(
      {
        fields: ["*", "imagebox.image.*", "program.name", , "program.slug"],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          slug: {
            _neq: postSlug,
          },
          program: {
            _eq: programSlug,
          },
          status: {
            _eq: "published",
          },
          date_published: {
            _lte: "$NOW",
          },
        }),
        limit: 3,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.post]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let items: ItemsPost[] = itemResponse.data;
    // console.log("getRelatedPosts", items);

    return items;
  } catch (error) {
    console.log("Beitrag getRelatedPosts Error");

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

  let description = post.short_description;

  if (!description && post.content && post.content.content) {
    let paragraph = post.content.content.find(
      (item) => item.type === "paragraph"
    );
    if (paragraph && paragraph.content) {
      description = paragraph.content.find((item) => item.type === "text").text;
    }
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
  const morePosts = await getRelatedPosts(post.slug, post.program.slug);

  return <PagePost post={post} morePosts={morePosts}></PagePost>;
}
