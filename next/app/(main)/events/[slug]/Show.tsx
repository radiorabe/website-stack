"use client";
import { ItemsEventShows, ItemsImageBox } from "@/lib/api/data-contracts";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import ShowInfoText from "./ShowInfoText";
import ImageBox from "@/components/RenderTipTap/ImageBox";
import RenderTipTap from "@/components/RenderTipTap";
import Colors, { shadeColor } from "@/lib/Colors";
import TicketIcon from "./TicketIcon";
import Button from "@/components/Button";
import moment from "moment";
import StyleSheet from "react-native-media-query";

export interface Props {
  show: ItemsEventShows;
  eventColor: any;
}

const Show = ({ show, eventColor }: Props) => {
  let imagebox = show.imagebox as ItemsImageBox;
  return (
    <View style={{ paddingBottom: Metrics.tripleBaseMargin }}>
      <Text
        style={{
          ...Fonts.style.h1,
          paddingBottom: Metrics.doubleBaseMargin,
        }}
      >
        {show.name}
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          width: "100%",
          paddingBottom: Metrics.tripleBaseMargin,
        }}
      >
        <View
          style={styles.halfContainer}
          dataSet={{ media: ids.halfContainer }}
        >
          {show.date && (
            <ShowInfoText
              label="Datum"
              text={moment(show.date).format("DD. MMMM YYYY")}
              bold
            ></ShowInfoText>
          )}
          {show.program && (
            <ShowInfoText
              label="Programm"
              text={show.program}
              bold
            ></ShowInfoText>
          )}
          {show.opening_time && (
            <ShowInfoText
              label="Türöffnung"
              text={
                show.opening_time.split(":")[0] +
                ":" +
                show.opening_time.split(":")[1] +
                " Uhr"
              }
              bold
            ></ShowInfoText>
          )}
        </View>

        <View
          style={styles.halfContainer}
          dataSet={{ media: ids.halfContainer }}
        >
          {show.starting_time && (
            <ShowInfoText
              label="Start"
              text={
                show.starting_time.split(":")[0] +
                ":" +
                show.starting_time.split(":")[1] +
                " Uhr"
              }
              bold
            ></ShowInfoText>
          )}
          {show.place && (
            <ShowInfoText label="Ort" text={show.place} bold></ShowInfoText>
          )}
          {show.website && (
            <ShowInfoText
              label="Webseite"
              text={show.website}
              bold
              // text={moment(show.opening_time).format("HH:MM")}
            ></ShowInfoText>
          )}
        </View>
      </View>
      <View
        style={styles.imageContainer}
        dataSet={{ media: ids.imageContainer }}
      >
        {imagebox && (
          <ImageBox
            imageId={imagebox.image}
            width={1440}
            height={960}
            title={imagebox.title}
            text={imagebox.text}
          ></ImageBox>
        )}
      </View>
      <View>
        {show.content && (
          <RenderTipTap
            content={show.content}
            topProps={{
              linkColor: eventColor,
              linkHoverColor: shadeColor(eventColor, 30),
            }}
          ></RenderTipTap>
        )}
      </View>
      <View
        style={{
          alignItems: "center",
          paddingTop: Metrics.baseMargin,
        }}
      >
        <Button
          label={show.button_label ? show.button_label : "Tickets"}
          href={show.button_url}
          icon={<TicketIcon color={Colors.white}></TicketIcon>}
          backgroundColor={eventColor}
          backgroundHoverColor={shadeColor(eventColor, 30)}
          large
          full
          textColor={Colors.white}
        ></Button>
      </View>
    </View>
  );
};

export default Show;

const { ids, styles } = StyleSheet.create({
  imageContainer: {
    "@media (max-width: 910px)": {
      marginTop: Metrics.doubleBaseMargin,
    },
  },
  halfContainer: {
    width: "50%",
    "@media (max-width: 910px)": {
      width: "100%",
    },
  },
});
