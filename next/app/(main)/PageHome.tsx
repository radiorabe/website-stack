"use client";
import Button from "@/components/Button";
import PromoBox from "@/components/PromoBox";
import PartyTips from "@/components/PartyTips";
import PostPreviewBox from "@/components/PostPreview/PostPreviewBox";
import ProgramBox from "@/components/ProgramBox/ProgramBox";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import {
  ItemsEvents,
  ItemsPageHome,
  ItemsPartyTips,
  ItemsPost,
  ItemsPromoBox,
} from "@/lib/api/data-contracts";

export interface Props {
  pageData: ItemsPageHome;
  posts: ItemsPost[];
  partyTips: ItemsPartyTips[];
  event: ItemsEvents;
}

export default function HomePage({ pageData, posts, partyTips, event }: Props) {
  let promo_box = pageData.promo_box as ItemsPromoBox;

  return (
    <View>
      <View
        style={{
          width: "90%",
          alignSelf: "center",
          paddingVertical: Metrics.tripleBaseMargin,
        }}
      >
        {event && (
          <PromoBox
            title={event.promo_title}
            text={event.promo_text}
            backgroundColor={event.color}
            textColor={Colors.white}
            imageId={event.title_image as string}
            buttonLabel={event.promo_button_label}
            buttonUrl={event.promo_button_url}
          ></PromoBox>
        )}

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
        <PostPreviewBox posts={posts}></PostPreviewBox>
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

      {promo_box && (
        <View
          style={styles.promoBoxContainer}
          dataSet={{ media: ids.promoBoxContainer }}
        >
          <PromoBox
            title={promo_box.title}
            text={promo_box.text}
            backgroundColor={promo_box.background_color}
            textColor={Colors.white}
            imageId={promo_box.image as string}
            buttonLabel={promo_box.button_label}
            buttonUrl={promo_box.button_url}
            goldenRatio
          ></PromoBox>
        </View>
      )}
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
  promoBoxContainer: {
    paddingHorizontal: Metrics.tripleBaseMargin,
  },
});
