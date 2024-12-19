"use client";
import Button from "@/components/Button";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import { useEffect, useState } from "react";
import StyleSheet from "react-native-media-query";

export default function Statement(props) {
  const [randomIndex, setRandomIndex] = useState(0);
  useEffect(() => {
    setRandomIndex(Math.floor(Math.random() * props.statements.length));
  }, []);
  const randomStatment =
    props.statements.length > 0
      ? props.statements[randomIndex]
      : "No statments provided";

  return (
    <View
      style={{
        alignSelf: "center",
        alignItems: "center",
        width: "74vw",
      }}
    >
      <Text
        style={{
          ...Fonts.style.quote,
          marginBottom: Metrics.doubleBaseMargin,
          textAlign: "center",
        }}
      >
        {"«" + randomStatment.text + "»"}
      </Text>
      <View style={styles.infoContainer} dataSet={{ media: ids.infoContainer }}>
        <Text style={styles.text} dataSet={{ media: ids.text }}>
          {"Hörer*innen Statement von " + randomStatment.author}
        </Text>
        <Button
          label={"Nächstes Statement"}
          onPress={() => {
            console.log("aösdlklfj");
            setRandomIndex(Math.floor(Math.random() * props.statements.length));
          }}
        ></Button>
      </View>
    </View>
  );
}

const { styles, ids } = StyleSheet.create({
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: Metrics.doubleBaseMargin + Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      flexDirection: "column",
    },
  },
  text: {
    ...Fonts.style.textSmall,
    fontFamily: Fonts.type.bold,
    paddingRight: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      textAlign: "center",
      paddingBottom: Metrics.tripleBaseMargin,
    },
  },
});
