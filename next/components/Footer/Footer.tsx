import { StyleSheet, Text, View } from "react-native";

import Colors from "../../lib/Colors";
import Fonts from "../../lib/Fonts";
import HoverUrl from "../HoverUrl";
import BarIcons from "./BarIcons";
import BarLinks from "./BarLinks";
import FooterRabe from "./FooterRabe";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: Colors.darkGreen,
    width: "100%",
  },
  innerContainer: {
    width: "100%",
    maxWidth: 1920,
    minHeight: 250,
    justifyContent: "space-around",
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
  // const response = await Api.readItemsFooter(
  //   { fields: ["links.*.*"] }
  //   // { cache: "no-store" }
  // );
  // console.log("response", response);
  // let links = [];
  // if (response.status === 200) {
  //   let data = response.data.data;
  //   if (Array.isArray(data)) {
  //     console.error("Response is Array");
  //   } else {
  //     let footerItem: ItemsFooter = data;
  //     links = footerItem.links;
  //   }
  // }
  // console.log("links", links);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View
          style={{
            position: "absolute",
            right: 75,
            bottom: 0,
          }}
        >
          <FooterRabe color={Colors.black} scale={1}></FooterRabe>
        </View>
        <View>
          <Text
            style={{
              flexDirection: "row",
              color: Colors.lightGreen,
              ...Fonts.style.navigation,
              textAlign: "center",
            }}
          >
            <Text>{"Radio Bern: RaBe Randweg 21, 3013 Bern, "}</Text>
            <HoverUrl
              url={"mailto:info@rabe.ch"}
              style={{ color: Colors.lightGreen }}
              hoverStyle={{ color: Colors.green }}
            >
              {"info@rabe.ch"}
            </HoverUrl>
          </Text>
        </View>

        <View>
          <Text
            style={{
              flexDirection: "row",
              color: Colors.lightGreen,
              ...Fonts.style.navigation,
              textAlign: "center",
            }}
          >
            <Text>{"Studio: "}</Text>
            <HoverUrl
              url={"tel:+41 31 330 99 99"}
              style={{ color: Colors.lightGreen }}
              hoverStyle={{ color: Colors.green }}
            >
              {"031 330 99 99"}
            </HoverUrl>
            <Text>{", "}</Text>

            <HoverUrl
              url={"mailto:studio@rabe.ch"}
              style={{ color: Colors.lightGreen }}
              hoverStyle={{ color: Colors.green }}
            >
              {"studio@rabe.ch"}
            </HoverUrl>
          </Text>
        </View>

        {/* <View style={{ height: Metrics.quadBaseMargin }}></View> */}
        <BarIcons></BarIcons>
        <BarIcons></BarIcons>
        <BarIcons></BarIcons>
        <BarIcons></BarIcons>

        {/* <View style={{ height: Metrics.quadBaseMargin }}></View> */}
        <BarLinks></BarLinks>

        {/* <View style={{ height: Metrics.quadBaseMargin }}></View> */}
      </View>
    </View>
  );
}

export default Footer;
