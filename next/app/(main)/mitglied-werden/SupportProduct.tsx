"use client";
import Button from "@/components/Button";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import Heart from "./Heart";

export default function SupportProduct(props) {
  return (
    <View style={styles.container} dataSet={{ media: ids.container }}>
      <Text
        style={{
          color: Colors.white,
          ...Fonts.style.h2,
          marginBottom: Metrics.halfBaseMargin,
        }}
      >
        {"Sendung unterstützen"}
      </Text>
      <View
        style={{
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexGrow: 1,
          marginVertical: Metrics.tripleBaseMargin,
        }}
      >
        <Heart color={Colors.green}></Heart>
      </View>
      <Button
        label={"Sendung unterstützen"}
        textColor={Colors.white}
        hoverTextColor={Colors.green}
        href={{
          pathname: "/bestellung",
          query: { slug: "choose" },
        }}
      ></Button>
    </View>
  );
}

const { styles, ids } = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkGreen,
    borderRadius: 9,
    padding: Metrics.doubleBaseMargin,
    flexGrow: 1,
    "@media (max-width: 910px)": {
      padding: Metrics.tripleBaseMargin,
    },
  },
});
