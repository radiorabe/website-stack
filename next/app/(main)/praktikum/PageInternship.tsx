"use client";
import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

import Fonts from "@/lib/Fonts";

import BreadCrump from "@/components/BreadCrumb";
import Button from "@/components/Button";
import RenderTipTap from "@/components/RenderTipTap";
import InfoBox from "@/components/RenderTipTap/InfoBox";
import Colors from "@/lib/Colors";
import Metrics from "@/lib/Metrics";
import {
  ItemsInternships,
  ItemsPageInternshipInternships,
} from "@/lib/api/data-contracts";
import moment from "moment";
import InfoText from "./InfoText";

export default function PageInternship({ pageData }) {
  const data = pageData;

  return (
    <View style={styles.outerContainer} dataSet={{ media: ids.outerContainer }}>
      <View style={styles.container} dataSet={{ media: ids.container }}>
        <BreadCrump label1={"Über Rabe"} label2={"Praktikum"}></BreadCrump>
        {data.info_title && data.info_text && (
          <View style={{ marginBottom: Metrics.tripleBaseMargin }}>
            <InfoBox
              data={{ title: data.info_title, text: data.info_text }}
              backgroundColor={Colors.darkGreen}
              textColor={Colors.white}
              constainerStyle={{ marginVertical: 0 }}
            ></InfoBox>
          </View>
        )}

        {data.content && <RenderTipTap content={data.content}></RenderTipTap>}

        {data.internships && (
          <View style={{ marginTop: Metrics.baseMargin }}>
            {data.internships.map(
              (item: ItemsPageInternshipInternships, index) => {
                let internship = item.internships_id as ItemsInternships;
                return (
                  <View
                    key={"internship" + index}
                    style={styles.intershipContainer}
                    dataSet={{ media: ids.intershipContainer }}
                  >
                    <Text
                      style={{
                        ...Fonts.style.h2,
                        paddingBottom: Metrics.doubleBaseMargin,
                      }}
                    >
                      {internship.title}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        width: "100%",
                        paddingBottom: Metrics.doubleBaseMargins,
                      }}
                    >
                      <View style={{ width: "50%" }}>
                        {internship.program && (
                          <InfoText
                            label="Sendung"
                            text={internship.program}
                          ></InfoText>
                        )}
                        {internship.duration && (
                          <InfoText
                            label="Dauer"
                            text={internship.duration}
                          ></InfoText>
                        )}
                        {internship.workload && (
                          <InfoText
                            label="Pensum"
                            text={internship.workload}
                          ></InfoText>
                        )}
                      </View>

                      <View style={{ width: "50%" }}>
                        {internship.start && (
                          <InfoText
                            label="Start"
                            text={internship.start}
                          ></InfoText>
                        )}
                        {internship.deadline && (
                          <InfoText
                            label="Bewerbungsfrist"
                            text={moment(internship.deadline).format(
                              "DD. MMMM YYYY"
                            )}
                          ></InfoText>
                        )}
                        {internship.email && (
                          <InfoText
                            label="Bewerbung an"
                            text={internship.email}
                          ></InfoText>
                        )}
                      </View>
                    </View>

                    <View style={{ marginTop: Metrics.doubleBaseMargin }}>
                      {internship.content && (
                        <RenderTipTap
                          content={internship.content}
                        ></RenderTipTap>
                      )}
                    </View>
                    <View
                      style={{
                        alignItems: "flex-start",
                      }}
                    >
                      <Button
                        label={"Jetzt Bewerben"}
                        href={"mailto:" + internship.email}
                      ></Button>
                    </View>
                  </View>
                );
              }
            )}
          </View>
        )}
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
    "@media (max-width: 910px)": {
      width: "90vw",
    },
  },
  intershipContainer: {
    marginBottom: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      marginBottom: Metrics.quadBaseMargin,
    },
  },
});
