import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

import Fonts from "../../lib/Fonts";

import { Metadata } from "next";

const { styles } = StyleSheet.create({
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
  title: "Mitmachen",
};

export default async function MitmachenPage(props) {
  return (
    <View>
      <View>
        <Text>{"Mitmachen"}</Text>
      </View>
    </View>
  );
}
