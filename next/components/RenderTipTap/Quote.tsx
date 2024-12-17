"use client";
import { ItemsQuote } from "@/lib/api/data-contracts";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

export interface HoverableProps {
  data: ItemsQuote;
}

const Quote = ({ data }: HoverableProps) => {
  return (
    <View style={styles.container} dataSet={{ media: ids.container }}>
      <Text style={styles.quote} dataSet={{ media: ids.quote }}>
        {"«" + data.text + "»"}
      </Text>
      <View style={styles.infoContainer} dataSet={{ media: ids.infoContainer }}>
        <Text style={styles.author} dataSet={{ media: ids.author }}>
          {data.author}
        </Text>
        <Text style={styles.info} dataSet={{ media: ids.info }}>
          {" " + data.info}
        </Text>
      </View>
    </View>
  );
};

export default Quote;

const { ids, styles } = StyleSheet.create({
  container: {
    left: "-" + Metrics.tripleBaseMargin,
    marginVertical: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      left: 0,
    },
  },
  quote: {
    ...Fonts.style.quote,
    marginBottom: Metrics.doubleBaseMargin,
  },
  infoContainer: {
    flexDirection: "row",
    paddingLeft: Metrics.quadBaseMargin,
    "@media (max-width: 910px)": {
      paddingLeft: Metrics.tripleBaseMargin,
    },
  },
  info: {
    ...Fonts.style.textSmall,
  },
  author: {
    ...Fonts.style.textSmall,
    fontFamily: Fonts.type.bold,
  },
});
