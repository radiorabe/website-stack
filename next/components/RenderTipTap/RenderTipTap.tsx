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
import { Text } from "@/lib/server-react-native";
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
import ImageBox from "./ImageBox";
import Colors from "@/lib/Colors";
import Link from "./Link";
import Iframe from "./Iframe";
import AudioFilePlayer from "../AudioFilePlayer";
import Metrics from "@/lib/Metrics";

/**
 * this is an implementation of the renderer interface using html native tags, a similar renderer can be written for react-native or using any UI library
 */

const Heading = (props: {
  level: 1 | 2 | 3 | 4;
  children: React.ReactNode;
}) => {
  switch (props.level.toString()) {
    case "1":
      return (
        <h1
          style={{
            ...Fonts.style.TTh1,
          }}
        >
          {props.children}
        </h1>
      );
    case "2":
      return (
        <h2
          style={{
            ...Fonts.style.TTh2,
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
            ...Fonts.style.TTh3,
          }}
        >
          {props.children}
        </h3>
      );
    case "4":
      return (
        <h4
          style={{
            ...Fonts.style.TTh4,
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
      // <Text
      //   style={{
      //     ...Fonts.style.text,
      //     color: topProps.textColor ? topProps.textColor : Colors.black,
      //   }}
      // >
      //   {props.node.text}
      // </Text>
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
    "relation-block": (props) => {
      if (!props.node.data) {
        console.error(
          "TipTap missing relational data for: ",
          props.node.attrs.collection
        );
        return;
      }

      if (props.node.attrs.collection === "audio_player") {
        let audioPlayer = props.node.data;
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
        let quote = props.node.data;
        return <Quote data={quote}></Quote>;
      }
      if (props.node.attrs.collection === "iframe") {
        let iframe = props.node.data;

        return <Iframe data={iframe.code}></Iframe>;
      }
      if (props.node.attrs.collection === "info_box") {
        let infoBoxData = props.node.data;
        return <InfoBox data={infoBoxData}></InfoBox>;
      }
      if (props.node.attrs.collection === "image_box") {
        let imageBoxData = props.node.data;
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
      console.error(
        "TipTap missing relational component for: ",
        props.node.attrs.collection
      );
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
