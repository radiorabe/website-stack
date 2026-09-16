"use client";
import Button from "@/components/Button";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import { useEffect } from "react";
import StyleSheet from "react-native-media-query";

// Rendered when a page throws — e.g. Directus is unreachable or answers with an
// error. Unlike notFound(), a thrown error is never written to the route cache,
// so the page recovers by itself on the next request instead of staying broken
// until someone edits the collection in Directus.
export default function PageError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.log("Page error boundary:", error);
  }, [error]);

  return (
    <View style={{}}>
      <View style={styles.textContainer} dataSet={{ media: ids.textContainer }}>
        <Text style={styles.text} dataSet={{ media: ids.text }}>
          {"Das hat leider nicht geklappt"}
        </Text>

        <Button
          label={"nochmals versuchen"}
          onPress={() => reset()}
          large
          style={{ paddingTop: Metrics.tripleBaseMargin }}
        ></Button>

        <Button
          label={"zur Startseite"}
          href="/"
          large
          style={{ paddingTop: Metrics.baseMargin }}
        ></Button>
      </View>
    </View>
  );
}

const { styles, ids } = StyleSheet.create({
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    alignSelf: "center",
    paddingTop: Metrics.tripleBaseMargin,
    paddingBottom: Metrics.tripleBaseMargin,
    width: "90vw",
  },
  text: {
    ...Fonts.style.h2,
    paddingTop: Metrics.tripleBaseMargin,
    paddingBottom: Metrics.tripleBaseMargin,
    textAlign: "center",
  },
});
