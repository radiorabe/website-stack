"use client";
// Special becaus no header to break out of iframe
import { Api } from "@/lib/api";
import { ItemsMemberProduct, ItemsOrders } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { notFound, useSearchParams } from "next/navigation";
import useSWR from "swr";

import { useEffect } from "react";

async function checkOrder([slug, id]) {
  try {
    let response = await fetch(`http://localhost:3000${slug}?id=${id}`, {
      method: "GET",
    });
    let data = await response.json();
    let order: ItemsOrders = data.order;
    return order;
  } catch (error) {
    logError(error);
    notFound();
  }
}

export default function CheckPage({ searchParams }) {
  // console.log("searchParams", searchParams);

  if (!searchParams.id || searchParams.id === "") {
    // console.log("no id");
    return null;
  }

  const { data, error, isLoading } = useSWR(
    ["/api/order/check", searchParams.id],
    checkOrder
  );
  // console.log("datadddd", data);

  useEffect(() => {
    if (!isLoading && data) {
      if (data.status === "paid") {
        window.top.postMessage(
          {
            error: false,
            message: "all good",
            id: searchParams.id,
          },
          "*"
        );
      } else {
        window.top.postMessage(
          {
            error: true,
            message: "Not paid",
            id: searchParams.id,
          },
          "*"
        );
      }
    }
  }, [data, isLoading]);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: 300,
        // backgroundColor: "red",
      }}
    ></div>
  );
}
