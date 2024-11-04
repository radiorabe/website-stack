// app/api/users/route.ts
import { NextResponse, NextRequest } from "next/server";

// const SAFERPAY_CHECK_QUERY_PARAM = "saferpay_check";
const SAFERPAY_CREDENTIAL =
  process.env.SAFERPAY_USER_NAME + ":" + process.env.SAFERPAY_API_KEY;
const ENCODED_SAFERPAY_CREDENTIALS =
  Buffer.from(SAFERPAY_CREDENTIAL).toString("base64");

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

  console.log("order", order);

  return NextResponse.json({ message: resMessage }, { status: resStatus });
}

// export default async function handler(req: NextRequest, res: NextResponse) {
//   console.log("req", req);
//   return res;
//   // if (req.method === "POST") {
//   //   try {
//   //     let requestData = {
//   //       RequestHeader: {
//   //         SpecVersion: "1.27",
//   //         CustomerId: process.env.SAFERPAY_CUSTOMER_ID,
//   //         RequestId: Math.random().toString(),
//   //         RetryIndicator: 0,
//   //       },
//   //       TerminalId: process.env.SAFERPAY_TERMINAL_ID,
//   //       Payment: {
//   //         Amount: {
//   //           Value: data.price * 100,
//   //           CurrencyCode: "CHF",
//   //         },
//   //         OrderId: sanitizedOrder.id,
//   //         Description: `${product.amount} x ${product.name}`,
//   //       },
//   //       // PaymentMethods,
//   //       ReturnUrls: {
//   //         Success: `${process.env.BASE_URL}/order-check/?orderId=${sanitizedOrder.id}`,
//   //         Fail: `${process.env.BASE_URL}/ooops/?orderId=${sanitizedOrder.id}`,
//   //       },
//   //     };
//   //     let initPaymentURL =
//   //       process.env.SAFERPAY_URL + "/Payment/v1/PaymentPage/Initialize";

//   //     const response = await fetch(initPaymentURL, {
//   //       method: "post",
//   //       headers: {
//   //         "Content-Type": "application/json; charset=utf-8",
//   //         connection: "close",
//   //         Accept: "application/json",
//   //         Authorization: "Basic " + ENCODED_SAFERPAY_CREDENTIALS,
//   //       },
//   //       body: JSON.stringify(requestData),
//   //     });
//   //     const data = await response.json();
//   //     console.log("Response data: ", data);
//   //     saferpay = data;
//   //     // update order with token from saferpay
//   //     await strapi.services.order.update(
//   //       { id: sanitizedOrder.id },
//   //       { token: saferpay.Token }
//   //     );
//   //   } catch (err) {
//   //     console.log("Error creating SAFERPAY payment:", err);
//   //     return "Error SAFERPAY";
//   //   }

//   //   // Fetch users logic
//   //   return NextResponse.json({ users: ["Alice", "Bob"] });
//   // } else {
//   //   // Handle any other HTTP method
//   // }
// }
