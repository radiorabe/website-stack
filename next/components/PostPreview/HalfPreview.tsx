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
import StyleSheet from "react-native-media-query";
import Button from "../Button";
import { blurhashToBase64 } from "blurhash-base64";

export interface Props {
  data: ItemsPost;
}

const HalfPreview = ({ data }: Props) => {
  let program = data.program as ItemsPrograms;
  let imagebox = data.imagebox as ItemsImageBox;

  return (
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
          src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${imagebox.image.id}?width=720&height=480&fit=cover`}
          width={360}
          height={240}
          style={styles.avatar}
          layout="responsive"
          alt={data.title}
          placeholder="blur"
          blurDataURL={blurhashToBase64(imagebox.image.blurhash)}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </View>
      <View style={styles.metaContainer} dataSet={{ media: ids.metaContainer }}>
        <View style={styles.button} dataSet={{ media: ids.button }}>
          <Button
            label={program.name}
            disabled={true}
            url=""
            hoverTextColor={Colors.green}
          ></Button>
        </View>
        <Text style={styles.date} dataSet={{ media: ids.date }}>
          {moment(data.date).format("D. MMMM")}
        </Text>
      </View>
      <Text style={styles.title} dataSet={{ media: ids.title }}>
        {data.title}
      </Text>
    </View>
  );
};

export default HalfPreview;

const { ids, styles } = StyleSheet.create({
  avatar: { borderRadius: 9, width: "100%" },

  metaContainer: {
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
  title: {
    ...Fonts.style.h2,
    display: "-webkit-box",
    overflow: "hidden",
    WebkitLineClamp: 2,
    lineClamp: 2,
    WebkitBoxOrient: "vertical",
    color: Colors.black,
    marginTop: -9,
  },
});
