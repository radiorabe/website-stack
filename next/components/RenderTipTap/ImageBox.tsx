// "use client";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import { blurhashToBase64 } from "blurhash-base64";
import Image from "next/image";
import StyleSheet from "react-native-media-query";

export interface Props {
  image: any;
  title?: string;
  text?: string;
  width: number;
  height: number;
  icon?: any;
  style?: any;
}

const ImageBox = ({ image, width, height, title, text, style }: Props) => {
  return (
    <View style={[styles.imageContainer, style]}>
      <Image
        src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${image.id}?width=${2 * width}&height=${2 * height}&fit=cover`}
        width={width}
        height={height}
        style={styles.image}
        layout="responsive"
        alt={title}
        placeholder="blur"
        blurDataURL={blurhashToBase64(image.blurhash)}
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      <Text
        style={{
          flexDirection: "column",
          paddingHorizontal: Metrics.tripleBaseMargin,
          paddingVertical: Metrics.doubleBaseMargin,
        }}
      >
        {title && (
          <Text
            style={{
              ...Fonts.style.textSmall,
              fontFamily: Fonts.type.bold,
            }}
          >
            {"Foto: " + title}
          </Text>
        )}

        {text && <Text style={{ ...Fonts.style.textSmall }}>{" " + text}</Text>}
      </Text>
    </View>
  );
};

export default ImageBox;

const { ids, styles } = StyleSheet.create({
  imageContainer: {
    width: "100%",
  },
  title: {
    ...Fonts.style.h1,
    color: "white",
    textAlign: "center",
    paddingBottom: Metrics.doubleBaseMargin,
  },

  image: { width: "100%", borderRadius: 9 },
});
