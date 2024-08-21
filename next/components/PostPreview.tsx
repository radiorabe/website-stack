"use client";
import { ItemsPosts } from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import StyleSheet from "react-native-media-query";

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
  index: number;
}

const PostPreview = ({ data, index }: HoverableProps) => {
  return (
    <Link
      href={`${data.date}/${data.slug}`}
      style={{
        maxWidth: 360,
        width: "30%",
        marginLeft: index % 3 ? "5%" : 0,
        marginBottom: Metrics.doubleBaseMargin,
        paddingBottom: 10,
        textDecoration: "none",
        overflow: "hidden",
        aspectRatio: 360 / 450,
        // backgroundColor: "green",
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
