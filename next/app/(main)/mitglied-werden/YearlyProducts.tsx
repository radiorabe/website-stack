"use client";
import Button from "@/components/Button";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import { useEffect, useState } from "react";
import RadioButton from "./RadioButton";
// import Layout from "../components/Layout";

export default function YearlyProduct(props) {
  const { memberProducts } = props;
  const [selectedProduct, setSelectedProduct] = useState();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: Colors.darkGreen,
        borderRadius: 9,
        padding: Metrics.doubleBaseMargin,
      }}
    >
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
          <div
            key={`yearly-prod-${prod.id}`}
            style={{
              paddingTop: Metrics.halfBaseMargin,
              paddingBottom: Metrics.halfBaseMargin,
            }}
          >
            <RadioButton
              selected={selectedProduct && prod.id === selectedProduct}
              id={prod.id}
              labelBold={Number(prod.price).toFixed(0) + ".- CHF "}
              label={prod.label}
              onPress={(id) => setSelectedProduct(id)}
            ></RadioButton>
          </div>
        );
      })}
      <div style={{ paddingTop: Metrics.baseMargin }}>
        <Button
          label={"Mitglied werden"}
          color={Colors.white}
          hoverColor={Colors.green}
          href={{
            pathname: "/bestellung",
            query: { id: selectedProduct, type: "yearly" },
          }}
        ></Button>
      </div>
    </div>
  );
}
