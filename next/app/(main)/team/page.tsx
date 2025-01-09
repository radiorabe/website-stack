import { Api } from "@/lib/api";
import { ItemsPageTeam } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTeam from "./PageTeam";
import Flows from "@/lib/api/Flows";

export const metadata: Metadata = {
  title: "Team",
};

async function getPageData() {
  try {
    const itemResponse = await Api.readItemsPageTeam(
      {
        fields: [
          "*",
          "members_staff.directus_users_id.*",
          "members_management.directus_users_id.*",
          "members_program.directus_users_id.*",
        ],
      },
      {
        next: {
          tags: [Flows.collections.page_team],
          // process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache: "force-cache",
      }
    );
    let item: ItemsPageTeam = itemResponse.data.data as ItemsPageTeam;
    // console.log("ItemsPageTeam", item);
    console.log("RerenderPageTeam", Flows.collections.page_team);

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function TeamPage(props) {
  const data = await getPageData();
  console.log("RerenderPageTeam");

  return <PageTeam pageData={data}></PageTeam>;
}
