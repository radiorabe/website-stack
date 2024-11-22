// "use client";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import Image from "next/image";
import StyleSheet from "react-native-media-query";

export type PressableState = Readonly<{
  pressed: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;

export interface Props {
  imageId: string;
  title?: string;
  text?: string;
  width: number;
  height: number;
  icon?: any;
}

const ImageBox = ({ imageId, width, height, title, text }: Props) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${imageId}?width=${width}&height=${height}&fit=cover`}
        width={width}
        height={height}
        style={styles.image}
        layout="responsive"
        alt={title}
        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
      {title && (
        <View
          style={{
            flexDirection: "row",
            paddingHorizontal: Metrics.tripleBaseMargin,
            paddingVertical: Metrics.doubleBaseMargin,
          }}
        >
          <Text
            style={{
              ...Fonts.style.textSmall,
              fontFamily: Fonts.type.bold,
            }}
          >
            {"Foto: " + title}
          </Text>
          {text && (
            <Text style={{ ...Fonts.style.textSmall }}>{" " + text}</Text>
          )}
        </View>
      )}
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
