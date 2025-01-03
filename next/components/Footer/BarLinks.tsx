"use client";
import { View, Text } from "@/lib/server-react-native";
import Colors from "../../lib/Colors";
import Fonts from "../../lib/Fonts";
import Metrics from "../../lib/Metrics";
import StyleSheet from "react-native-media-query";
import ButtonText from "../ButtonText";

export interface HoverableProps {}

let linkData = [
  { href: "/geschichte#logos", children: "Logo Download" },
  { href: "/kontakt", children: "Kontakt" },
  { href: "/agb", children: "AGB und Datenschutz" },
  { href: "/impressum", children: "Impressum" },
  { url: "https://archiv.rabe.ch/", children: "Archiv" },
  { url: "https://www.aarefabrik.ch", children: "aarefabrik.ch" },
];

export default ({}: HoverableProps) => {
  return (
    <View style={styles.container} dataSet={{ media: ids.container }}>
      <View
        style={styles.halfContainer1}
        dataSet={{ media: ids.halfContainer1 }}
      >
        {linkData.slice(0, 3).map((data, index) => {
          return (
            <ButtonText
              key={"Barlinks" + index}
              {...data}
              style={styles.hoverText}
              dataSet={{ media: ids.hoverText }}
            ></ButtonText>
          );
        })}
      </View>
      <View
        style={styles.halfContainer2}
        dataSet={{ media: ids.halfContainer2 }}
      >
        {linkData.slice(3, 6).map((data, index) => {
          return (
            <ButtonText
              key={"Barlinks2" + index}
              {...data}
              style={styles.hoverText}
              dataSet={{ media: ids.hoverText }}
            ></ButtonText>
          );
        })}
      </View>
    </View>
  );
};

const { ids, styles } = StyleSheet.create({
  // container: {
  //   justifyContent: "center",
  //   flexDirection: "row",
  //   width: "100%",
  //   flexWrap: "wrap",
  //   // backgroundColor: "green",
  // },
  // halfContainer: {
  //   marginTop: Metrics.doubleBaseMargin,
  //   flexDirection: "row",
  //   "@media (max-width: 910px)": {
  //     marginTop: Metrics.quadBaseMargin,
  //   },
  // },
  container: {
    justifyContent: "center",
    width: "100%",
    flexDirection: "row",
    // backgroundColor: "blue",
    marginTop: Metrics.doubleBaseMargin,

    "@media (max-width: 910px)": {
      flexDirection: "column",
      alignItems: "center",
      marginTop: Metrics.quadBaseMargin,
    },
  },
  halfContainer1: {
    flexDirection: "row",
    "@media (max-width: 910px)": {
      alignItems: "center",
    },
  },
  halfContainer2: {
    flexDirection: "row",
    "@media (max-width: 910px)": {
      alignItems: "center",
      marginTop: Metrics.tripleBaseMargin,
    },
  },
  hoverText: {
    ...Fonts.style.footer,
    color: Colors.lightGreen,
    // backgroundColor: "red",
    marginLeft: Metrics.baseMargin,
    opacity: 0.75,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ":hover": {
      opacity: 1,
    },
    "@media (max-width: 910px)": {
      opacity: 1,
    },
  },
});
