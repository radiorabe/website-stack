"use client";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native-web";
import Fonts from "../themes/Fonts";
import Metrics from "../themes/Metrics";
import Colors from "../themes/Colors";
import NavRabe from "../assets/SVGIcons/Nav Rabe.svg";
import Image from "next/image";
import { withMedia } from "../hocs/withMedia";
import Hoverable from "./Hoverable";
import { usePathname } from "next/navigation";
import LinkComponent from "./LinkComponent";
import { useRouter } from "next/navigation";
import Playbutton from "./Playbutton";
import Pausebutton from "./Pausebutton";
import React, { useState, useEffect } from "react";
import { useAudioPlayerContext } from "../context/audio-player-context";

const styles = StyleSheet.create({
  container: {
    height: Metrics.navBarHeight,
    alignItems: "center",
    backgroundColor: Colors.lightGreen,
    width: "100%",
  },
  innerContainer: {
    flexDirection: "row",
    width: "100%",
    maxWidth: 1920,
    justifyContent: "space-between",
    // paddingHorizontal: Metrics.baseMargin,
  },
  navItemsContainer: {
    flexDirection: "row",
  },
  link: {
    color: "blue",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  rabeLogo: {
    ...Fonts.style.navigation,
    fontSize: 18,
    color: Colors.darkGreen,
  },
  navItem: {
    flexDirection: "row",
    alignItems: "center",
    height: Metrics.navBarHeight,
    paddingHorizontal: Metrics.baseMargin,
  },
});

function Navigation(props) {
  const pathname = usePathname();
  const router = useRouter();
  const { currentTrack } = useAudioPlayerContext();

  console.log("pathname:", pathname);

  // /* States */
  // const [socket, setSocket] = useState(null);
  // const [urlQueue, setUrlQueue] = useState([]);
  // const [buffers, setBuffers] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  // const [audioPlaying, setAudioPlaying] = useState(null);

  // /* Connect Web Socket Fn */
  // async function handleConnectWebSocket() {
  //   const serverUrl = "Your socket server url starting with ws or wss";
  //   const newSocket = new WebSocket(serverUrl);

  //   newSocket.onopen = () => {
  //     console.log("Connected to socket");
  //   };
  //   newSocket.onclose = () => {
  //     console.log("Disconnected");
  //   };

  //   setSocket(newSocket);
  // }

  // /* Handling Web Socket Media Event */
  // useEffect(() => {
  //   async function handleMessage(event) {
  //     const message = JSON.parse(event.data);
  //     if (message?.event === "media") {
  //       const mediaPayload = message.media.payload;
  //       setBuffers((prevBuffers) => [...prevBuffers, mediaPayload?.data]);
  //     }
  //   }
  //   if (socket) {
  //     socket.onmessage = handleMessage;
  //   }

  //   return () => {
  //     if (socket) {
  //       socket.onmessage = null;
  //     }
  //   };
  // }, [socket]);

  // /* Process Buffer Array And Add Url To UrlQueue */
  // useEffect(() => {
  //   if (buffers.length > 0) {
  //     const audioData = new Uint8Array(buffers.flat());
  //     const blob = new Blob([audioData], { type: "audio/mpeg" });
  //     const url = window.URL.createObjectURL(blob);
  //     setUrlQueue((prevUrlQueue) => [...prevUrlQueue, url]);
  //     setBuffers([]);
  //   }
  // }, [buffers]);

  // /* Play Audio Through UrlQueue */
  // useEffect(() => {
  //   const playNAudio = async () => {
  //     const nextUrl = urlQueue[0];
  //     try {
  //       if (urlQueue.length) {
  //         const audio = new Audio();
  //         setAudioPlaying(audio);

  //         audio.src = nextUrl;
  //         audio.autoplay = true;
  //         audio.preload = "auto";
  //         setIsPlaying(true);
  //         audio.onended = () => {
  //           setIsPlaying(false);
  //           setUrlQueue((prevQ) => prevQ.slice(1));
  //         };
  //         // setAudioElem(audio);
  //       }
  //     } catch (error) {
  //       console.error("Error playing Mp3 audio:", error);
  //     }
  //   };
  //   if (!isPlaying && urlQueue.length > 0) {
  //     playNAudio();
  //   }
  // }, [urlQueue, isPlaying]);
  const { audioRef } = useAudioPlayerContext();

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
    } else {
      audioRef.current?.pause();
    }
  }, [isPlaying, audioRef]);
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Hoverable>
          {(hover) => (
            <View>
              <LinkComponent
                href={`/`}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  height: Metrics.navBarHeight,
                }}
              >
                <Image
                  src="/svgs/Nav Rabe.svg"
                  width={80}
                  height={80}
                  style={{
                    transform: "translateX(0) translateY(-10px)",
                    paddingRight: Metrics.doubleBaseMargin,
                    paddingLeft: Metrics.baseMargin,
                  }}
                  alt="Picture of the author"
                />
                <Text
                  style={[styles.rabeLogo, hover && { color: Colors.green }]}
                >
                  RADIO BERN
                </Text>
              </LinkComponent>
            </View>
          )}
        </Hoverable>
        <View style={styles.navItemsContainer}>
          <Hoverable>
            {(hover) => (
              <View style={styles.navItem}>
                <LinkComponent href={`/sendungen`}>
                  <Text
                    style={[styles.rabeLogo, hover && { color: Colors.green }]}
                  >
                    Sendungen
                  </Text>
                </LinkComponent>
              </View>
            )}
          </Hoverable>

          <Hoverable>
            {(hover) => (
              <View style={styles.navItem}>
                <LinkComponent href={`/ueber-rabe`}>
                  <Text
                    style={[styles.rabeLogo, hover && { color: Colors.green }]}
                  >
                    Über RaBe
                  </Text>
                </LinkComponent>
              </View>
            )}
          </Hoverable>

          <Hoverable>
            {(hover) => (
              <View style={styles.navItem}>
                <LinkComponent
                  href={`/mitglied-werden`}
                  style={{
                    borderWidth: 1,
                    borderColor: hover ? Colors.green : Colors.darkGreen,
                    padding: Metrics.halfBaseMargin,
                    borderRadius: 10,
                  }}
                >
                  <Text
                    style={[styles.rabeLogo, hover && { color: Colors.green }]}
                  >
                    Mitglied werden
                  </Text>
                </LinkComponent>
              </View>
            )}
          </Hoverable>
          <View
            style={{
              width: 200,
              height: Metrics.navBarHeight,
              backgroundColor: Colors.darkGreen,
              justifyContent: "center",
              paddingHorizontal: Metrics.baseMargin,
              marginLeft: Metrics.baseMargin,
            }}
          >
            <TouchableHighlight onPress={() => setIsPlaying(!isPlaying)}>
              <View>
                <audio src={currentTrack.src} ref={audioRef} />

                {isPlaying ? (
                  <Pausebutton
                    color={Colors.lightGreen}
                    scale={0.6}
                  ></Pausebutton>
                ) : (
                  <Playbutton
                    color={Colors.lightGreen}
                    scale={0.6}
                  ></Playbutton>
                )}
              </View>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </View>
  );
}

export default withMedia(Navigation);
