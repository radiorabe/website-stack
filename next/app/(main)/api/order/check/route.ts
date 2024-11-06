// app/api/users/route.ts
import { Api } from "@/lib/api";
import { ItemsMemberProduct, ItemsOrders } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { NextResponse, NextRequest } from "next/server";

// const SAFERPAY_CHECK_QUERY_PARAM = "saferpay_check";
const SAFERPAY_CREDENTIAL =
  process.env.SAFERPAY_USER_NAME + ":" + process.env.SAFERPAY_API_KEY;
const ENCODED_SAFERPAY_CREDENTIALS =
  Buffer.from(SAFERPAY_CREDENTIAL).toString("base64");

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
  }
}

async function updateOrder(id, data) {
  try {
    const infoResponse = await Api.updateSingleItemsOrders({ id }, data, {
      headers: { Authorization: "Bearer " + process.env.DIRECTUS_API_KEY },
      cache: "no-store",
    });
    let item: ItemsOrders = infoResponse.data.data;
    return item;
  } catch (error) {
    logError(error);
  }
}

export async function GET(request) {
  console.log("request", request);
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  let order = undefined;

  if (id && id !== "") {
    order = await getOrder(id);
    console.log("order", order);
    if (order.token) {
      try {
        let requestData = {
          RequestHeader: {
            SpecVersion: "1.27",
            CustomerId: process.env.SAFERPAY_CUSTOMER_ID,
            RequestId: Math.random().toString(),
            RetryIndicator: 0,
          },
          Token: order.token,
        };

        let response = await fetch(
          process.env.SAFERPAY_URL + "/Payment/v1/PaymentPage/Assert",
          {
            method: "post",
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              connection: "close",
              Accept: "application/json",
              Authorization: "Basic " + ENCODED_SAFERPAY_CREDENTIALS,
            },
            body: JSON.stringify(requestData),
          }
        );
        let data = await response.json();
        console.log("Assert Response data: ", data);
        if (data.Transaction) {
          if (
            data.Transaction.OrderId === id &&
            data.Transaction.Type === "PAYMENT" &&
            (data.Transaction.Status === "AUTHORIZED" ||
              data.Transaction.Status === "CAPTURED")
          ) {
            // capture transaction if not yet done
            if (data.Transaction.Status === "AUTHORIZED") {
              console.log("capture");

              requestData = {
                RequestHeader: {
                  SpecVersion: "1.27",
                  CustomerId: process.env.SAFERPAY_CUSTOMER_ID,
                  RequestId: Math.random().toString(),
                  RetryIndicator: 0,
                },
                TransactionReference: {
                  TransactionId: data.Transaction.Id,
                },
              };

              response = await fetch(
                process.env.SAFERPAY_URL + "/Payment/v1/Transaction/Capture",
                {
                  method: "post",
                  headers: {
                    "Content-Type": "application/json; charset=utf-8",
                    connection: "close",
                    Accept: "application/json",
                    Authorization: "Basic " + ENCODED_SAFERPAY_CREDENTIALS,
                  },
                  body: JSON.stringify(requestData),
                }
              );
              data = await response.json();
              console.log("Capture Response data: ", data);
              if (data.Status !== "CAPTURED") {
                console.log("captured");

                // send info mail if something went wrong
                // await strapi.plugins["email"].services.email.send({
                //   to: "order@gloschli.ch",
                //   from: "mail@gloschli.ch",
                //   subject: `Saferpay Capture Error. OrderId: ${id}`,
                //   text: data,
                // });
              }
            }

            // order = await strapi.services.order.update(
            //   { id },
            //   { status: "paid" }
            // );

            // strapi.services.order.sendInfoEmail({
            //   ...order,
            //   time,
            //   shippedLink,
            // });
            // strapi.services.order.sendBillEmail({
            //   ...order,
            //   time,
            // });
          } else {
            return "Error CHECK";
          }
        }
      } catch (error) {}
    }
  } else {
    // resMessage = "Missing id";
    // resStatus = 400;
  }

  //   // Fetch users logic
  return NextResponse.json(order ? order : { error: "no such order" });
}
