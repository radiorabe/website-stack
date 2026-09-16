import { Api } from "@/lib/api";
import { ItemsMemberProduct, ItemsOrders } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { unstable_rethrow } from "next/navigation";

import Metrics from "@/lib/Metrics";

async function getOrder(id) {
  try {
    const infoResponse = await Api.readSingleItemsOrders(
      {
        id,
      },
      {
        cache: "no-store",
      }
    );
    let item: ItemsOrders = infoResponse.data.data;

    return item;
  } catch (error) {
    unstable_rethrow(error);
    console.log("Bestellung Danke getOrder Error");

    logError(error);
    throw error;
  }
}

export default async function DankePage(props) {
  const searchParams = await props.searchParams;
  // console.log("searchParams", searchParams);

  // console.log("id", searchParams.id);

  if (!searchParams.id || searchParams.id === "") {
    return null;
  }

  const order = await getOrder(searchParams.id);

  // console.log("order", order);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "60vh",
        paddingTop: Metrics.tripleBaseMargin,
        paddingBottom: Metrics.tripleBaseMargin,
        alignItems: "center",
      }}
    >
      <div>{"Danke für deine Bestellung"}</div>
      <div>{order.name}</div>
      <div>{"Status: " + order.status}</div>
    </div>
  );
}
