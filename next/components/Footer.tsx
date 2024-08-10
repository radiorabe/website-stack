import { View, StyleSheet, Text } from "react-native-web";
// import Fonts from "../lib/Fonts";
// import Metrics from "../lib/Metrics";
// import Colors from "../lib/Colors";
// import Image from "next/image";
import Hoverable from "./Hoverable";

// import LinkComponent from "./LinkComponent";
import React, { useState, useEffect } from "react";
import FooterRabe from "../assets/svg/FooterRabe";
import { Api } from "../lib/api";
import Colors from "../lib/Colors";
import Metrics from "../lib/Metrics";

const styles = StyleSheet.create({
  container: {
    height: 250,
    alignItems: "center",
    backgroundColor: Colors.darkGreen,
    width: "100%",
  },
  innerContainer: {
    flexDirection: "row",
    width: "100%",
    maxWidth: 1920,
    justifyContent: "space-between",
    // paddingHorizontal: Metrics.baseMargin,
  },
});

async function getData() {
  const res = await fetch("https://api.example.com/...");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

async function Footer(props) {
  const response = await Api.readItemsFooter(
    { fields: ["links.*.*"] }
    // { cache: "no-store" }
  );
  console.log("response", response);

  let links = [];
  if (response.status === 200) {
    links = response.data.data.links;
  }
  console.log("links", links);

  return (
    // <View
    //   style={{
    //     height: 250,
    //     alignItems: "center",
    //     backgroundColor: Colors.darkGreen,
    //     width: "100%",
    //   }}
    // >
    //   hallo
    // </View>
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View
          style={{
            position: "absolute",
            right: 75,
            top: 34,
            // bottom: 0,
            // backgroundColor: "yellow",
          }}
        >
          <FooterRabe color={Colors.black} scale={1}></FooterRabe>
        </View>
        {/* <Hoverable>
          {(hover) => (
            <View
              style={{
                marginVertical: Metrics.doubleBaseMargin,
                alignItems: "center",
                width: "100%",
              }}
            >
              <View
                style={{ width: 20, height: 20, backgroundColor: "white" }}
              ></View>
              <Text>bla</Text>
              <Text>bla</Text>
            </View>
          )}
        </Hoverable> */}
      </View>
    </View>
  );
}

export default Footer;
