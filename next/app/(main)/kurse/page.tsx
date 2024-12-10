import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

import Fonts from "@/lib/Fonts";

import RenderTipTap from "@/components/RenderTipTap";
import Colors from "@/lib/Colors";
import Metrics from "@/lib/Metrics";
import { Api } from "@/lib/api";
import {
  ItemsClasses,
  ItemsPageClasses,
  ItemsPageClassesClasses,
} from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import ClassDropDown from "./ClassDropDown";

export const metadata: Metadata = {
  title: "Kurse",
};

async function getPageData() {
  try {
    const itemResponse = await Api.readItemsPageClasses(
      {
        fields: ["*", "classes.classes_id.*"],
        // limit: 3,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item = itemResponse.data.data as ItemsPageClasses;
    console.log("ItemsPageClasses", item);

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function PageClasses(props) {
  const data = await getPageData();

  return (
    <View>
      <View
        style={{
          width: "100%",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "74vw",
            alignSelf: "center",
            paddingVertical: Metrics.tripleBaseMargin,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: Metrics.tripleBaseMargin,
            }}
          >
            <Text style={{ ...Fonts.style.text }}>{"Über Rabe"}</Text>
            <Text
              style={[
                { ...Fonts.style.h4 },
                { color: Colors.green, paddingHorizontal: Metrics.baseMargin },
              ]}
            >
              {"\u2192"}
            </Text>
            <Text style={{ ...Fonts.style.text }}>{"Kurse"}</Text>
          </View>
          {data.content && <RenderTipTap content={data.content}></RenderTipTap>}
          <View
            style={{
              marginTop: Metrics.doubleBaseMargin,
              width: "74vw",
            }}
          >
            {data.classes.map((sh: ItemsPageClassesClasses, index) => {
              let classItem = sh.classes_id as ItemsClasses;
              return (
                <ClassDropDown
                  key={"classitem" + index}
                  classItem={classItem}
                ></ClassDropDown>
              );
            })}
          </View>
        </View>
      </View>
    </View>
  );
}
