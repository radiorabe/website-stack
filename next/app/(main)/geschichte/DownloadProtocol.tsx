"use client";
import IconDownload from "@/assets/svg/IconDownload";
import { PressableState } from "@/lib/Types";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Linking, Pressable, Text, View } from "@/lib/server-react-native";
import { ReactElement } from "react";
import StyleSheet from "react-native-media-query";

export interface Props {
  label: string;
  url: string;
}

const DownloadProtocol = ({ label, url }: Props) => {
  return (
    <Pressable
      style={
        {
          // backgroundColor: Colors.darkGreen,
          // borderRadius: 9,
          // width: "48%",
          // paddingVertical: Metrics.doubleBaseMargin,
          // alignItems: "center",
        }
      }
      onPress={() => {
        Linking.openURL(url);
      }}
    >
      {({ pressed, hovered, focused }: PressableState): ReactElement<any> => {
        return (
          <View
            style={{
              flexDirection: "row",
              paddingTop: Metrics.baseMargin,
              alignItems: "center",
            }}
          >
            <View
              style={styles.iconContainer}
              dataSet={{ meidia: ids.iconContainer }}
            >
              <IconDownload
                color={hovered ? Colors.green : Colors.darkGreen}
              ></IconDownload>
            </View>
            <Text
              style={{
                paddingLeft: Metrics.baseMargin,
                ...Fonts.style.text,
                color: hovered ? Colors.green : Colors.black,
              }}
            >
              {label}
            </Text>
          </View>
        );
      }}
    </Pressable>
  );
};

export default DownloadProtocol;

const { styles, ids } = StyleSheet.create({
  iconContainer: {
    width: Metrics.doubleBaseMargin,
    height: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      width: Metrics.tripleBaseMargin,
      height: Metrics.tripleBaseMargin,
    },
  },
});
