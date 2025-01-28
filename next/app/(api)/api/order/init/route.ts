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
    console.log("Get MemberProduct Error");
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
    console.log("Create Order Error");
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
    console.log("Update Order Error");
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
  console.log("formData", formData);

  let order = {};

  let saferpay = undefined;
  let newOrder = undefined;

  // check form data
  for (const obj of formTypes) {
    let inputData = formData.get(obj.inputKey);
    if (obj.required && (!inputData || inputData === "")) {
      return NextResponse.json(
        {
          errorMessage: "Missing " + obj.inputKey,
        },
        { status: 400 }
      );
    }
    order[obj.inputKey] = formData.get(obj.inputKey);
  }

  // console.log("sorder", order);

  let orderName = "";
  let orderPrice = 0;
  let programSlug = formData.get("program");
  let amount = formData.get("amount");
  let id = formData.get("id");
  // console.log("programSlug", programSlug);
  // console.log("amount", amount);
  // console.log("sid", id);
  if (id && id !== "") {
    const memberProduct = await getMemberProduct(id);
    orderName = memberProduct.name;
    orderPrice = memberProduct.price;
  } else if (programSlug && programSlug !== "" && amount && amount > 4) {
    orderName = "Support Sendung: " + programSlug;
    orderPrice = amount;
  } else {
    return NextResponse.json(
      {
        errorMessage: "Missing data",
      },
      { status: 400 }
    );
  }

  console.log("orderName", orderName);
  console.log("orderPrice", orderPrice);

  newOrder = await createOrder({
    ...order,
    name: orderName,
    price: orderPrice,
  });
  console.log("newOrder", newOrder);

  if (newOrder) {
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
            Value: orderPrice * 100,
            CurrencyCode: "CHF",
          },
          OrderId: newOrder.id,
          Description: orderName,
          // Recurring: {
          //   Initial: true
          // }
        },
        // PaymentMethods,
        ReturnUrls: {
          Success: `${process.env.NEXT_PUBLIC_FE_URL}/bestellung/check?id=${newOrder.id}`,
          Fail: `${process.env.NEXT_PUBLIC_FE_URL}/bestellung/check/?id=${newOrder.id}`,
        },
      };
      let initPaymentURL =
        process.env.SAFERPAY_URL + "/Payment/v1/PaymentPage/Initialize";
      console.log("initPaymentURL", initPaymentURL);
      console.log("ENCODED_SAFERPAY_CREDENTIALS", ENCODED_SAFERPAY_CREDENTIALS);
      console.log("requestData", requestData);

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
      console.log("initPaymentresponse", response);
      if (response.status !== 200) {
        const text = await response.text();
        console.log("Response error: ", text);
        return NextResponse.json(
          {
            errorMessage: "Payment Request Failed",
          },
          { status: 400 }
        );
      }
      const data = await response.json();
      console.log("Response data: ", data);
      saferpay = data;
      // update order with token from saferpay
      let updatedOrder = await updateOrder(newOrder.id, {
        token: saferpay.Token,
      });
    } catch (err) {
      console.error("Error creating SAFERPAY payment:", err);
      return NextResponse.json(
        {
          errorMessage: "Payment Initialisation Failed",
        },
        { status: 400 }
      );
    }
  } else {
    return NextResponse.json(
      {
        errorMessage: "Create Order Failed",
      },
      { status: 400 }
    );
  }

  //   // Fetch users logic
  return NextResponse.json(
    {
      saferpay_url:
        saferpay && saferpay.RedirectUrl ? saferpay.RedirectUrl : undefined,
      id: newOrder ? newOrder.id : undefined,
    },
    { status: 200 }
  );
}
