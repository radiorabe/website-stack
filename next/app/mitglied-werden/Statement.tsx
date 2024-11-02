"use client";
import Button from "@/components/Button";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import { useEffect, useState } from "react";
// import Layout from "../components/Layout";

export default function Statement(props) {
  const [randomIndex, setRandomIndex] = useState(0);
  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * props.statements.length));
  }, []);
  const randomStatment = props.statements[randomIndex];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignSelf: "center",
        alignItems: "center",
        width: "74vw",
      }}
    >
      <Text
        style={{
          ...Fonts.style.quote,
          marginBottom: Metrics.doubleBaseMargin,
        }}
      >
        {"«" + randomStatment.text + "»"}
      </Text>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          paddingLeft: Metrics.doubleBaseMargin + Metrics.tripleBaseMargin,
        }}
      >
        <Text
          style={{
            ...Fonts.style.textSmall,
            fontFamily: Fonts.type.bold,
            paddingRight: Metrics.doubleBaseMargin,
          }}
        >
          {"Hörer*innen Statement von " + randomStatment.author}
        </Text>
        <Button
          label={"Nächstes Statement"}
          onPress={() => {
            console.log("aösdlklfj");
            setRandomIndex(Math.floor(Math.random() * props.statements.length));
          }}
        ></Button>
      </div>
    </div>
  );
}
