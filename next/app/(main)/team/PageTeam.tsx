"use client";

import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

import Fonts from "@/lib/Fonts";
import { Api } from "@/lib/api";
import {
  ItemsPageTeam,
  ItemsPageTeamDirectusUsers,
  Users,
} from "@/lib/api/data-contracts";
import MemberInfo from "@/components/MemberInfo";
import Colors from "@/lib/Colors";
import Metrics from "@/lib/Metrics";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { logError } from "@/lib/loging";
import BreadCrump from "@/components/BreadCrumb";

export default function TeaamPage({ pageData }) {
  const data = pageData;

  let memberData = [
    { title: "RaBe Staff", members: data.members_staff },
    { title: "Vorstandsmitglieder", members: data.members_management },
    { title: "Programmkommissionsmitglieder", members: data.members_program },
  ];

  console.log("memberData", memberData);

  return (
    <View style={styles.outerContainer} dataSet={{ media: ids.outerContainer }}>
      <View style={styles.container} dataSet={{ media: ids.container }}>
        <BreadCrump label1={"Über Rabe"} label2={"Team"}></BreadCrump>

        <View style={{}}>
          <Text style={{ ...Fonts.style.text }}>{data.text}</Text>
        </View>

        {memberData.map((item, index) => {
          return (
            <View>
              <Text
                style={{
                  ...Fonts.style.h3,
                  paddingTop: Metrics.tripleBaseMargin,
                }}
              >
                {item.title}
              </Text>
              {item.members && item.members.length > 0 && (
                <View
                  style={{
                    paddingTop: Metrics.baseMargin,
                    flexDirection: "row",
                    flexWrap: "wrap",
                  }}
                >
                  {item.members.map(
                    (item: ItemsPageTeamDirectusUsers, index) => {
                      let user: Users = item.directus_users_id as Users;
                      return (
                        <MemberInfo
                          key={"memberstaff" + index}
                          user={user}
                        ></MemberInfo>
                      );
                    }
                  )}
                </View>
              )}
            </View>
          );
        })}
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
});
