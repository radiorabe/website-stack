import { StyleSheet, View } from "react-native";

import { Api } from "../../lib/api";
import { ItemsFooter } from "../../lib/api/data-contracts";
import Colors from "../../lib/Colors";
import Metrics from "../../lib/Metrics";
import BarIcons from "./BarIcons";
import BarLinks from "./BarLinks";
import FooterRabe from "./FooterRabe";

const styles = StyleSheet.create({
  container: {
    height: 250,
    alignItems: "center",
    backgroundColor: Colors.darkGreen,
    width: "100%",
  },
  innerContainer: {
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
    let data = response.data.data;
    if (Array.isArray(data)) {
      console.error("Response is Array");
    } else {
      let footerItem: ItemsFooter = data;
      links = footerItem.links;
    }
  }
  console.log("links", links);

  return (
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
        <View style={{ height: Metrics.quadBaseMargin }}></View>
        <BarIcons></BarIcons>
        <View style={{ height: Metrics.quadBaseMargin }}></View>
        <BarLinks></BarLinks>
        <View style={{ height: Metrics.quadBaseMargin }}></View>
      </View>
    </View>
  );
}

export default Footer;
