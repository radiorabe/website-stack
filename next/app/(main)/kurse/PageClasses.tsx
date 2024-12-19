"use client";
import { View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import BreadCrump from "@/components/BreadCrumb";
import RenderTipTap from "@/components/RenderTipTap";
import Metrics from "@/lib/Metrics";
import {
  ItemsClasses,
  ItemsPageClasses,
  ItemsPageClassesClasses,
} from "@/lib/api/data-contracts";
import ClassDropDown from "./ClassDropDown";

type Props = {
  pageData: ItemsPageClasses;
};

export default function PageClasses({ pageData }: Props) {
  const data = pageData;

  return (
    <View style={styles.outerContainer} dataSet={{ media: ids.outerContainer }}>
      <View style={styles.container} dataSet={{ media: ids.container }}>
        <BreadCrump label1={"Über Rabe"} label2={"Kurse"}></BreadCrump>

        {data.content && <RenderTipTap content={data.content}></RenderTipTap>}
        {data.classes && (
          <View
            style={styles.classesContainer}
            dataSet={{ media: ids.classesContainer }}
          >
            {data.classes.map((sh: ItemsPageClassesClasses, index) => {
              let classItem = sh.classes_id as ItemsClasses;
              return (
                <ClassDropDown
                  key={"classitem" + index}
                  classItem={classItem}
                ></ClassDropDown>
              );
            })}
          </View>
        )}
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
  classesContainer: {
    marginTop: Metrics.doubleBaseMargin,
    marginBottom: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      marginTop: Metrics.quadBaseMargin,
      marginBottom: Metrics.quadBaseMargin,
    },
  },
});
