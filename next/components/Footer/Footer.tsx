"use client";
import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

import Metrics from "@/lib/Metrics";
import Colors from "../../lib/Colors";
import Fonts from "../../lib/Fonts";
import BarIcons from "./BarIcons";
import BarLinks from "./BarLinks";
import IconFooterRabe from "./IconFooterRabe";
import ButtonText from "../ButtonText";

function Footer({ data }) {
  return (
    <View style={styles.container} dataSet={{ media: ids.container }}>
      <View style={styles.rabeContainer} dataSet={{ media: ids.rabeContainer }}>
        <View
          style={{
            height: "100%",
            aspectRatio: 1,
          }}
        >
          <IconFooterRabe color={Colors.black}></IconFooterRabe>
        </View>
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
            >{`Radio Bern: RaBe ${data.street} ${data.street_number}, ${data.plz} ${data.city}, `}</Text>
            <ButtonText
              url={`mailto:${data.email}`}
              style={styles.textButton}
              dataSet={{ media: ids.textButton }}
            >
              {data.email}
            </ButtonText>
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
            <ButtonText
              url={`tel:${data.studio_phone_number}`}
              style={styles.textButton}
              dataSet={{ media: ids.textButton }}
            >
              {data.studio_phone_number}
            </ButtonText>

            <Text
              style={styles.textOpacity}
              dataSet={{ media: ids.textOpacity }}
            >
              {", "}
            </Text>

            <ButtonText
              url={`mailto:${data.studio_email}`}
              style={styles.textButton}
              dataSet={{ media: ids.textButton }}
            >
              {data.studio_email}
            </ButtonText>
          </Text>
        </View>

        <BarIcons></BarIcons>

        <BarLinks></BarLinks>
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
    padding: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      padding: Metrics.quadBaseMargin,
    },
  },

  rabeContainer: {
    position: "absolute",
    right: "10%",
    bottom: 0,
    left: 0,
    top: 0,
    marginTop: Metrics.doubleBaseMargin,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    "@media (max-width: 910px)": {
      marginTop: Metrics.tripleBaseMargin,
      alignItems: "center",
    },
  },
  textContainer: {
    marginBottom: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      marginBottom: Metrics.tripleBaseMargin,
    },
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
  textButton: {
    opacity: 0.75,
    "@media (max-width: 910px)": {
      opacity: 1,
    },
    ":hover": {
      opacity: 1,
    },
  },
});
