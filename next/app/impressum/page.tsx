import { StyleSheet, Text, View } from "react-native";
import Fonts, { FontBold, FontRegular } from "../../lib/Fonts";
import { Api } from "../../lib/api";
import { ItemsPageImpressum } from "../../lib/api/data-contracts";
// import Layout from "../components/Layout";
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
const window = new JSDOM("").window;
const purify = DOMPurify(window);
import { Metadata } from "next";
import { markdown } from "../../lib/markdown.module.css";
import { notFound } from "next/navigation";
import RenderTipTap from "@/components/RenderTipTap";
import Metrics from "@/lib/Metrics";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
  },
  link: {
    color: "blue",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    ...Fonts.style.text,
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
});

export const metadata: Metadata = {
  title: "Impressum",
};

async function getImpressum() {
  try {
    const itemResponse = await Api.readItemsPageImpressum(
      {
        fields: ["*"],
        // limit: 3,
      },
      {
        // next: { tags: ["collection"] },
        cache: "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPageImpressum = itemResponse.data.data;
    console.log("ItemsPageImpressum", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    console.error("error", error.error);

    notFound();
  }
}

export default async function ImpressumPage(props) {
  const data = await getImpressum();

  return (
    <View>
      <View
        style={{
          maxWidth: 1280,
          width: "100%",
          alignSelf: "center",
          padding: Metrics.tripleBaseMargin,
        }}
      >
        {data.content && <RenderTipTap content={data.content}></RenderTipTap>}
      </View>
    </View>
  );
}
