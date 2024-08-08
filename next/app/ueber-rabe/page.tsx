"use client";
import { StyleSheet, Text, View } from "react-native";
import Fonts from "../../themes/Fonts";
// import Layout from "../components/Layout";

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
    <View>
      <View style={styles.container}>
        <Text accessibilityRole="header" style={styles.text}>
          über rabe
        </Text>
      </View>
    </View>
  );
}
