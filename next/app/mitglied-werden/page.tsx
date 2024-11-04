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
import Heart from "./Heart";
import Button from "@/components/Button";

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
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
      }}
    >
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
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignSelf: "center",
            width: "90vw",
            marginTop: Metrics.tripleBaseMargin,
          }}
        >
          <div
            style={{
              width: "43vw",
            }}
          >
            <YearlyProduct memberProducts={memberProducts}></YearlyProduct>
          </div>

          <div
            style={{
              width: "43vw",
              display: "flex",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: Colors.darkGreen,
                borderRadius: 9,
                padding: Metrics.doubleBaseMargin,
                flexGrow: 1,
              }}
            >
              <Text
                style={{
                  color: Colors.white,
                  ...Fonts.style.h2,
                  marginBottom: Metrics.halfBaseMargin,
                }}
              >
                {"Sendung unterstützen"}
              </Text>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  flexGrow: 1,
                }}
              >
                <Heart color={Colors.green}></Heart>
              </div>
              <Button
                label={"Sendung unterstützen"}
                color={Colors.white}
                hoverColor={Colors.green}
                href="/mitglied-werden/bestellung"
              ></Button>
            </div>
          </div>
        </div>
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
