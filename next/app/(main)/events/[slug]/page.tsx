import ButtonFull from "@/components/ButtonFull";
import ImageBox from "@/components/ImageBox";
import RenderTipTap from "@/components/RenderTipTap";
import { Api } from "@/lib/api";
import {
  ItemsEvents,
  ItemsEventsEventShows,
  ItemsEventShows,
} from "@/lib/api/data-contracts";
import Colors, { shadeColor } from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import { logError } from "@/lib/loging";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import moment from "moment";
import Image from "next/image";
import { notFound } from "next/navigation";
import StyleSheet from "react-native-media-query";
import ShowInfoText from "./ShowInfoText";
import TicketIcon from "./TicketIcon";

const { ids, styles } = StyleSheet.create({
  container: {
    maxWidth: 1280,
    width: "100%",
    alignItems: "center",
    alignSelf: "center",
  },
  imageContainer: {
    width: "100%",
  },
  postContainer: {
    width: "75%",
  },
  border: {
    borderBlockColor: Colors.black,
    borderRadius: 9,
    borderWidth: 1,
    alignSelf: "flex-start",
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  title: {
    ...Fonts.style.h1,
    color: "white",
    textAlign: "center",
    paddingBottom: Metrics.doubleBaseMargin,
  },
  sendungsInfo: { ...Fonts.style.text, color: "black" },
  image: { width: "100%", borderRadius: 9 },
});

async function getEvent(slug) {
  try {
    const itemResponse = await Api.readItemsEvents(
      {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        filter: JSON.stringify({
          slug: {
            _eq: slug,
          },
        }),
        fields: [
          "*",
          "logos.directus_files_id",
          "shows.event_shows_id.*",
          "shows.event_shows_id.imagebox.*",
        ],
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
    let item: ItemsEvents[] = itemResponse.data.data;
    // console.log("event", item.length);

    if (!item || item.length === 0 || item[0].status !== "published") {
      notFound();
    }

    return item[0];
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function EventPage({ params }) {
  const event = await getEvent(params.slug);

  return (
    <View>
      <View
        style={{
          width: "100%",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "column",
            backgroundColor: event.color,
            width: "100%",
            alignItems: "center",
            paddingTop: Metrics.tripleBaseMargin,
            paddingBottom: Metrics.tripleBaseMargin,
          }}
        >
          <View
            style={{
              width: 326,
              paddingBottom: Metrics.doubleBaseMargin,
            }}
          >
            <Image
              src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${event.title_image}?width=326&height=256&fit=cover`}
              width={326}
              height={256}
              style={{}}
              layout="responsive"
              alt={event.title}
              // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </View>
          <Text
            style={{
              ...Fonts.style.h1,
              color: Colors.white,
              paddingBottom: Metrics.doubleBaseMargin,
            }}
          >
            {event.title}
          </Text>
          <Text style={{ ...Fonts.style.text, color: Colors.white }}>
            {event.title_info}
          </Text>
        </View>

        <View style={{ width: "74vw", paddingTop: Metrics.tripleBaseMargin }}>
          {event.content && (
            <RenderTipTap
              content={event.content}
              topProps={{
                linkColor: event.color,
                linkHoverColor: shadeColor(event.color, 30),
              }}
            ></RenderTipTap>
          )}
        </View>
        <View
          style={{
            paddingTop: Metrics.tripleBaseMargin,
            width: "74vw",
          }}
        >
          {event.shows.map((sh: ItemsEventsEventShows, index) => {
            let show = sh.event_shows_id as ItemsEventShows;
            console.log("show", show);
            return (
              <View
                key={"show" + index}
                style={{ paddingBottom: Metrics.tripleBaseMargin }}
              >
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
                    width: "100%",
                    paddingBottom: Metrics.tripleBaseMargin,
                  }}
                >
                  <View style={{ width: "50%" }}>
                    {show.date && (
                      <ShowInfoText
                        label="Datum"
                        text={moment(show.date).format("DD. MMMM YYYY")}
                      ></ShowInfoText>
                    )}
                    {show.program && (
                      <ShowInfoText
                        label="Programm"
                        text={show.program}
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
                      ></ShowInfoText>
                    )}
                  </View>

                  <View style={{ width: "50%" }}>
                    {show.starting_time && (
                      <ShowInfoText
                        label="Start"
                        text={
                          show.starting_time.split(":")[0] +
                          ":" +
                          show.starting_time.split(":")[1] +
                          " Uhr"
                        }
                      ></ShowInfoText>
                    )}
                    {show.place && (
                      <ShowInfoText
                        label="Ort"
                        text={show.place}
                      ></ShowInfoText>
                    )}
                    {show.website && (
                      <ShowInfoText
                        label="Webseite"
                        text={show.website}
                        // text={moment(show.opening_time).format("HH:MM")}
                      ></ShowInfoText>
                    )}
                  </View>
                </View>
                <View style={{}}>
                  {show.imagebox && (
                    <ImageBox
                      imageId={show.imagebox.image}
                      width={1440}
                      height={960}
                      title={show.imagebox.title}
                      text={show.imagebox.text}
                    ></ImageBox>
                  )}
                </View>
                <View>
                  {show.content && (
                    <RenderTipTap
                      content={show.content}
                      topProps={{
                        linkColor: event.color,
                        linkHoverColor: shadeColor(event.color, 30),
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
                  <ButtonFull
                    label={show.button_label ? show.button_label : "Tickets"}
                    href={show.button_url}
                    icon={<TicketIcon color={Colors.white}></TicketIcon>}
                    backgroundColor={event.color}
                    backgroundHoverColor={shadeColor(event.color, 30)}
                    large
                  ></ButtonFull>
                </View>
              </View>
            );
          })}
        </View>
        {event && event.logos && event.logos.length > 0 && (
          <View
            style={{
              backgroundColor: event.color,
              width: "90vw",
              alignSelf: "center",
              padding: Metrics.doubleBaseMargin,
              marginBottom: Metrics.tripleBaseMargin,
              borderRadius: 9,
            }}
          >
            <Text
              style={{
                ...Fonts.style.h2,
                color: Colors.white,
                paddingBottom: Metrics.doubleBaseMargin,
              }}
            >
              {"Danke für die finanzielle Unterstützung:"}
            </Text>
            <View style={{ flexDirection: "row" }}>
              {event.logos.map((item, index) => {
                return (
                  <View
                    key={"partner" + index}
                    style={{
                      flexGrow: 1,
                      borderLeftColor: Colors.white,
                      borderLeftWidth: index && 2,
                      alignItems: "center",
                    }}
                  >
                    <View
                      style={{
                        marginHorizontal: Metrics.baseMargin,
                        maxWidth: 200,
                        width: "80%",
                      }}
                    >
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${item.directus_files_id}?width=240&height=160&fit=cover`}
                        width={240}
                        height={160}
                        layout="responsive"
                        alt={"partner" + index}
                        // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      ></Image>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>
        )}
      </View>
    </View>
  );
}
