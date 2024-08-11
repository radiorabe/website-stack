"use client";
import { Text, View } from "react-native";
import StyleSheet from "react-native-media-query";

import Fonts from "../lib/Fonts";
// import Layout from "../components/Layout";

const { ids, styles } = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
    "@media (max-width: 1600px) and (min-width: 800px)": {
      backgroundColor: "red",
    },
    "@media (max-width: 800px)": {
      backgroundColor: "blue",
    },
  },
  onlyBig: {
    "@media (max-width: 1600px) and (min-width: 800px)": {
      visibility: "hidden",
    },
    "@media (max-width: 800px)": {
      visibility: "visible",
    },
    ":hover": {
      backgroundColor: "green",
    },
  },
  link: {
    color: "blue",
  },
  textContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  text: {
    ...Fonts.style.text,
    alignItems: "center",
    fontSize: 24,
    marginBottom: 24,
  },
});

export default function App(props) {
  return (
    <View>
      <View style={styles.container} dataSet={{ media: ids.container }}>
        <Text accessibilityRole="header" style={styles.text}>
          RaBe ist über DAB+, UKW/FM, Webradio, Smartphone-Apps und
          Kabelfrequenzen empfangbar. DAB+ deckt verschiedene Regionen ab, UKW
          hat derzeit eine Reichweite von ca. 40 km um Bern und wird bis 2026
          durch DAB+ ersetzt. Webradio bietet verschiedene Streaming-Optionen,
          Smartphone-Nutzer können Apps wie Radioplayer oder Spotify verwenden.
          Kabelfrequenzen sind ebenfalls verfügbar, und fehlende Netze können
          angefragt werden.
        </Text>

        <Text style={styles.link} accessibilityRole="link" href={`/alternate`}>
          A universal link
        </Text>

        <Text
          style={styles.onlyBig}
          dataSet={{ media: ids.onlyBig }}
          accessibilityRole="link"
        >
          only big
        </Text>

        <View style={styles.textContainer}>
          <Text accessibilityRole="header" aria-level="2" style={styles.text}>
            Subheader
          </Text>
        </View>
      </View>
    </View>
  );
}
