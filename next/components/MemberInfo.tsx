// LinkComponent.js

import Metrics from "@/lib/Metrics";
import React from "react";
import { View, Text } from "@/lib/server-react-native";
import Image from "next/image";
import HoverUrl from "./HoverUrl";
import Fonts from "@/lib/Fonts";
import Colors from "@/lib/Colors";
import StyleSheet from "react-native-media-query";

const { ids, styles } = StyleSheet.create({
  avatar: { borderRadius: 9 },
});

const LinkComponent = ({ user }) => {
  return (
    <View
      style={{
        paddingBottom: Metrics.baseMargin,
        width: "50%",
        flexDirection: "row",
      }}
    >
      {user.avatar && (
        <Image
          src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${user.avatar}?width=90&height=90&fit=cover`}
          width={90}
          height={90}
          style={styles.avatar}
          // layout="responsive"
          alt={`Foto von ${user.first_name} ${user.last_name}`}
        />
      )}
      <View
        style={{
          justifyContent: "center",
          paddingLeft: Metrics.doubleBaseMargin,
        }}
      >
        <Text style={{ ...Fonts.style.text }}>
          {`${user.first_name} ${user.last_name}`}
        </Text>

        <HoverUrl
          url={"mailto:" + user.email}
          style={{ ...Fonts.style.textLink, color: Colors.green }}
          hoverStyle={{ color: Colors.darkGreen }}
        >
          {user.email}
        </HoverUrl>

        {/* <Text style={{}}>{user.email}</Text> */}
      </View>
    </View>
  );
};

export default LinkComponent;
