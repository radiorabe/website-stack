import { Api } from "@/lib/api";
import { ItemsMemberProduct } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { notFound, useSearchParams } from "next/navigation";
import { useEffect } from "react";
import Input from "./Input";
import Form from "./Form";
import Metrics from "@/lib/Metrics";

async function getMemberProduct(id) {
  try {
    const infoResponse = await Api.readSingleItemsMemberProduct(
      {
        id,
      },
      {
        cache: "no-store",
      }
    );
    let item: ItemsMemberProduct = infoResponse.data.data;

    console.log("member product: ", item);

    return item;
  } catch (error) {
    logError(error);
    notFound();
  }
}

export default async function BestellungPage({ searchParams }) {
  console.log("searchParams", searchParams);

  const filters = {
    type: searchParams.type || "",
    id: searchParams.id || "",
  };

  console.log("type", filters.type);
  console.log("id", filters.id);

  const product = await getMemberProduct(filters.id);

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
      <Form></Form>
    </div>
  );
}
