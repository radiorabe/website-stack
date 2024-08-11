"use client";
import { View } from "react-native";
import Colors from "../../lib/Colors";
import Fonts from "../../lib/Fonts";
import Metrics from "../../lib/Metrics";
import HoverText from "../HoverText";
import HoverUrl from "../HoverUrl";
import LinkComponent from "../LinkComponent";

export type PressableState = Readonly<{
  pressed: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;

export interface HoverableProps {}

export default ({}: HoverableProps) => {
  return (
    <View
      style={{
        justifyContent: "center",
        flexDirection: "row",
        width: "100%",
        flexWrap: "wrap",
      }}
    >
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <HoverText
          style={{ color: Colors.lightGreen, ...Fonts.style.footer }}
          hoverStyle={{ color: Colors.green }}
        >
          {"Logo Download"}
        </HoverText>
        <View style={{ width: Metrics.doubleBaseMargin, flexShrink: 1 }}></View>
        <LinkComponent href={`/kontakt`}>
          <HoverText
            style={{ color: Colors.lightGreen, ...Fonts.style.footer }}
            hoverStyle={{ color: Colors.green }}
          >
            {"Kontakt"}
          </HoverText>
        </LinkComponent>

        <View style={{ width: Metrics.doubleBaseMargin, flexShrink: 1 }}></View>
        <LinkComponent href={`/agb`}>
          <HoverText
            style={{ color: Colors.lightGreen, ...Fonts.style.footer }}
            hoverStyle={{ color: Colors.green }}
          >
            {"AGB und Datenschutz"}
          </HoverText>
        </LinkComponent>
      </View>
      <View
        style={{
          flexDirection: "row",
          // paddingBottom: Metrics.tripleBaseMargin,
        }}
      >
        <View style={{ width: Metrics.doubleBaseMargin, flexShrink: 1 }}></View>
        <LinkComponent href={`/impressum`}>
          <HoverText
            style={{ color: Colors.lightGreen, ...Fonts.style.footer }}
            hoverStyle={{ color: Colors.green }}
          >
            {"Impressum"}
          </HoverText>
        </LinkComponent>

        <View style={{ width: Metrics.doubleBaseMargin, flexShrink: 1 }}></View>

        <HoverText
          style={{ color: Colors.lightGreen, ...Fonts.style.footer }}
          hoverStyle={{ color: Colors.green }}
        >
          {"Login"}
        </HoverText>
        <View style={{ width: Metrics.doubleBaseMargin, flexShrink: 1 }}></View>

        <HoverUrl
          style={{ color: Colors.lightGreen, ...Fonts.style.footer }}
          hoverStyle={{ color: Colors.green }}
          url={"https://www.aarefabrik.ch"}
        >
          {"aarefabrik.ch"}
        </HoverUrl>
      </View>
    </View>
  );
};
