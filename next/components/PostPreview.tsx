"use client";
import {
  ItemsImageBox,
  ItemsPost,
  ItemsPrograms,
} from "@/lib/api/data-contracts";
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
import useResponsive from "@/lib/useResponsisve";
import ButtonFull from "./ButtonFull";

export interface HoverableProps {
  data: ItemsPost;
  index: number;
}

const PostPreview = ({ data, index }: HoverableProps) => {
  let program = data.program as ItemsPrograms;
  let imagebox = data.imagebox as ItemsImageBox;

  const { isMobile } = useResponsive();

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
          src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${imagebox.image}?width=360&height=240&fit=cover`}
          width={360}
          height={240}
          style={styles.avatar}
          layout="responsive"
          alt={data.title}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </View>
      <View
        style={styles.titleContainer}
        dataSet={{ media: ids.titleContainer }}
      >
        <View style={styles.button} dataSet={{ media: ids.button }}>
          <ButtonFull
            label={program.name}
            disabled={true}
            url=""
            hoverTextColor={Colors.green}
          ></ButtonFull>
        </View>
        <Text style={styles.date} dataSet={{ media: ids.date }}>
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
          src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${imagebox.image}?width=360&height=450&fit=cover`}
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
        <View
          style={styles.fullContainer}
          dataSet={{ media: ids.fullContainer }}
        >
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
          <ButtonFull
            label={program.name}
            disabled={true}
            url=""
            textColor={Colors.white}
            hoverTextColor={Colors.green}
          ></ButtonFull>
        </View>
        <View
          style={styles.fullContainer}
          dataSet={{ media: ids.fullContainer }}
        >
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
        width: isMobile ? "100%" : "30%",
        paddingLeft: isMobile ? 0 : index % 3 ? "5%" : 0,
        marginTop: isMobile && index >= 1 ? "8vw" : index >= 3 ? "4vw" : 0,
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

const { ids, styles } = StyleSheet.create({
  avatar: { borderRadius: 9 },
  fullContainer: {
    padding: Metrics.baseMargin,
    "@media (max-width: 910px)": {
      padding: Metrics.tripleBaseMargin,
    },
  },
  titleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    // backgroundColor: "yellow",
  },
  button: {
    marginTop: Metrics.baseMargin,
    "@media (max-width: 910px)": {
      marginTop: Metrics.tripleBaseMargin,
    },
  },
  date: {
    ...Fonts.style.text,
    paddingBottom: Metrics.halfBaseMargin,
    paddingTop: Metrics.halfBaseMargin,
    marginBottom: Metrics.baseMargin,
    marginTop: Metrics.baseMargin,
    "@media (max-width: 910px)": {
      marginBottom: Metrics.tripleBaseMargin,
      marginTop: Metrics.tripleBaseMargin,
    },
  },
});
