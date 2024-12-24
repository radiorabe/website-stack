"use client";
import RenderTipTap from "@/components/RenderTipTap";
import {
  Files,
  ItemsPageHistory,
  ItemsPageHistoryFiles,
  ItemsPageHistoryFiles1,
} from "@/lib/api/data-contracts";
import Colors from "@/lib/Colors";
import Metrics from "@/lib/Metrics";
import { Text, View } from "@/lib/server-react-native";
import StyleSheet from "react-native-media-query";
import Fonts from "../../../lib/Fonts";
import DownloadBox from "./DownloadBox";
import DownloadLogo from "./DownloadLogo";
import DownloadProtocol from "./DownloadProtocol";
import BreadCrump from "@/components/BreadCrumb";

export interface Props {
  pageData: ItemsPageHistory;
}

export default function PageHistory({ pageData }: Props) {
  const data = pageData;
  console.log("data", data.protocols);
  return (
    <View
      style={{
        width: "100%",
      }}
    >
      <View style={styles.container} dataSet={{ media: ids.container }}>
        <BreadCrump label1="Über Rabe" label2="Geschichte"></BreadCrump>

        {data.content && <RenderTipTap content={data.content}></RenderTipTap>}
        <View
          style={styles.visionContainer}
          dataSet={{ media: ids.visionContainer }}
        >
          <DownloadBox
            label="Unser Leitbild"
            url={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${data.vision}?download`}
          ></DownloadBox>
          <DownloadBox
            label="Statuten"
            url={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${data.statutes}?download`}
          ></DownloadBox>
        </View>
        <View>
          <View
            style={{
              marginTop: Metrics.tripleBaseMargin,
              padding: Metrics.doubleBaseMargin,
              borderRadius: 9,
              backgroundColor: Colors.lightGreen,
            }}
          >
            <Text
              style={{
                ...Fonts.style.h4,
              }}
            >
              {"Protokolle der Mitgliederversammlungen"}
            </Text>
            <View>
              {data.protocols &&
                data.protocols.map((item, index) => {
                  let protocol = item as ItemsPageHistoryFiles1;
                  let file = protocol.directus_files_id as Files;
                  return (
                    <DownloadProtocol
                      key={"protocol" + index}
                      label={file.title}
                      url={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${file.id}/${file.filename_download}?download`}
                    ></DownloadProtocol>
                  );
                })}
            </View>
          </View>
          {data.logos && data.logos.length > 0 && (
            <View>
              <Text
                style={{
                  ...Fonts.style.h2,
                  paddingVertical: Metrics.tripleBaseMargin,
                }}
              >
                {"Logo Downloads"}
              </Text>
              <View
                style={{
                  flexDirection: "row",
                }}
              >
                {data.logos.map((item, index) => {
                  let logo = item as ItemsPageHistoryFiles;
                  let file = logo.directus_files_id as Files;
                  return (
                    <View
                      key={"logo" + index}
                      style={{
                        marginLeft: index ? Metrics.doubleBaseMargin : 0,
                      }}
                    >
                      <DownloadLogo
                        label={"logo" + index}
                        url={`${process.env.NEXT_PUBLIC_BE_URL}/assets/${file.id}/${file.filename_download}`}
                      ></DownloadLogo>
                    </View>
                  );
                })}
              </View>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

const { styles, ids } = StyleSheet.create({
  container: {
    width: "74vw",
    alignSelf: "center",
    paddingVertical: Metrics.tripleBaseMargin,
    "@media (max-width: 910px)": {
      width: "90vw",
    },
  },
  visionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    "@media (max-width: 910px)": {
      paddingVertical: Metrics.doubleBaseMargin,
    },
  },
});
