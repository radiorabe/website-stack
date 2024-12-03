"use client";
import { ItemsPost, ItemsPrograms } from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import StyleSheet from "react-native-media-query";
import Button from "./Button";
import { AspectRatio } from "react-aspect-ratio"; // Recommended: if you are using React > 15.6

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
  data: ItemsPost;
  index: number;
}

const PostPreview = ({ data, index }: HoverableProps) => {
  let program = data.program as ItemsPrograms;

  const preview = (
    <View
      style={{
        maxHeight: "100%",
        overflow: "hidden",
        aspectRatio: 360 / 450,
      }}
    >
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
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            paddingTop: Metrics.baseMargin,
          }}
        >
          <Button label={program.name} disabled={true} url=""></Button>
        </View>
        <Text
          style={{
            ...Fonts.style.text,
            marginBottom: Metrics.baseMargin,
            paddingTop: Metrics.baseMargin,
          }}
        >
          {moment(data.date).format("DD. MMMM")}
        </Text>
      </View>
      <div
        style={{
          ...Fonts.style.h2,
          display: "-webkit-box",
          overflow: "hidden",
          WebkitLineClamp: 2,
          lineClamp: 2,
          WebkitBoxOrient: "vertical",
          color: Colors.black,
        }}
      >
        {data.title}
      </div>
    </View>
  );

  const fullPreview = (
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
          src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${data.imagebox.image}?width=360&height=450&fit=cover`}
          width={360}
          height={450}
          style={styles.avatar}
          layout="responsive"
          alt={data.title}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </View>
      <View
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <View style={{ padding: Metrics.baseMargin }}>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              background: `linear-gradient(180deg, black, transparent)`,
              opacity: 0.4,
              borderTopLeftRadius: 9,
              borderTopRightRadius: 9,
            }}
          ></View>
          <Button
            label={program.name}
            disabled={true}
            url=""
            color={Colors.white}
          ></Button>
        </View>
        <View style={{ padding: Metrics.baseMargin }}>
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              background: `linear-gradient(0deg, black, transparent)`,
              opacity: 0.4,
              zIndex: -1,
              borderBottomLeftRadius: 9,
              borderBottomRightRadius: 9,
            }}
          ></View>
          <Text
            style={{
              ...Fonts.style.text,
              marginBottom: Metrics.baseMargin,
              color: Colors.white,
            }}
          >
            {moment(data.date).format("DD. MMMM")}
          </Text>
          <Text
            style={[
              {
                ...Fonts.style.h2,
                color: Colors.white,
              },
            ]}
          >
            {data.title}
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <AspectRatio
      ratio="360/450"
      style={{
        width: "30%",
        paddingLeft: index % 3 ? "5%" : 0,
        marginTop: index >= 3 ? "4vw" : 0,
      }}
    >
      <Link
        href={`/beitrag/${moment(data.date).format("DD-MM-YYYY")}/${data.slug}`}
        style={{
          textDecoration: "none",
          overflow: "hidden",
        }}
      >
        {data.preview_full_image ? fullPreview : preview}
      </Link>
    </AspectRatio>
  );
};

export default PostPreview;
