"use client";
import Colors from "@/lib/Colors";
// from https://medium.com/@roman_j/mastering-state-in-next-js-app-router-with-url-query-parameters-a-practical-guide-03939921d09c
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import { useState } from "react";

export default function Statement(props) {
  const [value, setValue] = useState("");

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        flexGrow: 1,
        marginBottom: Metrics.baseMargin,
        borderRadius: 8,
        borderColor: props.error ? Colors.red : "#000",
        borderWidth: 1,
        borderStyle: "solid",
      }}
    >
      <Text
        style={{
          width: value.length > 0,
          paddingLeft: Metrics.halfBaseMargin,
          visibility: value.length > 0 ? "hidden" : "visible",
          ...Fonts.style.textLink,
          color: props.error ? Colors.red : Colors.green,
          marginRight: Metrics.baseMargin,
          paddingTop: Metrics.halfBaseMargin,
          paddingBottom: Metrics.halfBaseMargin,
        }}
      >
        {props.label}
      </Text>

      <input
        type={props.type}
        name={props.inputKey}
        onChange={(val) => {
          setValue(val.target.value);
        }}
        style={{
          ...Fonts.style.TTtext,
          position: "absolute",
          left: 0,
          top: 0,
          right: 0,
          bottom: 0,
          padding: Metrics.halfBaseMargin,
          marginLeft: 0,
          backgroundColor: "transparent",
          borderColor: "transparent",
          borderRadius: 8,
          boxShadow: "none",
        }}
      ></input>
    </View>
  );
}
