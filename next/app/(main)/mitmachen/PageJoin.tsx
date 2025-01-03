"use client";
import { View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

import BreadCrump from "@/components/BreadCrumb";
import RenderTipTap from "@/components/RenderTipTap";
import Metrics from "@/lib/Metrics";

export default function PageJoin({ pageData }) {
  const data = pageData;

  return (
    <View style={styles.outerContainer} dataSet={{ media: ids.outerContainer }}>
      <View style={styles.container} dataSet={{ media: ids.container }}>
        <BreadCrump
          // style={{ marginBottom: Metrics.doubleBaseMargin }}
          label1={"Über Rabe"}
          label2={"Deine Sendung"}
        ></BreadCrump>
        {data.content && <RenderTipTap content={data.content}></RenderTipTap>}
      </View>
    </View>
  );
}

const { styles, ids } = StyleSheet.create({
  outerContainer: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
  },
  container: {
    width: "74vw",
    alignSelf: "center",
    paddingTop: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      width: "90vw",
    },
  },
});
