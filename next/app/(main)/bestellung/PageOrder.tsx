"use client";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import Form from "./Form";
import StyleSheet from "react-native-media-query";

export default function BestellungPage({
  product,
  selectOptions,
  defaultValue,
  searchParams,
}) {
  return (
    <View style={styles.container} dataSet={{ media: ids.container }}>
      {product && (
        <View
          style={{
            alignItems: "center",
            paddingBottom: Metrics.doubleBaseMargin,
          }}
        >
          <Text
            style={{
              ...Fonts.style.text,
              textAlign: "center",
            }}
          >
            <div>{"Bestellung:"}</div>
            <div>{product.name}</div>
          </Text>
        </View>
      )}
      <Form
        type={searchParams.type}
        id={searchParams.id}
        options={selectOptions}
        defaultValue={defaultValue}
      ></Form>
    </View>
  );
}

const { styles, ids } = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: Metrics.tripleBaseMargin,
    paddingBottom: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      paddingTop: Metrics.quadBaseMargin,
      paddingBottom: Metrics.quadBaseMargin,
    },
  },
});
