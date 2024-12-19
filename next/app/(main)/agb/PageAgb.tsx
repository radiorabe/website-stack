"use client";
import RenderTipTap from "@/components/RenderTipTap";
import Metrics from "@/lib/Metrics";
import { View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

export default function PageAgb({ pageData }) {
  const data = pageData;

  return (
    <View style={styles.outerContainer} dataSet={{ media: ids.outerContainer }}>
      <View style={styles.container} dataSet={{ media: ids.container }}>
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
    paddingTop: Metrics.doubleBaseMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      width: "90vw",
      paddingBottom: Metrics.quadBaseMargin,
    },
  },
});
