import RenderTipTap from "@/components/RenderTipTap";
import { Api } from "@/lib/api";
import { ItemsPageMember } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import Metrics from "@/lib/Metrics";
import { notFound } from "next/navigation";
import Statement from "./Statement";

async function getPageData() {
  try {
    const infoResponse = await Api.readItemsPageMember(
      {
        fields: ["*", "statements.statements_id.*"],
      },
      {
        // next: {
        //   tags:
        //     process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        // },
        cache: "no-store",
      }
    );
    // console.log("response", infoResponse);
    let item: ItemsPageMember = infoResponse.data.data as ItemsPageMember;

    console.log("member data: ", item);

    return item;
  } catch (error) {
    logError(error);
    notFound();
  }
}

export default async function MitgliedPage(props) {
  const data = await getPageData();

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90vw",
          alignSelf: "center",
          alignItems: "center",
          paddingTop: Metrics.tripleBaseMargin,
          paddingBottom: Metrics.tripleBaseMargin,
        }}
      >
        <Statement statements={data.statements}></Statement>

        <div
          style={{
            width: "74vw",
            paddingTop: Metrics.tripleBaseMargin,
          }}
        >
          {data.content && <RenderTipTap content={data.content}></RenderTipTap>}
        </div>
      </div>
    </div>
  );
}
