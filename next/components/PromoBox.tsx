"use client";
import { translucentColor } from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import useResponsive from "@/lib/useResponsisve";
import Image from "next/image";
import StyleSheet from "react-native-media-query";
import Button from "./Button";

export interface Props {
  title: string;
  text: string;
  backgroundColor: any;
  textColor: any;
  imageId: string;
  buttonLabel?: string;
  buttonUrl?: string;
  goldenRatio?: boolean;
}

const PromoBox = ({
  title,
  text,
  backgroundColor,
  textColor,
  imageId,
  buttonLabel,
  buttonUrl,
  goldenRatio,
}: Props) => {
  const { isMobile } = useResponsive();

  return (
    <View
      style={[styles.container, { backgroundColor: backgroundColor }]}
      dataSet={{ media: ids.container }}
    >
      <View
        style={[styles.imageContainer, { width: goldenRatio ? "38%" : "50%" }]}
        dataSet={{ media: ids.imageContainer }}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${imageId}?width=2000&fit=cover`}
          width={!isMobile ? undefined : 500}
          height={!isMobile ? undefined : 100}
          objectFit={!isMobile ? "contain" : undefined}
          layout={!isMobile ? undefined : "responsive"}
          fill={!isMobile}
          alt={title}
        />
      </View>

      <View
        style={[styles.textContainer, { width: goldenRatio ? "62%" : "50%" }]}
        dataSet={{ media: ids.textContainer }}
      >
        <Text
          style={[styles.title, { color: textColor }]}
          dataSet={{ media: ids.title }}
        >
          {title}
        </Text>
        <Text
          style={[styles.text, { color: textColor }]}
          dataSet={{ media: ids.text }}
        >
          {text}
        </Text>
        {buttonLabel !== "" && buttonUrl !== "" && (
          <View
            style={styles.buttonContainer}
            dataSet={{ media: ids.buttonContainer }}
          >
            <Button
              label={buttonLabel}
              href={buttonUrl}
              textColor={textColor}
              hoverTextColor={translucentColor(textColor, 50)}
            ></Button>
          </View>
        )}
      </View>
    </View>
  );
};

export default PromoBox;

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
    },
  },
  imageContainer: {
    paddingRight: Metrics.baseMargin,
    "@media (max-width: 910px)": {
      paddingRight: 0,
      width: "62%",
      alignItems: "center",
    },
  },
  textContainer: {
    paddingLeft: Metrics.baseMargin,
    paddingTop: Metrics.doubleBaseMargin,
    paddingBottom: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      paddingTop: Metrics.tripleBaseMargin,
      paddingBottom: 0,

      paddingLeft: 0,
      width: "100%",
      alignItems: "center",
    },
  },
  title: {
    ...Fonts.style.h2,
    "@media (max-width: 910px)": {
      textAlign: "center",
    },
  },

  text: {
    textAlign: "left",
    ...Fonts.style.text,
    paddingVertical: Metrics.baseMargin,
    "@media (max-width: 910px)": {
      textAlign: "center",
      paddingVertical: Metrics.doubleBaseMargin,
    },
  },
  buttonContainer: {
    marginTop: 7,
    alignItems: "flex-start",
    "@media (max-width: 910px)": {
      alignItems: "center",
    },
  },
});
