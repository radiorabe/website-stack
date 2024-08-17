"use client";
import IconShare from "@/assets/svg/IconShare";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Link from "next/link";
import React, { ReactElement } from "react";
import { Text, Pressable, TextStyle, View, Linking } from "react-native";
import Image from "next/image";
import HoverText from "./HoverText";
import { ItemsPosts } from "@/lib/api/data-contracts";
import Metrics from "@/lib/Metrics";
import StyleSheet from "react-native-media-query";
import moment from "moment";

export type PressableState = Readonly<{
  pressed: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;

const { ids, styles } = StyleSheet.create({
  border: {
    borderBlockColor: Colors.black,
    borderRadius: 9,
    borderWidth: 1,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  sendungsInfo: { ...Fonts.style.text, color: "black" },
  avatar: { borderRadius: 9 },
});

export interface HoverableProps {
  data: ItemsPosts;
}

const PostPreview = ({ data }: HoverableProps) => {
  return (
    <Link
      href={`${data.date}/${data.slug}`}
      style={{
        maxWidth: 360,
        width: "30%",
        maxHeight: 450,
        // marginRight: Metrics.doubleBaseMargin,
        marginBottom: Metrics.doubleBaseMargin,
        paddingBottom: 10,
        textDecoration: "none",
        overflow: "hidden",
      }}
    >
      <Image
        src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${data.image}?width=360&height=240&fit=cover`}
        width={360}
        height={240}
        style={styles.avatar}
        layout="responsive"
        alt={data.title}
      />
      <View
        style={{
          paddingTop: Metrics.baseMargin,
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text
          style={[
            styles.sendungsInfo,
            styles.border,
            {
              marginBottom: Metrics.baseMargin,
            },
          ]}
        >
          {`${data.program}`}
        </Text>
        <Text style={{ ...Fonts.style.text, marginBottom: Metrics.baseMargin }}>
          {moment(data.date).format("DD. MMMM")}
        </Text>
      </View>
      <Text style={[{ ...Fonts.style.h2 }]}>{data.title}</Text>
    </Link>
  );
};

export default PostPreview;
