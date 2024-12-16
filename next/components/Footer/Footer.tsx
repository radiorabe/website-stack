"use client";
import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

import Metrics from "@/lib/Metrics";
import AspectRatio from "react-aspect-ratio";
import Colors from "../../lib/Colors";
import Fonts from "../../lib/Fonts";
import HoverUrl from "../HoverUrl";
import BarIcons from "./BarIcons";
import BarLinks from "./BarLinks";
import FooterRabe from "./FooterRabe";

function Footer(contactData) {
  return (
    <View style={styles.container} dataSet={{ media: ids.container }}>
      <View style={styles.rabeContainer} dataSet={{ media: ids.rabeContainer }}>
        <AspectRatio
          ratio="1/1"
          style={{
            height: "100%",
          }}
        >
          <FooterRabe color={Colors.black}></FooterRabe>
        </AspectRatio>
      </View>

      <View
        style={styles.innerContainer}
        dataSet={{ media: ids.innerContainer }}
      >
        <View
          style={styles.textContainer}
          dataSet={{ media: ids.textContainer }}
        >
          <Text style={styles.text} dataSet={{ media: ids.text }}>
            <Text
              style={styles.textOpacity}
              dataSet={{ media: ids.textOpacity }}
            >{`Radio Bern: RaBe ${contactData.street} ${contactData.street_number}, ${contactData.plz} ${contactData.city}, `}</Text>
            <HoverUrl
              url={`mailto:${contactData.email}`}
              style={styles.textOpacity}
              dataSet={{ media: ids.textOpacity }}
              hoverStyle={{ opacity: 1 }}
            >
              {contactData.email}
            </HoverUrl>
          </Text>
        </View>

        <View>
          <Text style={styles.text} dataSet={{ media: ids.text }}>
            <Text
              style={styles.textOpacity}
              dataSet={{ media: ids.textOpacity }}
            >
              {"Studio: "}
            </Text>
            <HoverUrl
              url={`tel:${contactData.studio_phone_number}`}
              style={{ color: Colors.lightGreen }}
              hoverStyle={{ color: Colors.green }}
            >
              {contactData.studio_phone_number}
            </HoverUrl>
            <Text
              style={styles.textOpacity}
              dataSet={{ media: ids.textOpacity }}
            >
              {", "}
            </Text>

            <HoverUrl
              url={`mailto:${contactData.studio_email}`}
              style={{ color: Colors.lightGreen }}
              hoverStyle={{ color: Colors.green }}
            >
              {contactData.studio_email}
            </HoverUrl>
          </Text>
        </View>

        {/* <View style={{ height: Metrics.quadBaseMargin }}></View> */}

        <BarIcons></BarIcons>

        {/* <View style={{ height: Metrics.quadBaseMargin }}></View> */}
        <BarLinks></BarLinks>

        {/* <View style={{ height: Metrics.quadBaseMargin }}></View> */}
      </View>
    </View>
  );
}

export default Footer;

const { ids, styles } = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkGreen,
  },
  innerContainer: {
    alignItems: "center",
    width: "100%",
    padding: "3vw",
    "@media (max-width: 910px)": {
      padding: "8vw",
    },
  },

  rabeContainer: {
    position: "absolute",
    right: 0,
    bottom: 0,
    left: 0,
    top: 0,
    marginTop: "5vw",
    justifyContent: "flex-end",
    alignItems: "flex-end",
    "@media (max-width: 910px)": {
      alignItems: "center",
    },
  },
  textContainer: {
    marginBottom: Metrics.tripleBaseMargin,
  },
  text: {
    flexDirection: "row",
    color: Colors.lightGreen,
    ...Fonts.style.navigation,
    textAlign: "center",
  },
  textOpacity: {
    opacity: 0.75,
    "@media (max-width: 910px)": {
      opacity: 1,
    },
  },
});
