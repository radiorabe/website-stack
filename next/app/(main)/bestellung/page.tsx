import { Api } from "@/lib/api";
import { ItemsMemberProduct } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { notFound } from "next/navigation";
import PageOrder from "./PageOrder";
import Flows from "@/lib/api/Flows";

async function getMemberProduct(id) {
  try {
    const infoResponse = await Api.readSingleItemsMemberProduct(
      {
        id,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.member_product]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let item: ItemsMemberProduct = infoResponse.data.data;

    return item;
  } catch (error) {
    console.log("Bestellung getMemberProduct Error");

    logError(error);
    notFound();
  }
}

async function getSendungen() {
  try {
    const infoResponse = await Api.readItemsPrograms(
      {
        filter: JSON.stringify({
          status: {
            _eq: "published",
          },
        }),
        sort: ["name"],
        limit: 1000,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production"
              ? [Flows.collections.programs]
              : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let items = infoResponse.data.data;

    // console.log("sendungen : ", items);

    return items;
  } catch (error) {
    console.log("Bestellung getSendungen Error");
    logError(error);
  }
}

export default async function BestellungPage(props) {
  const searchParams = await props.searchParams;
  console.info("Rerender PageOrder: ");

  if ((!searchParams.id || searchParams.id === "") && !searchParams.slug) {
    return null;
  }
  let product = null;
  let selectOptions = null;
  let defaultValue = null;

  if (searchParams.slug) {
    let sendungen = await getSendungen();
    selectOptions = sendungen.map((sendung) => {
      if (sendung.slug === searchParams.slug) {
        defaultValue = { value: sendung.slug, label: sendung.name };
      }
      return { value: sendung.slug, label: sendung.name };
    });
  } else {
    product = await getMemberProduct(searchParams.id);
  }

  return (
    <PageOrder
      product={product}
      selectOptions={selectOptions}
      defaultValue={defaultValue}
      searchParams={searchParams}
    ></PageOrder>
  );
}
