"use client";
import { ItemsEvents } from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import Image from "next/image";
import StyleSheet from "react-native-media-query";
import Button from "./Button";
import ButtonFull from "./ButtonFull";

export interface Props {
  event: ItemsEvents;
}

const EventBox = ({ event }: Props) => {
  return (
    <View
      style={[styles.container, { backgroundColor: event.color }]}
      dataSet={{ media: ids.container }}
    >
      <View
        style={styles.imageContainer}
        dataSet={{ media: ids.imageContainer }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${event.title_image}?width=1000&fit=cover`}
          width={1000}
          height={500}
          layout="responsive"
          alt={event.promo_title}
          // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </View>

      <View style={styles.textContainer} dataSet={{ media: ids.textContainer }}>
        <Text style={styles.title} dataSet={{ media: ids.title }}>
          {event.promo_title}
        </Text>
        <Text style={styles.text} dataSet={{ media: ids.text }}>
          {event.promo_text}
        </Text>
        <View
          style={styles.buttonContainer}
          dataSet={{ media: ids.buttonContainer }}
        >
          <ButtonFull
            label={event.promo_button_label}
            href={event.promo_button_url}
            textColor={Colors.white}
            hoverTextColor={Colors.whiteTransparent}
          ></ButtonFull>
        </View>
      </View>
    </View>
  );
};

export default EventBox;

const { ids, styles } = StyleSheet.create({
  container: {
    borderRadius: 9,
    padding: Metrics.doubleBaseMargin,
    marginBottom: Metrics.tripleBaseMargin,
    flexDirection: "row",
    justifyContent: "space-between",
    "@media (max-width: 910px)": {
      flexDirection: "column",
      alignItems: "center",
      padding: Metrics.tripleBaseMargin,
      // justifyContent: "center",
    },
  },
  imageContainer: {
    width: "50%",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: Metrics.baseMargin,
    "@media (max-width: 910px)": {
      paddingRight: 0,
      width: "65%",
      alignItems: "center",
      // justifyContent: "center",
    },
  },
  textContainer: {
    width: "50%",
    paddingLeft: Metrics.baseMargin,
    justifyContent: "center",
    paddingTop: 0,
    "@media (max-width: 910px)": {
      paddingTop: Metrics.tripleBaseMargin,
      paddingLeft: 0,
      width: "100%",
      alignItems: "center",
    },
  },
  title: {
    color: Colors.white,
    ...Fonts.style.h2,
    "@media (max-width: 910px)": {
      textAlign: "center",
    },
  },

  text: {
    textAlign: "left",
    ...Fonts.style.text,
    color: Colors.white,
    paddingVertical: Metrics.baseMargin,
    "@media (max-width: 910px)": {
      textAlign: "center",
      paddingVertical: Metrics.doubleBaseMargin,
    },
  },
  buttonContainer: {
    alignItems: "flex-start",
    "@media (max-width: 910px)": {
      alignItems: "center",
    },
  },
});
