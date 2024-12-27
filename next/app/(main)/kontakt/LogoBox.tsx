"use client";
import {
  ItemsImageLink,
  ItemsPageContactImageLink,
} from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Metrics from "@/lib/Metrics";
import { Linking, Pressable, Text, View } from "@/lib/server-react-native";
import Image from "next/image";
import StyleSheet from "react-native-media-query";
import Fonts from "@/lib/Fonts";

export interface Props {
  title?: string;
  backgroundColor?: any;
  logos: any[];
}

const LogoBox = ({ backgroundColor, logos, title }: Props) => {
  return (
    <View
      style={[styles.patnerContainer, { backgroundColor: backgroundColor }]}
      dataSet={{ media: ids.patnerContainer }}
    >
      {title && (
        <Text style={styles.partnerTitle} dataSet={{ media: ids.partnerTitle }}>
          {title}
        </Text>
      )}
      <View style={{ overflow: "hidden" }}>
        <View
          style={{
            width: "100%",
            overflow: "scroll",
            bottom: -25,
          }}
        >
          <View
            style={{
              paddingBottom: 25,
              flexDirection: "row",
            }}
          >
            {logos.map((item, index) => {
              let logoRelation = item as ItemsPageContactImageLink;
              let imageLink = logoRelation.image_link_id as ItemsImageLink;
              return (
                <Pressable
                  key={"partner" + index}
                  style={[
                    styles.partnerLogoContainer,
                    { borderLeftWidth: index && 2 },
                  ]}
                  dataSet={{ media: ids.partnerLogoContainer }}
                  onPress={() => Linking.openURL(imageLink.url)}
                >
                  <View
                    style={{
                      marginHorizontal: Metrics.baseMargin,
                      maxWidth: 200,
                      width: "80%",
                    }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${imageLink.image}?width=480&height=320&fit=cover`}
                      width={240}
                      height={160}
                      layout="responsive"
                      alt={"partner" + index}
                      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    ></Image>
                  </View>
                </Pressable>
              );
            })}
          </View>
        </View>
        <View
          style={{
            width: 30,
            position: "absolute",
            bottom: 0,
            left: 0,
            top: 0,
            background: `linear-gradient(90deg, ${backgroundColor ? backgroundColor : Colors.darkGreen}, transparent)`,
          }}
        ></View>
        <View
          style={{
            width: 30,
            position: "absolute",
            bottom: 0,
            right: 0,
            top: 0,
            background: `linear-gradient(270deg, ${backgroundColor ? backgroundColor : Colors.darkGreen}, transparent)`,
          }}
        ></View>
      </View>
    </View>
  );
};

export default LogoBox;

const { styles, ids } = StyleSheet.create({
  patnerContainer: {
    backgroundColor: Colors.darkGreen,
    width: "90vw",
    padding: Metrics.doubleBaseMargin,
    marginBottom: Metrics.tripleBaseMargin,
    borderRadius: 9,
    "@media (max-width: 910px)": {
      padding: Metrics.tripleBaseMargin,
    },
  },
  partnerTitle: {
    ...Fonts.style.h2,
    color: Colors.white,
    paddingBottom: Metrics.doubleBaseMargin,
    "@media (max-width: 910px)": {
      textAlign: "center",
    },
  },
  partnerLogoContainer: {
    flexGrow: 1,
    borderLeftColor: Colors.white,
    alignItems: "center",
    ":hover": {
      opacity: 0.75,
    },
  },
});
