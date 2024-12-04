import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} {...props}>
    <g
      fill="none"
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      data-name="Group 1174"
    >
      <path
        d="M11.5 6A5.5 5.5 0 1 0 6 11.5 5.5 5.5 0 0 0 11.5 6Z"
        data-name="Path 2"
      />
      <path d="m9.929 9.928 5.458 5.459" data-name="Line 1" />
    </g>
  </svg>
);
export default SvgComponent;
