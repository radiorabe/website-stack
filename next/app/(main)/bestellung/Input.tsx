"use client";
// from https://medium.com/@roman_j/mastering-state-in-next-js-app-router-with-url-query-parameters-a-practical-guide-03939921d09c
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text } from "@/lib/server-react-native";

export default function Statement(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "74vw",
        maxWidth: 400,
        paddingTop: Metrics.baseMargin,
      }}
    >
      <Text
        style={{
          ...Fonts.style.text,
          // marginBottom: Metrics.doubleBaseMargin,
        }}
      >
        {props.label}
      </Text>
      <input
        type={props.type}
        name={props.inputKey}
        style={{
          alignSelf: "flex-end",
          borderWidth: 1,
          borderColor: props.error ? "#f00" : "#ccc",
          borderStyle: "solid",
          padding: "12px 16px",
        }}
      ></input>
    </div>
  );
}
