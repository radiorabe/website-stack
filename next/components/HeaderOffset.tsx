"use client";
import { View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

const HeaderOffset = ({}) => {
  return <View style={styles.offset} dataSet={{ media: ids.offset }}></View>;
};

export default HeaderOffset;

const { ids, styles } = StyleSheet.create({
  offset: {
    height: "5vw",
    width: "100%",
    "@media (max-width: 910px)": {
      height: "13vw",
    },
  },
});
