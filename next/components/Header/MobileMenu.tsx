"use client";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import { logError } from "@/lib/loging";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import { Show } from "@/lib/Types";
import useResponsive from "@/lib/useResponsisve";
import moment from "moment";
import { useEffect, useState } from "react";
import StyleSheet from "react-native-media-query";
import LinkComponent from "../LinkComponent";

export interface Props {
  showMenu: boolean;
}

export default function MobileMenu({ showMenu }: Props) {
  return (
    <View
      style={[styles.outerContainer, { left: showMenu ? 0 : "100%" }]}
      dataSet={{ media: ids.outerContainer }}
    >
      {/* <LinkComponent href={`/programm`}>
        <Text style={styles.dropDownItem} dataSet={{ media: ids.rabeLogo }}>
          Programm
        </Text>
      </LinkComponent>
      <LinkComponent href={`/mitmachen`}>
        <Text style={styles.dropDownItem} dataSet={{ media: ids.rabeLogo }}>
          Mitmachen
        </Text>
      </LinkComponent> */}
    </View>
  );
}

const { ids, styles } = StyleSheet.create({
  outerContainer: {
    pointerEvents: "auto",
    position: "fixed",
    top: 0,
    height: "100%",
    width: "100%",
    backgroundColor: Colors.darkGreen,
    overflow: "auto",
    overflowX: "hidden",
    transition: "left 0.3s ease-in-out",
  },
});
