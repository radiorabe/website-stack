import { StyleSheet, Text, View } from "react-native";
import Fonts, { FontBold, FontRegular } from "../../lib/Fonts";
import { Api } from "../../lib/api";
import { ItemsPageImpressum, ItemsPosts } from "../../lib/api/data-contracts";
// import Layout from "../components/Layout";
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
const window = new JSDOM("").window;
const purify = DOMPurify(window);
import { Metadata } from "next";
import { markdown } from "../../lib/markdown.module.css";
import Metrics from "@/lib/Metrics";
import ButtonFull from "@/components/ButtonFull";
import { notFound } from "next/navigation";
import PostPreview from "@/components/PostPreview";
import Button from "@/components/Button";

async function getPosts() {
  try {
    const itemResponse = await Api.readItemsPosts(
      {
        fields: ["*"],
        // filter: JSON.stringify({
        //   program: {
        //     _eq: slug,
        //   },
        // }),
        sort: "-date",
        // limit: 3,
      },
      {
        // next: { tags: ["collection"] },
        cache: "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item: ItemsPosts = itemResponse.data.data;
    console.log("posts", item);
    // console.log("team", item.team);
    // console.log("posts", item.posts);

    return item;
  } catch (error) {
    console.error("error", error.error);

    notFound();
  }
}

export const metadata: Metadata = {
  title: "Impressum",
};

export default async function ImpressumPage(props) {
  const posts = await getPosts();
  console.log("posts", posts);

  return (
    <View>
      <View
        style={{
          maxWidth: 1280,
          width: "100%",
          alignSelf: "center",
          paddingVertical: Metrics.tripleBaseMargin,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",

            paddingBottom: Metrics.doubleBaseMargin,
          }}
        >
          <ButtonFull href={"/beitraege"} label={"Alle Beiträge"} />
          <Button label={"suche"} />
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {posts.map((item, index) => {
            return <PostPreview key={"post" + index} data={item}></PostPreview>;
          })}
        </View>
      </View>
    </View>
  );
}

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
