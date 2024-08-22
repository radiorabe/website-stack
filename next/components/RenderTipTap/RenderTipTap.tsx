import { Api } from "@/lib/api";
import {
  ItemsInfoBox,
  ItemsPostsEditorNodes,
  ItemsQuote,
} from "@/lib/api/data-contracts";
import Fonts from "@/lib/Fonts";
import {
  TipTapMarkHandlers,
  TipTapNodeHandlers,
  TipTapRender,
  TipTapRenderHandlers,
} from "@wokaylabs/tiptap-react-render";
import { notFound } from "next/navigation";
import React from "react";
import InfoBox from "./InfoBox";
import Quote from "./Quote";

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
        next: { tags: process.env.NODE_ENV ? ["collection"] : undefined },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let item: ItemsInfoBox = itemResponse.data.data;
    return item;
  } catch (error) {
    console.error("error", error.error);
    notFound();
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
        next: { tags: process.env.NODE_ENV ? ["collection"] : undefined },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let item: ItemsQuote = itemResponse.data.data;
    return item;
  } catch (error) {
    console.error("error", error.error);
    notFound();
  }
}

async function getNodes(id) {
  try {
    const itemResponse = await Api.readSingleItemsPostsEditorNodes(
      {
        id: id,
        fields: ["*"],
      },
      {
        next: { tags: process.env.NODE_ENV ? ["collection"] : undefined },
        cache:
          process.env.NODE_ENV === "production" ? "force-cache" : "no-store",
      }
    );
    let item: ItemsPostsEditorNodes = itemResponse.data.data;
    return item;
  } catch (error) {
    console.error("error", error.error);
    notFound();
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
          }}
        >
          {props.children}
        </h4>
      );

    // return (
    //   <Text
    //     style={{
    //       ...Fonts.style.h4,
    //     }}
    //   >
    //     {props.children[0].node}
    //   </Text>
    // );
    default:
      // console.log("switch 4");

      return <h4>{props.children}</h4>;
  }
};

const markHandlers: TipTapMarkHandlers = {
  link: (props) => (
    <a href={props.node.attrs.href} target="_blank" rel="noreferrer">
      {props.children}
    </a>
  ),
  bold: (props) => <b>{props.children}</b>,
  italic: (props) => <i>{props.children}</i>,
  underline: (props) => <u>{props.children}</u>,
  strike: (props) => <s>{props.children}</s>,
  code: (props) => <code>{props.children}</code>,
};

const nodeHandlers: TipTapNodeHandlers = {
  doc: (props) => <>{props.children}</>,
  text: (props) => (
    <span style={{ ...Fonts.style.TTtext }}>{props.node.text}</span>
  ),
  paragraph: (props) => <p>{props.children}</p>,
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
    let node = await getNodes(props.node.attrs.id);
    // console.log("node", node);

    if (props.node.attrs.collection === "quote") {
      let quote = await getQuote(node.item);
      // console.log("quote", quote);

      return <Quote data={quote}></Quote>;
    }
    if (props.node.attrs.collection === "info_box") {
      // console.log("info_box");
      let infoBoxData = await getInfoBox(node.item);
      // console.log("infoBoxData", infoBoxData);
      return <InfoBox data={infoBoxData}></InfoBox>;
    }
  },
};

const handlers: TipTapRenderHandlers = {
  ...markHandlers,
  ...nodeHandlers,
};

export const RenderTipTap = ({ content }) => {
  // const contentJson = useMemo(() => JSON.parse(content), [content]);

  return (
    <div className="renderer-container">
      <TipTapRender node={content} handlers={handlers} />
    </div>
  );
};

export default RenderTipTap;
