"use client";
import { ItemsPartyLocation } from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Linking, Text, View } from "@/lib/server-react-native";
import useResponsive from "@/lib/useResponsisve";
import moment from "moment";
import Image from "next/image";
import StyleSheet from "react-native-media-query";
import Button from "./Button";

export interface Props {
  partyTips: any[];
}

const Ausgehtips = ({ partyTips }: Props) => {
  const { isMobile } = useResponsive();

  return (
    <View style={styles.container} dataSet={{ media: ids.container }}>
      <View>
        <Text
          style={{
            ...Fonts.style.h3,
            color: Colors.black,
            marginBottom: Metrics.doubleBaseMargin,
          }}
        >
          {"Ausgehtips"}
        </Text>
        <View
          style={{
            width: "100%",
          }}
        >
          {partyTips.map((item, index) => {
            let partyLocation = item.party_location as ItemsPartyLocation;
            return (
              <View
                key={"partyTips" + index}
                style={styles.partyTipContainer}
                dataSet={{ media: ids.partyTipContainer }}
                onClick={() => {
                  if (isMobile) {
                    Linking.openURL(partyLocation.url);
                  }
                }}
              >
                {partyLocation && partyLocation.logo && (
                  <View
                    style={styles.imageContainer}
                    dataSet={{ media: ids.imageContainer }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${partyLocation.logo}?width=300&height=300&fit=cover`}
                      width={120}
                      height={120}
                      style={{}}
                      layout="responsive"
                      alt={partyLocation.address_line_1}
                      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </View>
                )}
                <View
                  style={styles.infoContainer}
                  dataSet={{ media: ids.infoContainer }}
                >
                  <View
                    style={styles.titleContainer}
                    dataSet={{ media: ids.titleContainer }}
                  >
                    <Text
                      numberOfLines={1}
                      style={styles.title}
                      dataSet={{ media: ids.title }}
                    >
                      {item.title_1}
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={styles.title}
                      dataSet={{ media: ids.title }}
                    >
                      {item.title_2 ? item.title_2 : ""}
                    </Text>
                  </View>

                  <View
                    style={styles.detailsContainer}
                    dataSet={{ media: ids.detailsContainer }}
                  >
                    <View
                      style={styles.addressContainer}
                      dataSet={{ media: ids.addressContainer }}
                    >
                      <Text style={styles.text} dataSet={{ media: ids.text }}>
                        {partyLocation.address_line_1}
                      </Text>

                      <Text style={styles.text} dataSet={{ media: ids.text }}>
                        {partyLocation.address_line_2
                          ? partyLocation.address_line_2
                          : ""}
                      </Text>
                    </View>
                    <Text style={styles.text} dataSet={{ media: ids.text }}>
                      {moment(item.date).format("dd DD.MM") +
                        ", ab " +
                        moment(item.date).format("hh:mm") +
                        " Uhr"}
                    </Text>
                  </View>

                  <View
                    style={styles.buttonContainer}
                    dataSet={{ media: ids.buttonContainer }}
                  >
                    <Button
                      url={partyLocation.url}
                      label={"Zur Webseite"}
                    ></Button>
                  </View>
                </View>
              </View>
            );
          })}
        </View>
      </View>
    </View>
  );
};

export default Ausgehtips;

const { ids, styles } = StyleSheet.create({
  container: {
    padding: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      paddingVertical: Metrics.quadBaseMargin,
    },
  },
  partyTipContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: Metrics.baseMargin,
    // backgroundColor: "yellow",
    "@media (max-width: 910px)": {
      paddingBottom: Metrics.tripleBaseMargin,
    },
  },
  imageContainer: {
    width: "5vw",
    aspectRatio: 1,
    marginRight: Metrics.tripleBaseMargin,
    // backgroundColor: "green",
    "@media (max-width: 910px)": {
      width: "12vw",
    },
  },
  infoContainer: {
    flexDirection: "row",
    // backgroundColor: "blue",

    flex: 1,
    "@media (max-width: 910px)": {
      flexDirection: "column",
      maxWidth: "80%",
      overflow: "hidden",
    },
  },
  titleContainer: {
    flex: 6,
    // backgroundColor: "red",
    "@media (max-width: 910px)": {
      width: "100%",
    },
  },
  detailsContainer: {
    flex: 3,
    paddingLeft: Metrics.doubleBaseMargin,
    // backgroundColor: "blue",
    "@media (max-width: 910px)": {
      paddingLeft: 0,
    },
  },
  buttonContainer: {
    width: 160,
    alignSelf: "center",
    alignItems: "flex-end",
    // backgroundColor: "orange",
    "@media (max-width: 910px)": {
      display: "none",
    },
  },

  title: {
    ...Fonts.style.h2,
    "@media (max-width: 910px)": {
      ...Fonts.style.textLink,
      lineHeight: 22.4,
    },
  },
  text: {
    ...Fonts.style.text,
    // "@media (max-width: 910px)": {
    //   fontSize: 16,
    //   lineHeight: 22.4,
    // },
  },

  addressContainer: {
    flexDirection: "column",
  },
});
