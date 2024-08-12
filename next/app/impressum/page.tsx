import { StyleSheet, Text, View } from "react-native";
import Fonts, { FontBold, FontRegular } from "../../lib/Fonts";
import { Api } from "../../lib/api";
import { ItemsImpressum } from "../../lib/api/data-contracts";
// import Layout from "../components/Layout";
import { JSDOM } from "jsdom";
import DOMPurify from "dompurify";
const window = new JSDOM("").window;
const purify = DOMPurify(window);
import { Metadata } from "next";
import { markdown } from "../../lib/markdown.module.css";

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

export default async function ImpressumPage(props) {
  const response = await Api.readItemsImpressum(
    {},
    {
      next: { tags: ["collection"] },
      //  cache: "no-store"
    }
  );
  // console.log("response", response);
  let item: ItemsImpressum = response.data.data;
  const markup = { __html: purify.sanitize(item.impressum) };

  return (
    <View>
      <View>
        <div className={`${FontRegular.variable} ${FontBold.variable}`}>
          <div className={markdown} dangerouslySetInnerHTML={markup}></div>
        </div>
      </View>
    </View>
  );
}
