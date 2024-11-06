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
    return item;
  } catch (error) {
    logError(error);
  }
}

async function createOrder(data) {
  try {
    const infoResponse = await Api.createItemsOrders({}, data, {
      headers: { Authorization: "Bearer " + process.env.DIRECTUS_API_KEY },
      cache: "no-store",
    });
    let item: ItemsOrders = infoResponse.data.data as ItemsOrders;
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

export async function GET(req) {
  console.log("GET req", req);

  // Fetch users logic
  return NextResponse.json({ status: "all good" });
}

const formTypes = [
  {
    label: "Vorname*",
    inputKey: "first_name",
    required: true,
    type: "string",
  },
  {
    label: "Nachname*",
    inputKey: "family_name",
    required: true,
    type: "string",
  },
  { label: "E-Mail*", inputKey: "email", required: true, type: "email" },
  { label: "Adresse*", inputKey: "address", required: true, type: "string" },
  { label: "PLZ*", inputKey: "plz", required: true, type: "string" },
  { label: "Ort*", inputKey: "city", required: true, type: "string" },
  {
    label: "Telefon",
    inputKey: "phone_number",
    required: false,
    type: "string",
  },
];

export async function POST(request) {
  const formData = await request.formData();

  let resStatus = 200;
  let resMessage = "All good";

  let order = {};

  let type = formData.get("type");
  let id = formData.get("id");
  console.log("stype", type);
  console.log("sid", id);
  let saferpay = undefined;
  let newOrder = undefined;
  if (type && type !== "" && id && id !== "") {
    formTypes.every((obj) => {
      if (
        obj.required &&
        (!formData.get(obj.inputKey) || formData.get(obj.inputKey) === "")
      ) {
        resMessage = "Missing " + obj.inputKey;
        resStatus = 400;
        return false; // exits the every loop
      }
      order[obj.inputKey] = formData.get(obj.inputKey);
      return true;
    });

    console.log("sorder", order);
    console.log(
      "process.env.SAFERPAY_CUSTOMER_ID",
      process.env.SAFERPAY_CUSTOMER_ID
    );
    const memberProduct = await getMemberProduct(id);
    console.log("smemberProduct", memberProduct);

    newOrder = await createOrder({
      ...order,
      name: type + " " + memberProduct.label,
      price: memberProduct.price,
    });
    console.log("newOrder", newOrder);

    try {
      let requestData = {
        RequestHeader: {
          SpecVersion: "1.27",
          CustomerId: process.env.SAFERPAY_CUSTOMER_ID,
          RequestId: Math.random().toString(),
          RetryIndicator: 0,
        },
        TerminalId: process.env.SAFERPAY_TERMINAL_ID,
        Payment: {
          Amount: {
            Value: memberProduct.price * 100,
            CurrencyCode: "CHF",
          },
          OrderId: newOrder.id,
          Description: type + " " + memberProduct.label,
        },
        // PaymentMethods,
        ReturnUrls: {
          Success: `${process.env.FE_URL}/bestellung/check?id=${newOrder.id}`,
          Fail: `${process.env.FE_URL}/bestellung/check/?id=${newOrder.id}`,
        },
      };
      let initPaymentURL =
        process.env.SAFERPAY_URL + "/Payment/v1/PaymentPage/Initialize";

      const response = await fetch(initPaymentURL, {
        method: "post",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          connection: "close",
          Accept: "application/json",
          Authorization: "Basic " + ENCODED_SAFERPAY_CREDENTIALS,
        },
        body: JSON.stringify(requestData),
      });
      const data = await response.json();
      console.log("Response data: ", data);
      saferpay = data;
      // update order with token from saferpay
      let updatedOrder = await updateOrder(newOrder.id, {
        token: saferpay.Token,
      });
    } catch (err) {
      console.log("Error creating SAFERPAY payment:", err);
      return "Error SAFERPAY";
    }
  } else {
    resMessage = "Missing type or id";
    resStatus = 400;
  }

  //   // Fetch users logic
  return NextResponse.json(
    {
      message: resMessage,
      saferpay_url: saferpay.RedirectUrl ? saferpay.RedirectUrl : undefined,
      id: newOrder ? newOrder.id : undefined,
    },
    { status: resStatus }
  );
}
