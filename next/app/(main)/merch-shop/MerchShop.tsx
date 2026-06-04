"use client";

import Colors from "@/lib/Colors";
import { View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import { useCallback, useEffect, useRef, useState } from "react";
import Loader from "react-spinners/BounceLoader";

import Metrics from "@/lib/Metrics";

const PAYREXX_URL = "https://rabe-merch.payrexx.com/pay?tid=106f70a9";

export default function MerchShop() {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [iframeHeight, setIframeHeight] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

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
    setIsLoading(false);
  }, []);

  return (
    <View style={styles.outerContainer} dataSet={{ media: ids.outerContainer }}>
      <View style={styles.container} dataSet={{ media: ids.container }}>
        <View
          style={[
            styles.iframeWrapper,
            isLoading ? styles.iframeWrapperLoading : null,
          ]}
          dataSet={{ media: ids.iframeWrapper }}
        >
          {isLoading && (
            <View
              style={styles.loaderContainer}
              dataSet={{ media: ids.loaderContainer }}
            >
              <Loader color={Colors.green} size={100} loading={true} />
            </View>
          )}
          <iframe
            ref={iframeRef}
            src={PAYREXX_URL}
            allow="payment *"
            width="100%"
            id="payrexx-embed"
            scrolling="no"
            style={{
              ...styles.iframe,
              ...(isLoading ? styles.iframeLoading : {}),
            }}
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
    minHeight: "100vh",
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
  iframeWrapper: {
    position: "relative",
    width: "100%",
  },
  iframeWrapperLoading: {
    minHeight: "70vh",
  },
  loaderContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  iframe: {
    border: "0em",
    display: "block",
    width: "100%",
  },
  iframeLoading: {
    opacity: 0,
    pointerEvents: "none",
  },
});
