import { Api } from "@/lib/api";
import { logError } from "@/lib/loging";
import { notFound } from "next/navigation";
import { ItemsPagePrograms } from "../../../lib/api/data-contracts";
import PagePrograms from "./PagePrograms";
import Flows from "@/lib/api/Flows";

async function getPageData() {
  try {
    const infoResponse = await Api.readItemsPagePrograms(
      {},
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.page_programs, Flows.collections.programs]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", infoResponse);
    let item: ItemsPagePrograms = infoResponse.data.data as ItemsPagePrograms;

    // console.log("sendungenInfo", item);

    return item;
  } catch (error) {
    console.log("PagePrograms getPageData Error");
    logError(error);
    notFound();
  }
}

async function getSendungen() {
  try {
    const sendungenResponse = await Api.readItemsPrograms(
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          status: {
            _eq: "published",
          },
        }),
        sort: ["name"],
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.programs]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", sendungenResponse);
    let sendungen = sendungenResponse.data.data;
    // console.log("sendungen", sendungen);
    return sendungen;
  } catch (error) {
    console.log("PagePrograms getSendungen Error");
    logError(error);
    notFound();
  }
}

export default async function SendungenPage(props) {
  const pageData = await getPageData();
  const sendungen = await getSendungen();

  console.info("Rerender PagePrograms");

  return <PagePrograms pageData={pageData} programs={sendungen}></PagePrograms>;
}
