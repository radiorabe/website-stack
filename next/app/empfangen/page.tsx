import { StyleSheet, Text, View } from "react-native";
import Fonts from "../../lib/Fonts";
// import Layout from "../components/Layout";
import { Metadata } from "next";

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

export const metadata: Metadata = {
  title: "Empfangen",
};

export default async function ImpressumPage(props) {
  return (
    <View>
      <View>
        <Text>{"Empfangen"}</Text>
      </View>
    </View>
  );
}
