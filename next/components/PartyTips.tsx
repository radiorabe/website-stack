"use client";
import { ItemsPartyLocation } from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import moment from "moment";
import Image from "next/image";
import StyleSheet from "react-native-media-query";
import Button from "./Button";
import AspectRatio from "react-aspect-ratio";
import useResponsive from "@/lib/useResponsisve";

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
                style={{
                  width: "100%",
                  flexDirection: "row",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  paddingBottom: Metrics.baseMargin,
                }}
              >
                {partyLocation && partyLocation.logo && (
                  <AspectRatio
                    ratio="1/1"
                    style={{
                      width: isMobile ? "12vw" : "5vw",
                      marginRight: Metrics.tripleBaseMargin,
                    }}
                  >
                    <Image
                      src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${partyLocation.logo}?width=120&height=120&fit=cover`}
                      width={120}
                      height={120}
                      style={{}}
                      layout="responsive"
                      alt={partyLocation.address_line_1}
                      // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </AspectRatio>
                )}
                <View
                  style={styles.infoContainer}
                  dataSet={{ media: ids.infoContainer }}
                >
                  <View
                    style={styles.titleContainer}
                    dataSet={{ media: ids.titleContainer }}
                  >
                    <Text style={styles.title} dataSet={{ media: ids.title }}>
                      {item.title_1}
                    </Text>
                    <Text style={styles.title} dataSet={{ media: ids.title }}>
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

                  <View>
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
  infoContainer: {
    flexDirection: "row",
    // backgroundColor: "green",
    flexGrow: 1,
    "@media (max-width: 910px)": {
      flexDirection: "column",
      maxWidth: "80%",
      overflow: "hidden",
    },
  },
  titleContainer: {
    width: "50%",
    // backgroundColor: "red",
    "@media (max-width: 910px)": {
      width: "100%",
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
  detailsContainer: {
    flexGrow: 1,
    "@media (max-width: 910px)": {
      paddingBottom: Metrics.baseMargin,
    },
  },
  addressContainer: {
    flexDirection: "column",
  },
});
