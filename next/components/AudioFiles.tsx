"use client";
import IconDownload from "@/assets/svg/IconDownload";
import Pausebutton from "@/assets/svg/Pausebutton";
import Playbutton from "@/assets/svg/Playbutton";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Linking, Pressable, Text, View } from "@/lib/server-react-native";

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
            key={"audiofiles" + track.title}
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
                  <>
                    {currentTrack === track ? (
                      <Pausebutton
                        scale={0.3}
                        color={hovered ? Colors.green : Colors.darkGreen}
                      ></Pausebutton>
                    ) : (
                      <Playbutton
                        scale={0.3}
                        color={hovered ? Colors.green : Colors.darkGreen}
                      ></Playbutton>
                    )}
                    <Text
                      style={{
                        ...Fonts.style.text,
                        paddingLeft: Metrics.baseMargin,
                      }}
                    >
                      {track.title}
                    </Text>
                  </>
                );
              }}
            </Pressable>
            <Pressable
              style={{
                paddingRight: Metrics.baseMargin,
                justifyContent: "center",
                height: "100%",
              }}
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
        );
      })}
    </View>
  );
};

export default AudioFiles;
