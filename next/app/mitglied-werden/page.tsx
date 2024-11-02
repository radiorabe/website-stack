import RenderTipTap from "@/components/RenderTipTap";
import { Api } from "@/lib/api";
import {
  ItemsMemberProduct,
  ItemsPageMember,
  ItemsStatements,
} from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import Metrics from "@/lib/Metrics";
import { notFound } from "next/navigation";
import Statement from "./Statement";
import Colors from "@/lib/Colors";
import { Text } from "@/lib/server-react-native";
import Fonts from "@/lib/Fonts";
import RadioButton from "./RadioButton";
import { useState } from "react";
import YearlyProduct from "./YearlyProducts";

async function getPageData() {
  try {
    const infoResponse = await Api.readItemsPageMember(
      {
        fields: ["*"],
      },
      {
        // next: {
        //   tags:
        //     process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        // },
        cache: "no-store",
      }
    );
    // console.log("response", infoResponse);
    let item: ItemsPageMember = infoResponse.data.data as ItemsPageMember;

    console.log("member data: ", item);

    return item;
  } catch (error) {
    logError(error);
    notFound();
  }
}

async function getStatements() {
  try {
    const infoResponse = await Api.readItemsStatements(
      {
        fields: ["*"],
      },
      {
        // next: {
        //   tags:
        //     process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        // },
        cache: "no-store",
      }
    );
    // console.log("response", infoResponse);
    let item: ItemsStatements[] = infoResponse.data.data;

    console.log("ItemsStatements: ", item);

    return item;
  } catch (error) {
    logError(error);
    notFound();
  }
}

async function getMemberProducts() {
  try {
    const infoResponse = await Api.readItemsMemberProduct(
      {
        fields: ["*"],
      },
      {
        // next: {
        //   tags:
        //     process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        // },
        cache: "no-store",
      }
    );
    // console.log("response", infoResponse);
    let item: ItemsMemberProduct[] = infoResponse.data.data;

    console.log("member products: ", item);

    return item;
  } catch (error) {
    logError(error);
    notFound();
  }
}

export default async function MitgliedPage(props) {
  const data = await getPageData();
  const memberProducts = await getMemberProducts();
  const statements = await getStatements();

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "90vw",
          alignSelf: "center",
          alignItems: "center",
          paddingTop: Metrics.tripleBaseMargin,
          paddingBottom: Metrics.tripleBaseMargin,
        }}
      >
        <Statement statements={statements}></Statement>

        <YearlyProduct memberProducts={memberProducts}></YearlyProduct>

        <div
          style={{
            width: "74vw",
            paddingTop: Metrics.tripleBaseMargin,
          }}
        >
          {data.content && <RenderTipTap content={data.content}></RenderTipTap>}
        </div>
      </div>
    </div>
  );
}
