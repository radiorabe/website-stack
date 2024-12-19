"use client";
import BreadCrump from "@/components/BreadCrumb";
import RenderTipTap from "@/components/RenderTipTap";
import Metrics from "@/lib/Metrics";
import { View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

export default function PageImpressum({ pageData }) {
  const data = pageData;

  return (
    <View style={styles.outerContainer} dataSet={{ media: ids.outerContainer }}>
      <View style={styles.container} dataSet={{ media: ids.container }}>
        <BreadCrump
          label1={"Über Rabe"}
          label2={"Impressum"}
          style={{ marginBottom: Metrics.baseMargin }}
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
      paddingBottom: Metrics.quadBaseMargin,
    },
  },
  classesContainer: {
    marginTop: Metrics.doubleBaseMargin,
    marginBottom: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      marginTop: Metrics.quadBaseMargin,
      marginBottom: Metrics.quadBaseMargin,
    },
  },
});
