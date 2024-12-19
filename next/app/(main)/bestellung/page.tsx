import { Api } from "@/lib/api";
import { ItemsMemberProduct } from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { notFound } from "next/navigation";
import PageOrder from "./PageOrder";

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

async function getSendungen() {
  try {
    const infoResponse = await Api.readItemsPrograms(
      {
        filter: JSON.stringify({
          status: {
            _eq: "published",
          },
        }),
      },
      {
        cache: "no-store",
      }
    );
    let items = infoResponse.data.data;

    console.log("sendungen : ", items);

    return items;
  } catch (error) {
    logError(error);
  }
}

export default async function BestellungPage({ searchParams }) {
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
