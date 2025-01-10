"use server";

import { Api } from "@/lib/api";
import { ItemsPost } from "@/lib/api/data-contracts";
import Flows from "@/lib/api/Flows";
import { logError } from "@/lib/loging";
import { notFound } from "next/navigation";

export const getPosts = async (filters, offset, limit) => {
  try {
    const itemResponse = await Api.readItemsPost(
      {
        fields: ["*", "program.name", "imagebox.image.*"],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          _and: [
            {
              status: {
                _eq: "published",
              },
            },
            {
              date: {
                _lte: "$NOW",
              },
            },
            {
              authors: {
                directus_users_id: {
                  id: filters.author ? filters.author : undefined,
                },
              },
            },
            {
              program: {
                slug: filters.program ? filters.program : undefined,
              },
            },
            {
              _or: [
                {
                  tags: {
                    tags_id: {
                      value: {
                        _icontains: filters.searchTerm
                          ? filters.searchTerm
                          : undefined,
                      },
                    },
                  },
                },
                {
                  title: {
                    _icontains: filters.searchTerm
                      ? filters.searchTerm
                      : undefined,
                  },
                },
              ],
            },
          ],
        }),
        sort: ["-date"],
        limit: limit,
        offset: offset,
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
    let item: ItemsPost[] = itemResponse.data.data;
    // console.log("item", item);

    return item;
  } catch (error) {
    console.log("Beiträge getPosts Error");
    logError(error);
    notFound();
  }
};
