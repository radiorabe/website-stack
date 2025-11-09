"use client";
import Colors from "@/lib/Colors";
// from https://medium.com/@roman_j/mastering-state-in-next-js-app-router-with-url-query-parameters-a-practical-guide-03939921d09c
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";

export default function Statement(props) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        flexGrow: 1,

        paddingLeft: Metrics.halfBaseMargin,
        marginBottom: Metrics.baseMargin,

        borderRadius: 8,
        borderColor: props.error ? "#FF686B" : "#000",

        borderWidth: 1,
        borderStyle: "solid",
      }}
    >
      <Text
        style={{
          ...Fonts.style.textLink,
          color: props.error ? "#FF686B" : Colors.green,
          marginRight: Metrics.baseMargin,
        }}
      >
        {props.label}
      </Text>
      <input
        type={props.type}
        name={props.inputKey}
        style={{
          ...Fonts.style.TTtext,

          flexGrow: 1,
          // alignSelf: "flex-end",
          // borderWidth: 1,
          borderColor: "transparent",
          borderRadius: 8,
          boxShadow: "none",
          padding: "12px 16px",
        }}
      ></input>
    </View>
  );
}
