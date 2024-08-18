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
  title: "Programm",
};

export default async function ProgrammPage(props) {
  return (
    <View>
      <View>
        <Text>{"Programm"}</Text>
      </View>
    </View>
  );
}
