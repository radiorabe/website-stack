"use client";
import IconDownload from "@/assets/svg/IconDownload";
import Pausebutton from "@/assets/svg/Pausebutton";
import Playbutton from "@/assets/svg/Playbutton";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Linking, Pressable, Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

export interface Props {
  tracks: any[];
  currentTrack: any;
  onChange(track: any): void;
}

const AudioFiles = ({ tracks, onChange, currentTrack }: Props) => {
  return (
    <View
      style={{
        backgroundColor: Colors.lightGreen,
        borderRadius: 9,
        padding: Metrics.doubleBaseMargin,
      }}
    >
      <Text style={{ ...Fonts.style.h4 }}>
        {"Weitere Audios zu diesem Artikel"}
      </Text>
      {tracks.map((track, index) => {
        return (
          <View
            key={"audiofiles" + track.title + index}
            style={{
              flexDirection: "row",
              paddingTop: Metrics.baseMargin,
              justifyContent: "space-between",
            }}
          >
            <Pressable
              style={{
                flexDirection: "row",
                paddingRight: Metrics.baseMargin,
                alignItems: "center",
              }}
              onPress={() => onChange(track)}
            >
              {({
                pressed,
                hovered,
                focused,
              }: PressableState): ReactElement => {
                return (
                  <View style={{ flexDirection: "row" }}>
                    <View
                      style={styles.buttonContainer}
                      dataSet={{ media: ids.buttonContainer }}
                    >
                      {currentTrack && currentTrack.src === track.src ? (
                        <Pausebutton
                          color={hovered ? Colors.green : Colors.darkGreen}
                        ></Pausebutton>
                      ) : (
                        <Playbutton
                          color={hovered ? Colors.green : Colors.darkGreen}
                        ></Playbutton>
                      )}
                    </View>

                    <Text
                      style={{
                        ...Fonts.style.text,
                        paddingLeft: Metrics.baseMargin,
                      }}
                    >
                      {track.title}
                    </Text>
                  </View>
                );
              }}
            </Pressable>
            <View
              style={styles.buttonContainer}
              dataSet={{ media: ids.buttonContainer }}
            >
              <Pressable
                style={{}}
                onPress={() => {
                  Linking.openURL(track.src + "?download");
                }}
              >
                {({
                  pressed,
                  hovered,
                  focused,
                }: PressableState): ReactElement => {
                  return (
                    <IconDownload
                      color={hovered ? Colors.green : Colors.darkGreen}
                    ></IconDownload>
                  );
                }}
              </Pressable>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default AudioFiles;

const { ids, styles } = StyleSheet.create({
  buttonContainer: {
    width: Metrics.baseMargin,
    aspectRatio: 1,
    "@media (max-width: 910px)": {
      width: Metrics.doubleBaseMargin,
    },
  },
});
