"use client";
import RenderTipTap from "@/components/RenderTipTap";
import Metrics from "@/lib/Metrics";
import { View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import Statement from "./Statement";
import SupportProduct from "./SupportProduct";
import YearlyProduct from "./YearlyProducts";

export default function PageMember({ pageData, memberProducts, statements }) {
  const data = pageData;

  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <View style={styles.container} dataSet={{ media: ids.container }}>
        <Statement statements={statements}></Statement>
        <View
          style={styles.outerProductContainer}
          dataSet={{ media: ids.outerProductContainer }}
        >
          <View
            style={styles.productsContainer}
            dataSet={{ media: ids.productsContainer }}
          >
            <YearlyProduct
              memberProducts={memberProducts || []}
            ></YearlyProduct>
          </View>

          <View
            style={styles.productsContainer}
            dataSet={{ media: ids.productsContainer }}
          >
            <SupportProduct></SupportProduct>
          </View>
        </View>
        <View
          style={{ paddingTop: Metrics.doubleBaseMargin, textAlign: "center" }}
        >
          {"*Studierende / RentnerInnen (AHV, IV), Besitzende einer Kulturlegi"}
        </View>
        <View
          style={styles.contentContainer}
          dataSet={{ media: ids.contentContainer }}
        >
          {data.content && <RenderTipTap content={data.content}></RenderTipTap>}
        </View>
      </View>
    </View>
  );
}

const { styles, ids } = StyleSheet.create({
  container: {
    width: "90vw",
    alignSelf: "center",
    alignItems: "center",
    paddingTop: Metrics.tripleBaseMargin,
    paddingBottom: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      paddingTop: Metrics.quadBaseMargin,
    },
  },
  outerProductContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignSelf: "center",
    width: "90vw",
    marginTop: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      flexDirection: "column",
    },
  },
  productsContainer: {
    width: "43vw",
    "@media (max-width: 910px)": {
      width: "90vw",
      marginTop: Metrics.quadBaseMargin,
    },
  },
  contentContainer: {
    width: "74vw",
    paddingTop: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      width: "90vw",
      paddingTop: Metrics.quadBaseMargin,
    },
  },
});
