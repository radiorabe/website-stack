"use client";
import Button from "@/components/Button";
import PromoBox from "@/components/PromoBox";
import PartyTips from "@/components/PartyTips";
import PostPreview from "@/components/PostPreview/PostPreview";
import ProgramBox from "@/components/ProgramBox/ProgramBox";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";

export default function HomePage({ posts, partyTips, event }) {
  return (
    <View>
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          paddingVertical: Metrics.tripleBaseMargin,
        }}
      >
        {event && <PromoBox event={event}></PromoBox>}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingBottom: Metrics.doubleBaseMargin,
          }}
        >
          <View>
            <Text style={{ ...Fonts.style.h2 }}>{"Neuste Beiträge"}</Text>
          </View>
          <View
            style={styles.allPostsButtonContainer}
            dataSet={{ media: ids.allPostsButtonContainer }}
          >
            <Button
              full
              textColor={Colors.white}
              href={"/beitraege"}
              label={"Alle Beiträge"}
            />
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {posts.map((item, index) => {
            return (
              <PostPreview
                key={"post" + index}
                data={item}
                index={index}
              ></PostPreview>
            );
          })}
        </View>
        <View
          style={styles.mobileShowPostButton}
          dataSet={{ media: ids.mobileShowPostButton }}
        >
          <Button
            full
            textColor={Colors.white}
            href={"/beitraege"}
            label={"Alle Beiträge"}
          />
        </View>
      </View>
      <View
        style={{
          width: "100%",
          backgroundColor: Colors.darkGreen,
        }}
      >
        <View
          style={{
            width: "90vw",
            alignSelf: "center",
          }}
        >
          <ProgramBox
            textColor={Colors.lightGreen}
            hoverColor={Colors.green}
            backgroundColor={Colors.darkGreen}
            buttonColor={Colors.white}
            buttonBackgroundColor={Colors.darkGreen}
          ></ProgramBox>
        </View>
      </View>
      <PartyTips partyTips={partyTips}></PartyTips>
    </View>
  );
}

const { styles, ids } = StyleSheet.create({
  allPostsButtonContainer: {
    "@media (max-width: 910px)": {
      display: "none",
    },
  },
  mobileShowPostButton: {
    display: "none",
    "@media (max-width: 910px)": {
      display: "flex",
      alignItems: "center",
      paddingTop: Metrics.tripleBaseMargin,
    },
  },
});
