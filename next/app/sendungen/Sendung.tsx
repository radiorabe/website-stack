import LinkComponent from "@/components/LinkComponent";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import Image from "next/image";
import { Text } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

const { ids, styles } = StyleSheet.create({
  title: {
    ...Fonts.style.h2,
    paddingLeft: Metrics.baseMargin,
  },
  imageContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    borderRadius: 9,
  },
});

export default async function Sendung(props) {
  return (
    <div
      style={{
        width: "48%",
        marginBottom: Metrics.doubleBaseMargin,
      }}
    >
      <LinkComponent
        style={styles.imageContainer}
        dataSet={{ media: ids.imageContainer }}
        href={"/" + props.slug}
      >
        <div
          style={{
            width: Metrics.octBaseMargin,
          }}
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${props.image}?width=166&height=166&fit=cover`}
            width={166}
            height={166}
            style={styles.image}
            layout="responsive"
            alt={props.name}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <Text style={styles.title}>{props.name}</Text>
      </LinkComponent>
    </div>
  );
}
