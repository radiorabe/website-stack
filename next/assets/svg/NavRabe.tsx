import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    xmlSpace="preserve"
    style={{
      enableBackground: "new 0 0 80 50",
    }}
    viewBox="0 0 80 50"
    width="1em"
    height="1em"
    {...props}
  >
    <defs>
      <path id="a" d="M0 0h80v50H0z" />
    </defs>
    <clipPath id="b">
      <use
        xlinkHref="#a"
        style={{
          overflow: "visible",
        }}
      />
    </clipPath>
    <g
      style={{
        clipPath: "url(#b)",
      }}
      transform="translate(0 .054)"
    >
      <defs>
        <path id="c" d="m0 0 80-.1v50H0z" />
      </defs>
      <clipPath id="d">
        <use
          xlinkHref="#c"
          style={{
            overflow: "visible",
          }}
        />
      </clipPath>
      <g
        style={{
          clipPath: "url(#d)",
        }}
      >
        <path
          d="M46.7 49.9c-.4-4.1-.8-8.3-1.2-12.4 2.2-1 16-7.3 14.3-6.6 3.3-1.5 14.1-6.7 19.4-12.8-9.9-4.4-12.5-5.2-16.7-4.4-3.9.7-17.1 3.1-19 3.4-.2-.1-1.7-1.3-5-.3l-.9.3c-.3-2.1-.8-4.2-1.5-6.2-1-3.2-3.3-5.9-6.3-7.4C24.8 1.4 19.4.2 14 0c-1.8 0-3.6.2-5.3.8-1.9.6-3.4 2-4.2 3.7-.5 1-.7 2.2-.7 3.3.4 4.5 1.4 9 3.1 13.2-4.2 3-5.6 8.4-4.1 14.1.7 2.9 2.2 5.6 4.4 7.7-.3.7-.5 1.2-.6 1.7-.5 1.2-.7 1.6-.8 2.1-.3.8-.6 1.9-.9 3.3h41.8zm-26-13.1c-.6 2.8-2.8 5.1-5.6 5.9-.8-.1 0-.6 0-.6 1.6-1.7 2.8-3.7 3.5-5.9.6-2.5.9-5.1.8-7.7 0-.5.1-.9.6-.1 1.2 2.7 1.5 5.6.7 8.4m.8-13.8c-2-3.1-5.6-4.7-9.2-4.1-.1-.4-.3-.8-.4-1.2-1.2-3.2-2-6.5-2.3-9.9 0-.2 0-.5.1-.7v-.2c.1-.2.2-.4 1-.7 1.1-.3 2.2-.5 3.3-.5 4.6.2 9.2 1.2 13.5 3 1 .5 1.8 1.2 2.3 2.2 1.1 2 1.8 4.2 2.1 6.5.1.4.1.8.2 1.1-3.8 1.1-7.3 2.6-10.6 4.5M38 27.1l-3.4 1.3c-.7-.4-1.2-1.1-1.3-1.9v-.2c0-1.2.9-2.3 2.2-2.4h.2c1.2 0 2.3 1 2.4 2.2v.2c0 .3 0 .6-.1.8zm6-2.6 4.2-4.2-3.1.6.2-1.9s18.3-4 21.3-3.7c3 .2 10 3.5 10 3.5-3.8.3-7.6.8-11.4 1.6-4.6 1-6.4 2.5-12.1 4.7s-10.6 4.2-9.1-.6"
          style={{
            fill: props.color,
          }}
        />
      </g>
    </g>
  </svg>
);
export default SvgComponent;