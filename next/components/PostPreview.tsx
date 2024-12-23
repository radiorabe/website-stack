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
import useResponsive from "@/lib/useResponsisve";

export interface HoverableProps {
  data: ItemsPost;
  index: number;
}

const PostPreview = ({ data, index }: HoverableProps) => {
  let program = data.program as ItemsPrograms;
  let imagebox = data.imagebox as ItemsImageBox;

  const { isMobile } = useResponsive();

  const preview = (
    <View>
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
          <Button
            label={program.name}
            disabled={true}
            url=""
            hoverTextColor={Colors.green}
          ></Button>
        </View>
        <Text style={styles.date} dataSet={{ media: ids.date }}>
          {moment(data.date).format("DD. MMMM")}
        </Text>
      </View>
      <View
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
      </View>
    </View>
  );

  // <Image
  //   src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${program.image}?width=1280&height=600&fit=cover`}
  //   fill
  //   objectFit="cover"
  //   alt={program.name}
  //   // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
  // />

  const fullPreview = (
    <View>
      <View
        style={styles.fullImageContainer}
        dataSet={{ media: ids.fullImageContainer }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${imagebox.image}?width=360&height=450&fit=cover`}
          width={isMobile ? undefined : 360}
          height={isMobile ? undefined : 450}
          fill={isMobile}
          style={styles.avatar}
          objectFit={isMobile ? "cover" : undefined}
          layout={isMobile ? undefined : "responsive"}
          alt={data.title}
        />
      </View>
      <View
        style={styles.fullContentContainer}
        dataSet={{ media: ids.fullContentContainer }}
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
          <Button
            label={program.name}
            disabled={true}
            url=""
            textColor={Colors.white}
            hoverTextColor={Colors.green}
          ></Button>
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
    <View
      style={[
        styles.outerContainer,
        {
          marginTop: isMobile && index >= 1 ? "8vw" : index >= 3 ? "4vw" : 0,
        },
      ]}
      dataSet={{ media: ids.outerContainer }}
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
    </View>
  );
};

export default PostPreview;

const { ids, styles } = StyleSheet.create({
  outerContainer: {
    width: "100%",
    maxWidth: "100%",
    // marginTop: "8vw",

    "@media (min-width: 911px)": {
      width: "30%",
      maxWidth: "30%",
      aspectRatio: 0.8,
      // marginTop: "4vw",
    },
  },

  avatar: { borderRadius: 9, width: "100%" },
  fullContainer: {
    padding: Metrics.baseMargin,
    "@media (max-width: 910px)": {
      padding: Metrics.tripleBaseMargin,
    },
  },
  fullContentContainer: {
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    flexDirection: "column",
    justifyContent: "space-between",
    "@media (max-width: 910px)": {
      position: "relative",
    },
  },
  fullImageContainer: {
    "@media (max-width: 910px)": {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
  titleContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: Metrics.halfBaseMargin,
    "@media (max-width: 910px)": {
      marginBottom: Metrics.tripleBaseMargin,
    },
  },
  button: {
    marginTop: Metrics.baseMargin,
    "@media (max-width: 910px)": {
      marginTop: Metrics.tripleBaseMargin,
    },
  },
  date: {
    ...Fonts.style.text,
    marginTop: Metrics.baseMargin,
    "@media (max-width: 910px)": {
      marginTop: Metrics.tripleBaseMargin,
    },
  },
});
