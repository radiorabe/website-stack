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
import useResponsive from "@/lib/useResponsisve";
import moment from "moment";
import Image from "next/image";
import StyleSheet from "react-native-media-query";
import Button from "../Button";
import { blurhashToBase64 } from "blurhash-base64";

export interface Props {
  data: ItemsPost;
}

const FullPreview = ({ data }: Props) => {
  let program = data.program as ItemsPrograms;
  let imagebox = data.imagebox as ItemsImageBox;

  return (
    <View>
      <View
        style={styles.fullImageContainer}
        dataSet={{ media: ids.fullImageContainer }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${imagebox.image.id}?width=720&height=900&fit=cover`}
          width={360}
          height={450}
          style={styles.avatar}
          layout={"responsive"}
          placeholder="blur"
          blurDataURL={blurhashToBase64(imagebox.image.blurhash)}
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
};

export default FullPreview;

const { ids, styles } = StyleSheet.create({
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
    // "@media (max-width: 910px)": {
    //   position: "relative",
    // },
  },
  fullImageContainer: {
    // "@media (max-width: 910px)": {
    //   position: "absolute",
    //   top: 0,
    //   left: 0,
    //   right: 0,
    //   bottom: 0,
    // },
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
