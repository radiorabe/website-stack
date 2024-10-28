"use client";

import { useEffect, useState } from "react";
import { View, Text } from "@/lib/server-react-native";
import XMLParser from "react-xml-parser";
import useSWR from "swr";

export type PressableState = Readonly<{
  pressed: boolean;
  hovered?: boolean;
  focused?: boolean;
}>;

export interface HoverableProps {}

const AudioRabePlayerLabel = ({}: HoverableProps) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const fetcher = async (url) => {
    const res = await fetch(url);
    return res.text();
  };
  const { data, error, isLoading } = useSWR(
    "https://songticker.rabe.ch/songticker/0.9.3/current.xml",
    fetcher
  );

  console.log("data", data);

  if (data && isClient) {
    var xml = new XMLParser().parseFromString(data);
    console.log("xml", xml);
  }
  console.log("error", error);
  console.log("isLoading", isLoading);
  return (
    <View>
      <Text>{"hello blblb "}</Text>
    </View>
  );
};

export default AudioRabePlayerLabel;
