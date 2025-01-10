import Footer from "./Footer";

import { Api } from "@/lib/api";
import { ItemsPageContact } from "@/lib/api/data-contracts";
import { notFound } from "next/navigation";
import { logError } from "@/lib/loging";
import Flows from "@/lib/api/Flows";

async function getContactData() {
  try {
    const itemResponse = await Api.readItemsPageContact(
      {
        fields: ["*"],
        // limit: 3,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.page_contact]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPageContact = itemResponse.data.data as ItemsPageContact;
    // console.log("PageContact", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    console.log("Footer getContactData Error");
    logError(error);

    notFound();
  }
}

async function DataFooter(props) {
  let contactData = await getContactData();

  return <Footer data={contactData}></Footer>;
}

export default DataFooter;
