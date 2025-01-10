import { Api } from "@/lib/api";
import { ItemsPageProgram } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { Show } from "@/lib/Types";
import moment from "moment";
import { notFound } from "next/navigation";
import PageProgramm from "./PageProgramm";
import Flows from "@/lib/api/Flows";

export async function getLiveData() {
  try {
    return fetch("https://songticker.rabe.ch/libretime/live-info-v2.json", {
      next: {
        revalidate: process.env.NODE_ENV === "production" ? 900 : undefined, // in seconds
      },
      cache: process.env.NODE_ENV === "production" ? undefined : "no-store",
    })
      .then((response: any) => response.json())
      .then((liveData: any) => {
        // console.log("liveData", liveData);
        // console.log("liveDataEnd");

        let todayShows: Show[] = liveData.shows.previous.filter(
          (item) => moment().startOf("day") < moment(item.ends)
        );

        let currentShow: Show = liveData.shows.current;
        todayShows.push(currentShow);

        let nextShowsToday = liveData.shows.next.filter(
          (item) => moment().endOf("day") > moment(item.starts)
        );
        todayShows.push(...nextShowsToday);

        let shows = [
          ...liveData.shows.previous,
          currentShow,
          ...liveData.shows.next,
        ];

        return { todayShows, currentShow, shows };
      })
      .catch((error) => {
        console.log("error", error);

        return { todayShows: [], currentShow: null, shows: [] };
      });
  } catch (error) {
    logError(error);
  }
}

async function getPageData() {
  try {
    const infoResponse = await Api.readItemsPageProgram(
      {
        fields: [
          "*",
          "programs_group_1.programs_slug.*",
          "programs_group_2.programs_slug.*",
          "programs_group_3.programs_slug.*",
        ],
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.page_program]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", infoResponse);
    let item: ItemsPageProgram = infoResponse.data.data as ItemsPageProgram;

    // console.log("program data: ", item);

    return item;
  } catch (error) {
    logError(error);
    notFound();
  }
}

export default async function ProgramPage({ params }) {
  let liveData = await getLiveData();
  let data = await getPageData();
  console.info("Rerender PageProgram");

  return (
    <PageProgramm
      pageData={data}
      liveData={liveData}
      params={params}
    ></PageProgramm>
  );
}
