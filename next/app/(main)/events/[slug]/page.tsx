import IconDownload from "@/assets/svg/IconDownload";
import AudioFilePlayer from "@/components/AudioFilePlayer";
import Button from "@/components/Button";
import HoverText from "@/components/HoverText";
import RenderTipTap from "@/components/RenderTipTap";
import { Api } from "@/lib/api";
import {
  ItemsEvents,
  ItemsEventShows,
  ItemsPosts,
  ItemsPostsDirectusUsers1,
  ItemsPrograms,
  Users,
} from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Fonts from "@/lib/Fonts";
import Metrics from "@/lib/Metrics";
import moment from "moment";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import IconShare from "../../../../assets/svg/IconShare";
import { logError } from "@/lib/loging";
import DownloadLogo from "../../geschichte/DownloadLogo";
import ShowInfoText from "./ShowInfoText";
import ImageBox from "@/components/ImageBox";
import ButtonFull from "@/components/ButtonFull";
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
          "imagebox.*",
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
    console.log("event", item.length);

    if (!item || item.length === 0 || item[0].status !== "published") {
      notFound();
    }

    return item[0];
  } catch (error) {
    logError(error);

    notFound();
  }
}

export default async function DynamicPage({ params }) {
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
            backgroundColor: Colors.yellow,
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
                linkColor: Colors.yellow,
                linkHoverColor: Colors.lightYellow,
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
          {event.shows.map((sh, index) => {
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
                        linkColor: Colors.yellow,
                        linkHoverColor: Colors.lightYellow,
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
                    backgroundColor={Colors.yellow}
                    backgroundHoverColor={Colors.lightYellow}
                    large
                  ></ButtonFull>
                </View>
              </View>
            );
          })}
        </View>

        {/* <View style={styles.postContainer}> */}
        {/* <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: Metrics.tripleBaseMargin,
            }}
          >
            <HoverText
              href={"/" + program.slug}
              style={[styles.sendungsInfo, styles.border]}
              hoverStyle={{
                color: Colors.green,
                borderColor: Colors.green,
              }}
            >
              {program.name}
            </HoverText>
            <View style={{ width: Metrics.doubleBaseMargin }}></View>
            <Text style={{ ...Fonts.style.text }}>
              <Text> {"Von "}</Text>
              {post.authors.map((item: ItemsPostsDirectusUsers1, index) => {
                let user: Users = item.directus_users_id as Users;
                return (
                  <HoverText
                    key={"author" + index}
                    href={"/beitraege"}
                    style={{ ...Fonts.style.textLink, color: Colors.green }}
                    hoverStyle={{ color: Colors.darkGreen }}
                  >{`${index ? " &" : ""} ${user.first_name} ${
                    user.last_name
                  }`}</HoverText>
                );
              })}

              <Text> {`am ${moment(post.date).format("DD. MMMM YY")}`}</Text>
            </Text>
          </View>
          <Text
            style={{
              ...Fonts.style.h1,
              paddingBottom: Metrics.tripleBaseMargin,
            }}
          >
            {post.title}
          </Text>
          {post.image && (
            <View style={styles.imageContainer}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${post.image}?width=1440&height=960&fit=cover`}
                width={1440}
                height={960}
                style={styles.image}
                layout="responsive"
                alt={post.title}
                // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              {post.imageTitle && (
                <View
                  style={{
                    flexDirection: "row",
                    paddingHorizontal: Metrics.tripleBaseMargin,
                    paddingVertical: Metrics.doubleBaseMargin,
                  }}
                >
                  <Text
                    style={{
                      ...Fonts.style.textSmall,
                      fontFamily: Fonts.type.bold,
                    }}
                  >
                    {"Foto: " + post.imageTitle}
                  </Text>
                  <Text style={{ ...Fonts.style.textSmall }}> </Text>
                  {post.imageText && (
                    <Text style={{ ...Fonts.style.textSmall }}>
                      {post.imageText}
                    </Text>
                  )}
                </View>
              )}
            </View>
          )}

          {post.content && <RenderTipTap content={post.content}></RenderTipTap>}
          {post.audio && (
            <View style={{ paddingBottom: Metrics.tripleBaseMargin }}>
              <AudioFilePlayer
                src={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${post.audio}/rabe-audio.mp3`}
              ></AudioFilePlayer>
            </View>
          )}
          <View style={{ flexDirection: "row" }}>
            {post.audio && (
              <>
                <Button
                  url={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${post.audio}/rabe-audio.mp3?download`}
                  icon={<IconDownload color={Colors.darkGreen}></IconDownload>}
                  label={"Herunterladen"}
                ></Button>
                <View style={{ width: Metrics.baseMargin }}></View>
              </>
            )}
            <Button
              url={"alksjdfkl"}
              icon={<IconShare color={Colors.darkGreen}></IconShare>}
              label={"Teilen"}
            ></Button>
          </View>

          <View>
            <View
              style={{
                height: Metrics.tripleBaseMargin,
              }}
            ></View>
          </View>
        </View> */}

        <View
          style={{
            backgroundColor: Colors.yellow,
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
          {event && event.logos && (
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
          )}
        </View>
      </View>
    </View>
  );
}
