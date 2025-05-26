import Image from "next/image";
import type { Metadata } from "next";
import Colors from "@/lib/Colors";
import Button from "@/components/Button";
import Metrics from "@/lib/Metrics";
import LinkComponent from "@/components/LinkComponent";
import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import Fonts from "@/lib/Fonts";
import ButtonText from "@/components/ButtonText";

export const metadata: Metadata = {
  title: "RaBe - Home",
};

export default function Home() {
  return (
    <View
      style={{
        width: "100vw",
        minHeight: "100vh",
        paddingTop: "5vw",
        paddingRight: "5vw",
        paddingBottom: "5vw",
        paddingLeft: "5vw",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: Colors.green,
        // backgroundColor: "#00ff00",
      }}
    >
      <View
        style={{
          width: "100%",
          maxWidth: 300,
          minHeight: "50vh",
          aspectRatio: 1,
          // backgroundColor: "#ff0000",
        }}
      >
        <Image
          src="/images/umzug.png"
          objectFit="contain"
          fill
          alt="Umzug logo"
        />
      </View>
      <View
        style={{
          maxWidth: 400,
          width: "100%",
          // backgroundColor: "#00f",
        }}
      >
        <Text style={styles.title}>Wir ziehen um!</Text>
        <Text style={styles.text}>
          <Text>
            {
              "Unsere Website macht eine kurze Pause und ist ab dem 6. Juni wieder für dich da. In der Zwischenzeit kannst du uns wie gewohnt auf "
            }
          </Text>

          <ButtonText
            url={`https://stream.rabe.ch/`}
            // dataSet={{media:ids.}}
            style={{
              ...Fonts.style.textLink,
              color: Colors.black,
            }}
            hoverStyle={{ color: Colors.white }}
          >
            {"stream.rabe.ch"}
          </ButtonText>
          <Text>{" hören. Bis bald live aus dem Marzili!"}</Text>
        </Text>
      </View>

      <Button
        label={"Jetzt hören"}
        href="/"
        textColor={Colors.white}
        hoverTextColor={Colors.whiteTransparent}
        // style={{ paddingTop: Metrics.tripleBaseMargin }}
      ></Button>
    </View>
  );
}

const { ids, styles } = StyleSheet.create({
  title: {
    ...Fonts.style.h1,
    textAlign: "center",
    paddingVertical: 30,
  },

  text: {
    ...Fonts.style.text,
    textAlign: "center",
    paddingBottom: 30,
    flexDirection: "row",
  },

  bigLink: {
    ...Fonts.style.h1,
    color: Colors.lightGreen,
    textAlign: "center",
  },
});
