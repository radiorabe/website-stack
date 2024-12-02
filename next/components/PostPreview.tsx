"use client";
import { ItemsPosts, ItemsPrograms } from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import StyleSheet from "react-native-media-query";
import Button from "./Button";

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
  let program: ItemsPrograms = data.program;
  return (
    <Link
      href={`/beitrag/${moment(data.date).format("DD-MM-YYYY")}/${data.slug}`}
      style={{
        width: "30%",
        paddingLeft: index % 3 ? "5%" : 0,
        marginBottom: Metrics.doubleBaseMargin,
        paddingBottom: 10,
        textDecoration: "none",
        overflow: "hidden",
        aspectRatio: 360 / 450,
      }}
    >
      <View style={{ height: "100%" }}>
        <View>
          <View
            style={{
              position: "absolute",
              top: 0,
              right: 0,
              bottom: 0,
              left: 0,
              backgroundColor: "#00635F10",
              borderRadius: 9,
            }}
          ></View>
          <Image
            src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${data.imagebox.image}?width=360&height=240&fit=cover`}
            width={360}
            height={240}
            style={styles.avatar}
            layout="responsive"
            alt={data.title}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </View>
        <View
          style={{
            paddingTop: Metrics.baseMargin,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button label={program.name} disabled={true} url=""></Button>
          <Text
            style={{ ...Fonts.style.text, marginBottom: Metrics.baseMargin }}
          >
            {moment(data.date).format("DD. MMMM")}
          </Text>
        </View>
        <Text style={[{ ...Fonts.style.h2 }]}>{data.title}</Text>
      </View>
    </Link>
  );
};

export default PostPreview;
