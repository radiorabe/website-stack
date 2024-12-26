"use client";
import Metrics from "@/lib/Metrics";
import React from "react";
import { View, Text } from "@/lib/server-react-native";
import Image from "next/image";
import Fonts from "@/lib/Fonts";
import Colors from "@/lib/Colors";
import StyleSheet from "react-native-media-query";
import ButtonText from "./ButtonText";

const MemberInfo = ({ user }) => {
  let avatarSrc = user.avatar
    ? `${process.env.NEXT_PUBLIC_BE_URL}/assets/${user.avatar}?width=90&height=90&fit=cover`
    : "/images/anonym-profile.png";
  return (
    <View style={styles.container} dataSet={{ media: ids.container }}>
      <Image
        src={avatarSrc}
        width={90}
        height={90}
        style={{ borderRadius: 9 }}
        // layout="responsive"
        alt={`Foto von ${user.first_name || ""} ${user.last_name || ""}`}
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <View
        style={{
          justifyContent: "center",
          paddingLeft: Metrics.doubleBaseMargin,
          overflow: "hidden",
          flexGrow: 1,
          maxWidth: "75%",
        }}
      >
        <Text style={{ ...Fonts.style.text }} numberOfLines={1}>
          {`${user.first_name} ${user.last_name}`}
        </Text>

        <ButtonText
          url={"mailto:" + user.email}
          style={{
            ...Fonts.style.textLink,
            color: Colors.green,
          }}
          hoverStyle={{ color: Colors.darkGreen }}
        >
          {user.email}
        </ButtonText>
      </View>
    </View>
  );
};

export default MemberInfo;

const { ids, styles } = StyleSheet.create({
  container: {
    paddingBottom: Metrics.baseMargin,
    width: "50%",
    maxWidth: "50%",
    flexDirection: "row",
    "@media (max-width: 910px)": {
      paddingBottom: Metrics.doubleBaseMargin,
      width: "100%",
      maxWidth: "100%",
    },
  },
});
