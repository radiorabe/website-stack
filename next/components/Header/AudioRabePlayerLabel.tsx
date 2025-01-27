"use client";

import { useEffect, useState } from "react";
import { View, Text } from "@/lib/server-react-native";
import { XMLParser } from "fast-xml-parser";

import { useAnimate } from "framer-motion";
import Fonts from "@/lib/Fonts";
import Colors from "@/lib/Colors";
import Metrics from "@/lib/Metrics";
import fetchPonyfill from "fetch-ponyfill";

export interface HoverableProps {}

const AudioRabePlayerLabel = ({}: HoverableProps) => {
  const [show, setShow] = useState("");
  const [maxWidth, setMaxwidth] = useState(0);
  const [artist, setArtist] = useState("");
  const [title, setTitle] = useState("");
  const [timeDiff, setTimeDiff] = useState(undefined);
  const [oldData, setOldData] = useState(null);
  const [newDataFetched, setNewDataFetched] = useState(false);
  const [refetch, setRefetch] = useState(true);

  // console.log("show", show);
  // console.log("artist", artist);
  // console.log("title", title);

  useEffect(() => {
    if (refetch) {
      fetchPonyfill()
        .fetch("https://songticker.rabe.ch/songticker/0.9.3/current.xml", {
          cache: "no-store",
        })
        .then((res) => res.text())
        .then((data) => {
          if (data && oldData !== data) {
            try {
              const parser = new XMLParser();
              let songTickerData = parser.parse(data);
              console.log("songTickerData", songTickerData);
              if (songTickerData.ticker && songTickerData.ticker.track) {
                let track = songTickerData.ticker.track;
                setShow(track.show ? track.show : "");
                setArtist(track.artist === "Radio Bern" ? "" : track.artist);
                setTitle(track.title === "Livestream" ? "" : track.title);
                if (track.endTime) {
                  let endTimeDate = new Date(track.endTime);
                  let dateNow = new Date();
                  let newTimeDiff =
                    endTimeDate.getTime() - dateNow.getTime() + 1000;
                  if (newTimeDiff < 0) newTimeDiff = 5000;
                  setTimeDiff(newTimeDiff);
                  setNewDataFetched(true);
                }
              }
            } catch (e) {
              console.error("error", e);
            }
          } else if (data && oldData === data) {
            setTimeout(() => {
              setRefetch(true);
            }, 5000);
          }
        });
      setRefetch(false);
    }
  }, [refetch]);

  const [scope, animate] = useAnimate();

  useEffect(() => {
    if (newDataFetched && scope.current) {
      // console.log("start Animation");
      let numberOfChars = show.length + artist.length + title.length;
      setMaxwidth(numberOfChars * 10);
      animate(
        scope.current,
        { x: "-50%" },
        {
          repeat: Infinity,
          repeatType: "loop",
          ease: "linear",
          duration: numberOfChars / 3,
        }
      );
      // refetch new data on track end
      if (timeDiff) {
        setTimeout(() => {
          setRefetch(true);
        }, timeDiff);
      }
      setNewDataFetched(false);
    }
  }, [newDataFetched, scope]);

  return (
    <View
      style={{
        overflow: "hidden",
        maxWidth: maxWidth,
        width: "100%",
      }}
    >
      <View
        style={{
          width: "100%",
          height: 20,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: Metrics.halfBaseMargin,
            top: 0,
            background: `linear-gradient(90deg, ${Colors.darkGreen}, transparent)`,
            zIndex: 10,
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: Metrics.halfBaseMargin,
            top: 0,
            background: `linear-gradient(270deg, ${Colors.darkGreen}, transparent)`,
            zIndex: 10,
          }}
        ></View>
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <View
            key={show + artist + title}
            ref={scope}
            style={{
              flexDirection: "row",
              whiteSpace: "nowrap",
              flexWrap: "nowrap",
            }}
          >
            <Text>
              <Text
                style={{
                  whiteSpace: "nowrap",
                  ...Fonts.style.navigation,
                  color: Colors.lightGreen,
                }}
              >
                {show + " "}
              </Text>
              {artist && (
                <Text
                  style={{
                    whiteSpace: "nowrap",
                    ...Fonts.style.navigationText,
                    color: Colors.lightGreen,
                  }}
                >
                  {artist + " "}
                </Text>
              )}

              {title && (
                <Text
                  style={{
                    whiteSpace: "nowrap",
                    ...Fonts.style.navigationText,
                    color: Colors.lightGreen,
                  }}
                >
                  {"- " + title + " "}
                </Text>
              )}
              <Text
                style={{
                  whiteSpace: "nowrap",
                  ...Fonts.style.navigation,
                  color: Colors.lightGreen,
                }}
              >
                {show + " "}
              </Text>
              {artist && (
                <Text
                  style={{
                    whiteSpace: "nowrap",
                    ...Fonts.style.navigationText,
                    color: Colors.lightGreen,
                  }}
                >
                  {artist + " "}
                </Text>
              )}

              {title && (
                <Text
                  style={{
                    whiteSpace: "nowrap",
                    ...Fonts.style.navigationText,
                    color: Colors.lightGreen,
                  }}
                >
                  {"- " + title + " "}
                </Text>
              )}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AudioRabePlayerLabel;
