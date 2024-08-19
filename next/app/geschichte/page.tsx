import { Metadata } from "next";
import { StyleSheet, Text, View } from "react-native";
import Fonts from "../../lib/Fonts";

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
  title: "Geschichte",
};

export default async function GeschichtePage(props) {
  return (
    <View>
      <View>
        <Text>{"Geschichte"}</Text>
      </View>
    </View>
  );
}
