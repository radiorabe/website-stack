import React from "react";
import type { TipTapBaseNode } from "./interfaces";

export type TipTapRenderHandler = (props: {
  children?: React.ReactNode;
  node: TipTapBaseNode;
}) => React.ReactElement;

export type TipTapRenderHandlers = Record<string, TipTapRenderHandler>;

export function TipTapRender({
  node,
  handlers,
}: {
  node: TipTapBaseNode;
  handlers: TipTapRenderHandlers;
}) {
  const children: React.ReactElement[] = [];

  node.content?.forEach((child, index) => {
    children.push(
      <TipTapRender
        key={`${child.type}-${index}`}
        node={child}
        handlers={handlers}
      />,
    );
  });

  const nodeType = node.type;

  if (!(nodeType in handlers)) {
    console.info("tiptap renderer, missing node type", nodeType, node);
    return <></>;
  }

  let renderedElement: React.ReactElement;

  if (nodeType === "paragraph" && !node.content?.length) {
    renderedElement = React.createElement(
      handlers.hardBreak,
      { node },
      children,
    );
  } else {
    renderedElement = React.createElement(
      handlers[nodeType],
      { node },
      children,
    );
  }

  node.marks?.forEach((mark) => {
    const markType = mark.type;

    if (!(markType in handlers)) {
      console.info("tiptap renderer, missing mark type", markType, mark);
      return;
    }

    renderedElement = React.createElement(handlers[markType], {
      node: mark,
      children: renderedElement,
    });
  });

  return renderedElement;
}
