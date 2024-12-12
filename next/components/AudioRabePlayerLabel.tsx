"use client";

import { useEffect, useState } from "react";
import { View, Text } from "@/lib/server-react-native";
import XMLParser from "react-xml-parser";
import { useAnimate } from "framer-motion";
import Fonts from "@/lib/Fonts";
import Colors from "@/lib/Colors";
import Metrics from "@/lib/Metrics";

export interface HoverableProps {}

const AudioRabePlayerLabel = ({}: HoverableProps) => {
  const [isClient, setIsClient] = useState(false);

  const [show, setShow] = useState("");
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
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (refetch) {
      fetch("https://songticker.rabe.ch/songticker/0.9.3/current.xml", {
        cache: "no-store",
      })
        .then((res) => res.text())
        .then((data) => {
          if (data && oldData !== data) {
            try {
              let songTickerData = new XMLParser().parseFromString(data);
              let track = songTickerData.children.find((obj) => {
                return obj.name === "track";
              });
              if (track) {
                let show = track.children.find((obj) => {
                  return obj.name === "show";
                });
                if (show && show.value) setShow(show.value);
                let artist = track.children.find((obj) => {
                  return obj.name === "artist";
                });
                if (artist && artist.value) setArtist(artist.value);
                let title = track.children.find((obj) => {
                  return obj.name === "title";
                });
                if (title && title.value) setTitle(title.value);
                let endTime = track.children.find((obj) => {
                  return obj.name === "endTime";
                });
                if (endTime && endTime.value) {
                  let endTimeDate = new Date(endTime.value);
                  let dateNow = new Date();
                  let newTimeDiff =
                    endTimeDate.getTime() - dateNow.getTime() + 1000;
                  if (newTimeDiff < 0) newTimeDiff = 5000;
                  setTimeDiff(newTimeDiff);
                  setNewDataFetched(true);
                }
              }
            } catch (e) {
              console.log("error", e);
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
      console.log("start Animation");
      let numberOfChars = show.length + artist.length + title.length;
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
      }}
    >
      <div style={{ width: "100%", height: 20 }}>
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
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        >
          <div
            key={show + artist + title}
            ref={scope}
            style={{
              display: "flex",
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
              <Text
                style={{
                  whiteSpace: "nowrap",
                  ...Fonts.style.navigationText,
                  color: Colors.lightGreen,
                }}
              >
                {artist + " - " + title + "    "}
              </Text>
              <Text
                style={{
                  whiteSpace: "nowrap",
                  ...Fonts.style.navigation,
                  color: Colors.lightGreen,
                }}
              >
                {show + " "}
              </Text>
              <Text
                style={{
                  whiteSpace: "nowrap",
                  ...Fonts.style.navigationText,
                  color: Colors.lightGreen,
                }}
              >
                {artist + " - " + title + "    "}
              </Text>
            </Text>
          </div>
        </div>
      </div>
    </View>
  );
};

export default AudioRabePlayerLabel;
