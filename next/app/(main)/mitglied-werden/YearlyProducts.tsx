"use client";
import Button from "@/components/Button";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import { useEffect, useState } from "react";
import RadioButton from "./RadioButton";
import StyleSheet from "react-native-media-query";

export default function YearlyProduct(props) {
  const { memberProducts } = props;

  const hasMemberProducts = memberProducts && memberProducts.length > 0;
  const [selectedProduct, setSelectedProduct] = useState(
    hasMemberProducts && memberProducts[0].id
  );

  return (
    <View style={styles.container} dataSet={{ media: ids.container }}>
      <Text
        style={{
          color: Colors.white,
          ...Fonts.style.h2,
          marginBottom: Metrics.halfBaseMargin,
        }}
      >
        {"Jahresmitgliedschaft"}
      </Text>
      {memberProducts.map((prod) => {
        return (
          <View
            key={`yearly-prod-${prod.id}`}
            style={styles.radioButtonContainer}
            dataSet={{ media: ids.radioButtonContainer }}
          >
            <RadioButton
              selected={selectedProduct && prod.id === selectedProduct}
              id={prod.id}
              labelBold={Number(prod.price).toFixed(0) + ".- CHF "}
              label={prod.label}
              onPress={(id) => setSelectedProduct(id)}
            ></RadioButton>
          </View>
        );
      })}
      <View style={{ paddingTop: Metrics.baseMargin }}>
        <Button
          label={"Mitglied werden"}
          textColor={Colors.white}
          hovertextColor={Colors.green}
          disabled={selectedProduct === ""}
          href={{
            pathname: "/bestellung",
            query: { id: selectedProduct },
          }}
        ></Button>
      </View>
    </View>
  );
}

const { styles, ids } = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkGreen,
    borderRadius: 9,
    padding: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      padding: Metrics.tripleBaseMargin,
    },
  },
  radioButtonContainer: {
    paddingTop: Metrics.halfBaseMargin,
    paddingBottom: Metrics.halfBaseMargin,

    "@media (max-width: 910px)": {
      paddingTop: Metrics.baseMargin,
      paddingBottom: Metrics.baseMargin,
    },
  },
});
