"use client";

import { View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import { useCallback, useEffect, useRef, useState } from "react";

import Metrics from "@/lib/Metrics";

const PAYREXX_URL = "https://rabe-merch.payrexx.com/pay?tid=106f70a9&appview=1";

export default function MerchShop() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(0);

  const handlePayrexxMessage = useCallback((e: MessageEvent) => {
    if (!e.origin.includes("payrexx.com")) {
      return;
    }
    if (typeof e.data !== "string") {
      return;
    }
    try {
      const data = JSON.parse(e.data);
      const height = data?.payrexx?.height;
      if (height) {
        setIframeHeight(parseInt(String(height), 10));
      }
    } catch {
      // ignore non-JSON messages
    }
  }, []);

  useEffect(() => {
    window.addEventListener("message", handlePayrexxMessage);
    return () => window.removeEventListener("message", handlePayrexxMessage);
  }, [handlePayrexxMessage]);

  const handleIframeLoad = useCallback(() => {
    const iframe = iframeRef.current;
    if (!iframe?.contentWindow) {
      return;
    }
    iframe.contentWindow.postMessage(
      JSON.stringify({ origin: window.location.origin }),
      iframe.src,
    );
  }, []);

  return (
    <View style={styles.outerContainer} dataSet={{ media: ids.outerContainer }}>
      <View style={styles.container} dataSet={{ media: ids.container }}>
        <View style={{}}>
          <iframe
            ref={iframeRef}
            src={PAYREXX_URL}
            allow="payment *"
            width="100%"
            id="payrexx-embed"
            scrolling="no"
            style={styles.iframe}
            height={iframeHeight === 0 ? undefined : iframeHeight}
            onLoad={handleIframeLoad}
          />
        </View>
      </View>
    </View>
  );
}

const { styles, ids } = StyleSheet.create({
  outerContainer: {
    width: "100%",
    alignSelf: "center",
    alignItems: "center",
  },
  container: {
    width: "74vw",
    alignSelf: "center",
    paddingTop: Metrics.tripleBaseMargin,
    paddingBottom: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      width: "90vw",
      paddingBottom: Metrics.quadBaseMargin,
    },
  },
  iframe: {
    border: "0em",
    display: "block",
  },
});
