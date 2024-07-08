import { StyleSheet, Text, View } from "react-native";
import Navigation from "../components/Navigation";
import Fonts from "../themes/Fonts";
import Layout from "../components/Layout";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexGrow: 1,
    justifyContent: "center",
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
    <Layout>
      <View>
        <View style={styles.container}>
          <Text accessibilityRole="header" style={styles.text}>
            RaBe ist über DAB+, UKW/FM, Webradio, Smartphone-Apps und
            Kabelfrequenzen empfangbar. DAB+ deckt verschiedene Regionen ab, UKW
            hat derzeit eine Reichweite von ca. 40 km um Bern und wird bis 2026
            durch DAB+ ersetzt. Webradio bietet verschiedene Streaming-Optionen,
            Smartphone-Nutzer können Apps wie Radioplayer oder Spotify
            verwenden. Kabelfrequenzen sind ebenfalls verfügbar, und fehlende
            Netze können angefragt werden.
          </Text>

          <Text
            style={styles.link}
            accessibilityRole="link"
            href={`/alternate`}
          >
            A universal link
          </Text>

          <View style={styles.textContainer}>
            <Text accessibilityRole="header" aria-level="2" style={styles.text}>
              Subheader
            </Text>
          </View>
        </View>
      </View>
    </Layout>
  );
}
