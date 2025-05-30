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
    console.log("Order getOrder Error");
    logError(error);
  }
}

async function updateOrder(id, data) {
  try {
    const infoResponse = await Api.updateSingleItemsOrders({ id }, data, {
      cache: "no-store",
    });
    let item: ItemsOrders = infoResponse.data.data;
    return item;
  } catch (error) {
    console.log("Order updateOrder Error");
    logError(error);
  }
}

export async function GET(request) {
  console.log("request", request);
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  let order = undefined;
  let resStatus = 200;
  let errorMessage = "";

  if (id && id !== "") {
    order = await getOrder(id);
    // console.log("order", order);
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
                // console.log("captured");
                resStatus = 400;
                errorMessage = "Error captured";
                // send info mail if something went wrong
                // await strapi.plugins["email"].services.email.send({
                //   to: "order@gloschli.ch",
                //   from: "mail@gloschli.ch",
                //   subject: `Saferpay Capture Error. OrderId: ${id}`,
                //   text: data,
                // });
              }
            }

            order = await updateOrder(id, { status: "paid" });
            console.log("updated paid: ", order);
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
            resStatus = 400;
            errorMessage = "Error orderCheck";
          }
        }
      } catch (error) {
        errorMessage = error;
      }
    }
  } else {
    errorMessage = "Missing id";
    resStatus = 400;
  }

  //   // Fetch users logic
  return NextResponse.json(
    {
      order: order ? order : undefined,
      error: errorMessage,
    },
    { status: resStatus }
  );
}
