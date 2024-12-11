import { Api } from "@/lib/api";
import {
  ItemsAudioPlayer,
  ItemsIframe,
  ItemsImageBox,
  ItemsInfoBox,
  ItemsPostEditorNodes,
  ItemsQuote,
} from "@/lib/api/data-contracts";
import Fonts from "@/lib/Fonts";
import {
  TipTapMarkHandlers,
  TipTapNodeHandlers,
  TipTapRender,
  TipTapRenderHandlers,
} from "@wokaylabs/tiptap-react-render";
import React from "react";
import InfoBox from "./InfoBox";
import Quote from "./Quote";
import { logError } from "@/lib/loging";
import ImageBox from "../ImageBox";
import Colors from "@/lib/Colors";
import Link from "./Link";
import Iframe from "./Iframe";
import AudioFilePlayer from "../AudioFilePlayer";
import Metrics from "@/lib/Metrics";

/**
 * this is an implementation of the renderer interface using html native tags, a similar renderer can be written for react-native or using any UI library
 */

async function getInfoBox(id) {
  try {
    const itemResponse = await Api.readSingleItemsInfoBox(
      {
        id: id,
        fields: ["*"],
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
    let item: ItemsInfoBox = itemResponse.data.data;
    return item;
  } catch (error) {
    logError(error);
  }
}

async function getImageBox(id) {
  try {
    const itemResponse = await Api.readSingleItemsImageBox(
      {
        id: id,
        fields: ["*"],
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
    let item: ItemsImageBox = itemResponse.data.data;
    return item;
  } catch (error) {
    logError(error);
  }
}

async function getQuote(id) {
  try {
    const itemResponse = await Api.readSingleItemsQuote(
      {
        id: id,
        fields: ["*"],
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
    let item: ItemsQuote = itemResponse.data.data;
    return item;
  } catch (error) {
    logError(error);
  }
}

async function getIframe(id) {
  try {
    const itemResponse = await Api.readSingleItemsIframe(
      {
        id: id,
        fields: ["*"],
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
    let item: ItemsIframe = itemResponse.data.data;
    return item;
  } catch (error) {
    logError(error);
  }
}

async function getAudioPlayerFiles(id) {
  try {
    const itemResponse = await Api.readSingleItemsAudioPlayer(
      {
        id: id,
        fields: ["*", "files.directus_files_id.*"],
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
    let item: ItemsAudioPlayer = itemResponse.data.data;

    return item;
  } catch (error) {
    logError(error);
  }
}

async function getNodes(id, readNodes) {
  try {
    const itemResponse = await readNodes(
      {
        id: id,
        fields: ["*"],
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
    let item: ItemsPostEditorNodes = itemResponse.data.data;
    return item;
  } catch (error) {
    logError(error);
  }
}

const Heading = (props: {
  level: 1 | 2 | 3 | 4;
  children: React.ReactNode;
}) => {
  switch (props.level.toString()) {
    case "1":
      return (
        <h1
          style={{
            ...Fonts.style.h1,
          }}
        >
          {props.children}
        </h1>
      );
    case "2":
      return (
        <h2
          style={{
            ...Fonts.style.h2,
            marginBlock: "unset",
            marginTop: Metrics.tripleBaseMargin,
            marginBottom: Metrics.doubleBaseMargin,
          }}
        >
          {props.children}
        </h2>
      );
    case "3":
      return (
        <h3
          style={{
            ...Fonts.style.h3,
          }}
        >
          {props.children}
        </h3>
      );
    case "4":
      return (
        <h4
          style={{
            ...Fonts.style.h4,
            marginBlock: "unset",
            marginTop: Metrics.doubleBaseMargin,
            marginBottom: Metrics.baseMargin,
          }}
        >
          {props.children}
        </h4>
      );

    default:
      return <h4>{props.children}</h4>;
  }
};

const markHandlers = (topProps) => {
  return {
    link: (props) => {
      // console.log("linkj props", props.children.props.node.type);
      // console.log("linkj topProps", topProps);

      let label =
        props.children.props.node.type === "text"
          ? props.children.props.node.text
          : props.children;
      return (
        <Link
          label={label}
          href={props.node.attrs.href}
          hoverColor={
            topProps && topProps.linkHoverColor
              ? topProps.linkHoverColor
              : Colors.green
          }
          color={
            topProps && topProps.linkColor
              ? topProps.linkColor
              : Colors.darkGreen
          }
        ></Link>
        // <a
        //   href={props.node.attrs.href}
        //   target="_blank"
        //   rel="noreferrer"
        //   textDecoration="none"
        //   style={{
        //     ...Fonts.style.text,
        //     color:
        //       topProps && topProps.linkColor
        //         ? topProps.linkColor
        //         : Colors.lightGreen,
        //   }}
        //   // onMouseEnter={() => setHover(true)}
        //   // onMouseLeave={() => setHover(false)}
        // >
        //   {props.children}
        // </a>
      );
    },
    bold: (props) => <b>{props.children}</b>,
    italic: (props) => <i>{props.children}</i>,
    underline: (props) => <u>{props.children}</u>,
    strike: (props) => <s>{props.children}</s>,
    code: (props) => <code>{props.children}</code>,
  };
};

// const nodeHandlers: TipTapNodeHandlers = {
const nodeHandlers = (topProps) => {
  return {
    doc: (props) => <>{props.children}</>,
    text: (props) => (
      <span
        style={{
          ...Fonts.style.TTtext,
          color: topProps.textColor ? topProps.textColor : Colors.black,
        }}
      >
        {props.node.text}
      </span>
    ),
    paragraph: (props) => (
      <p
        style={{
          marginBlock: "unset",
          marginBlockEnd: Metrics.doubleBaseMargin,
        }}
      >
        {props.children}
      </p>
    ),
    heading: (props) => (
      <Heading level={props.node.attrs.level}>{props.children}</Heading>
    ),
    hardBreak: () => <br />,
    bulletList: (props) => <ul>{props.children}</ul>,
    orderedList: (props) => <ol>{props.children}</ol>,
    listItem: (props) => <li>{props.children}</li>,
    codeBlock: (props) => (
      <pre>
        <code>{props.children}</code>
      </pre>
    ),
    horizontalRule: () => <hr />,
    blockquote: (props) => <blockquote>{props.children}</blockquote>,
    "relation-block": async (props) => {
      // console.log("relationBlock", props);
      // console.log("junction", props.node.attrs.junction);

      const ApiMapper = {
        page_receive_nodes: Api.readSingleItemsPageReceiveNodes,
        post_editor_nodes: Api.readSingleItemsPostEditorNodes,
        page_history_nodes: Api.readSingleItemsPageHistoryNodes,
        events_editor_nodes: Api.readSingleItemsEventsEditorNodes,
        page_join_nodes: Api.readSingleItemsPageJoinNodes,
        page_internship_nodes: Api.readSingleItemsPageInternshipNodes,
        page_classes_nodes: Api.readSingleItemsPageClassesNodes,
      };
      if (ApiMapper[props.node.attrs.junction]) {
        let node = await getNodes(
          props.node.attrs.id,
          ApiMapper[props.node.attrs.junction]
        );
        // console.log("collection", props.node.attrs.collection);

        if (props.node.attrs.collection === "audio_player") {
          let audioPlayer = await getAudioPlayerFiles(node.item);
          // console.log("quote", quote);

          return (
            <div
              style={{
                paddingTop: Metrics.doubleBaseMargin,
                paddingBottom: Metrics.doubleBaseMargin,
              }}
            >
              <AudioFilePlayer audioFiles={audioPlayer.files}></AudioFilePlayer>
            </div>
          );
        }

        if (props.node.attrs.collection === "quote") {
          let quote = await getQuote(node.item);
          // console.log("quote", quote);

          return <Quote data={quote}></Quote>;
        }
        if (props.node.attrs.collection === "iframe") {
          let iframe = await getIframe(node.item);
          return <Iframe data={iframe.code}></Iframe>;
        }
        if (props.node.attrs.collection === "info_box") {
          // console.log("info_box");
          let infoBoxData = await getInfoBox(node.item);
          // console.log("infoBoxData", infoBoxData);
          return <InfoBox data={infoBoxData}></InfoBox>;
        }
        if (props.node.attrs.collection === "image_box") {
          // console.log("info_box");
          let imageBoxData = await getImageBox(node.item);
          // console.log("imageBoxData", imageBoxData);
          return (
            <ImageBox
              imageId={imageBoxData.image as string}
              title={imageBoxData.title}
              text={imageBoxData.text}
              width={1440}
              height={960}
              style={{ marginTop: Metrics.tripleBaseMargin }}
            ></ImageBox>
          );
        }
      } else {
        console.error(
          "Junction Node Mapping is missing new Apifunction for: ",
          props.node.attrs.junction
        );
      }
      // console.log("node", node);
    },
  };
};

const handlers = (topProps) => {
  return {
    ...markHandlers(topProps),
    ...nodeHandlers(topProps),
  };
};

export type RenderTipTapProps = Readonly<{
  content: any;
  topProps?: any;
}>;

export const RenderTipTap = ({ content, topProps }: RenderTipTapProps) => {
  return (
    <div className="renderer-container">
      <TipTapRender node={content} handlers={handlers(topProps || {})} />
    </div>
  );
};

export default RenderTipTap;
