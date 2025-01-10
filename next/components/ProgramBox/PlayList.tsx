"use client";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import moment from "moment";
import StyleSheet from "react-native-media-query";

export interface Props {
  playlistData: any;
  hoverColor: any;
  backgroundColor: any;
  textColor: any;
}

export default function PlayList({
  playlistData,
  backgroundColor,
  textColor,
}: Props) {
  return (
    <View style={styles.halfContainer} dataSet={{ media: ids.halfContainer }}>
      <View
        style={styles.innerContainer}
        dataSet={{ media: ids.innerContainer }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            right: -20,
            overflow: "scroll",
          }}
        >
          <View style={{ paddingTop: Metrics.halfBaseMargin }}>
            {playlistData &&
              playlistData.map((track, index) => {
                return (
                  <View
                    style={styles.showContainer}
                    dataSet={{ media: ids.showContainer }}
                    key={"playlist" + index}
                  >
                    <Text
                      style={{
                        ...Fonts.style.text,
                        color: textColor,
                        paddingRight: Metrics.doubleBaseMargin,
                      }}
                    >
                      {moment(track.attributes.started_at).format("HH:mm")}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={[
                        {
                          ...Fonts.style.navigationText,
                          fontSize: 18,
                          color: textColor,
                        },
                      ]}
                    >
                      {track.attributes.artist + " - " + track.attributes.title}
                    </Text>
                  </View>
                );
              })}
          </View>
        </View>
        <View
          style={{
            height: 30,
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            background: `linear-gradient(0deg, ${backgroundColor}, transparent)`,
          }}
        ></View>
        <View
          style={{
            height: 30,
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            background: `linear-gradient(180deg, ${backgroundColor}, transparent)`,
          }}
        ></View>
      </View>
    </View>
  );
}

const { ids, styles } = StyleSheet.create({
  innerContainer: {
    width: "100%",
    overflow: "hidden",
    position: "relative",
    height: 200,
    "@media (max-width: 910px)": {
      height: 320,
      marginTop: Metrics.doubleBaseMargin,
    },
  },
  showContainer: {
    flexDirection: "row",
    paddingBottom: Metrics.halfBaseMargin,
    "@media (max-width: 910px)": {
      paddingBottom: Metrics.doubleBaseMargin,
    },
  },
  halfContainer: {
    width: "50%",
    "@media (max-width: 910px)": {
      width: "100%",
    },
  },
});
