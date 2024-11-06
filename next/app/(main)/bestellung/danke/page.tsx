import { Api } from "@/lib/api";
import { ItemsMemberProduct, ItemsOrders } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { notFound, useSearchParams } from "next/navigation";

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
    logError(error);
    notFound();
  }
}

export default async function DankePage({ searchParams }) {
  console.log("searchParams", searchParams);

  console.log("id", searchParams.id);

  if (!searchParams.id || searchParams.id === "") {
    return null;
  }

  const order = await getOrder(searchParams.id);

  console.log("order", order);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingTop: Metrics.tripleBaseMargin,
        paddingBottom: Metrics.tripleBaseMargin,
      }}
    >
      <div>{"thank you for your order: " + JSON.stringify(order)}</div>
    </div>
  );
}
