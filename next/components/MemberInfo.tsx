// LinkComponent.js

import Metrics from "@/lib/Metrics";
import React from "react";
import { View, Text } from "@/lib/server-react-native";
import Image from "next/image";
import HoverUrl from "./HoverUrl";
import Fonts from "@/lib/Fonts";
import Colors from "@/lib/Colors";

const MemberInfo = ({ user }) => {
  let avatarSrc = user.avatar
    ? `${process.env.NEXT_PUBLIC_BE_URL}/assets/${user.avatar}?width=90&height=90&fit=cover`
    : "/images/anonym-profile.png";
  return (
    <View
      style={{
        paddingBottom: Metrics.baseMargin,
        width: "50%",
        flexDirection: "row",
      }}
    >
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
      </View>
    </View>
  );
};

export default MemberInfo;
