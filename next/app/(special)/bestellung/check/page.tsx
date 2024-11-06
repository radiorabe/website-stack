"use client";
import { Api } from "@/lib/api";
import { ItemsMemberProduct } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { notFound, useSearchParams } from "next/navigation";

import Metrics from "@/lib/Metrics";
import { useEffect } from "react";

async function checkOrder(id) {
  try {
    fetch(`http://localhost:3000/api/order/check?id=${id}`, {
      method: "GET",
    })
      .then((response) => {
        console.log("ordercheck response", response);
        return response.json();
      })
      .then((data) => {
        console.log("orderCheck", data);
        // return data;
      })
      .catch((e) => console.log("error", e));

    // console.log("member product: ", item);

    // return item;
  } catch (error) {
    logError(error);
    notFound();
  }
}

export default function CheckPage({ searchParams }) {
  console.log("searchParams", searchParams);

  if (!searchParams.id || searchParams.id === "") {
    console.log("no id");
    return null;
  }

  useEffect(() => {
    const product = checkOrder(searchParams.id);
    console.log("product", product);
    // window.top.postMessage(
    //   {
    //     error: false,
    //     message: "all good",
    //     type: searchParams.type,
    //     id: searchParams.id,
    //   },
    //   "*"
    // );
  }, []);

  console.log("type", searchParams.type);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: 300,
        backgroundColor: "red",
      }}
    ></div>
  );
}
