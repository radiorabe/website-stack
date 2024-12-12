"use client";
import { ItemsPartyLocation } from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import moment from "moment";
import Image from "next/image";
import StyleSheet from "react-native-media-query";
import ButtonFull from "./ButtonFull";

export interface Props {
  partyTips: any[];
}

const Ausgehtips = ({ partyTips }: Props) => {
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
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${partyLocation.logo}?width=70&height=70&fit=cover`}
                    width={70}
                    height={70}
                    style={{ paddingRight: Metrics.tripleBaseMargin }}
                    // layout="responsive"
                    alt={partyLocation.address_line_1}
                    // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
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
                      style={{
                        ...Fonts.style.h3,
                      }}
                    >
                      {item.title_1}
                    </Text>
                    <Text
                      style={{
                        ...Fonts.style.h3,
                      }}
                    >
                      {item.title_2 ? item.title_2 : ""}
                    </Text>
                  </View>

                  <View style={{ flexGrow: 1 }}>
                    <View
                      style={styles.addressContainer}
                      dataSet={{ media: ids.addressContainer }}
                    >
                      <Text
                        style={{
                          ...Fonts.style.text,
                        }}
                      >
                        {partyLocation.address_line_1}
                      </Text>

                      <Text
                        style={{
                          ...Fonts.style.text,
                        }}
                      >
                        {partyLocation.address_line_2
                          ? partyLocation.address_line_2
                          : ""}
                      </Text>
                    </View>

                    <Text
                      style={{
                        ...Fonts.style.text,
                      }}
                    >
                      {moment(item.date).format("dd DD.MM") +
                        ", ab " +
                        moment(item.date).format("hh:mm") +
                        " Uhr"}
                    </Text>
                  </View>

                  <View>
                    <ButtonFull
                      url={partyLocation.url}
                      label={"Website"}
                    ></ButtonFull>
                  </View>
                </View>{" "}
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
    flexDirection: "rows",
    backgroundColor: "green",

    "@media (max-width: 910px)": {
      flexDirection: "column",
      flexGrow: 1,
      maxWidth: "80%",
      overflow: "hidden",
    },
  },
  titleContainer: {
    width: "50%",
    backgroundColor: "red",
    "@media (max-width: 910px)": {
      width: "100%",
    },
  },
  addressContainer: {
    flexDirection: "column",
  },
});
