import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

import Fonts from "@/lib/Fonts";

import { Metadata } from "next";
import Metrics from "@/lib/Metrics";
import Colors from "@/lib/Colors";
import { Api } from "@/lib/api";
import {
  ItemsInternships,
  ItemsPageInternship,
  ItemsPageInternshipInternships,
  ItemsPageJoin,
} from "@/lib/api/data-contracts";
import { logError } from "@/lib/loging";
import { notFound } from "next/navigation";
import RenderTipTap from "@/components/RenderTipTap";
import InfoBox from "@/components/RenderTipTap/InfoBox";
import ShowInfoText from "../events/[slug]/ShowInfoText";
import InfoText from "./InfoText";
import moment from "moment";
import Button from "@/components/Button";

const { styles } = StyleSheet.create({
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
  title: "Mitmachen",
};

async function getPageData() {
  try {
    const itemResponse = await Api.readItemsPageInternship(
      {
        fields: ["*", "internships.internships_id.*"],
        // limit: 3,
      },
      {
        next: {
          tags:
            process.env.NODE_ENV === "production" ? ["collection"] : undefined,
        },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    // console.log("response", itemResponse);
    let item = itemResponse.data.data as ItemsPageInternship;
    console.log("ItemsPageInternship", item);

    return item;
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function PageInternship(props) {
  const data = await getPageData();

  return (
    <View>
      <View
        style={{
          width: "100%",
          alignSelf: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: "74vw",
            alignSelf: "center",
            paddingVertical: Metrics.tripleBaseMargin,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              marginBottom: Metrics.tripleBaseMargin,
            }}
          >
            <Text style={{ ...Fonts.style.text }}>{"Über Rabe"}</Text>
            <Text
              style={[
                { ...Fonts.style.h4 },
                { color: Colors.green, paddingHorizontal: Metrics.baseMargin },
              ]}
            >
              {"\u2192"}
            </Text>
            <Text style={{ ...Fonts.style.text }}>{"Praktikum"}</Text>
          </View>
          {data.info_title && data.info_text && (
            <View style={{ marginBottom: Metrics.tripleBaseMargin }}>
              <InfoBox
                data={{ title: data.info_title, text: data.info_text }}
                backgroundColor={Colors.darkGreen}
                textColor={Colors.white}
              ></InfoBox>
            </View>
          )}
          {data.content && <RenderTipTap content={data.content}></RenderTipTap>}
          {data.internships && (
            <View style={{ marginTop: 0 }}>
              {data.internships.map(
                (item: ItemsPageInternshipInternships, index) => {
                  let internship = item.internships_id as ItemsInternships;
                  return (
                    <View
                      key={"internship" + index}
                      style={{
                        marginBottom: Metrics.tripleBaseMargin,
                        // marginTop: Metrics.tripleBaseMargin,
                      }}
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
                          large
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
    </View>
  );
}
