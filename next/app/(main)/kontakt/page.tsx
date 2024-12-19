import { Api } from "@/lib/api";
import { ItemsPageContact } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageContact from "./PageContact";

export const metadata: Metadata = {
  title: "Kontakt",
};

async function getPageData() {
  try {
    const itemResponse = await Api.readItemsPageContact(
      {
        fields: [
          "*",
          "contact_addresses.contact_address_id.*",
          "partner_logos.*",
        ],
        // limit: 3,
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
    let item: ItemsPageContact = itemResponse.data.data as ItemsPageContact;
    console.log("ItemsPageContact", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function Page(props) {
  const data = await getPageData();

  return <PageContact pageData={data}></PageContact>;
}
