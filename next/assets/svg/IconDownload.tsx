import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" {...props}>
    <g data-name="Group 904">
      <g data-name="Group 166">
        <circle cx={9} cy={9} r={9} fill={props.color} data-name="Ellipse 17" />
        <path
          fill="#fff"
          d="M4.656 9.561h2.77v-5.8h3.022v5.8h2.769l-4.28 5.368Z"
          data-name="Union 3"
        />
      </g>
    </g>
  </svg>
);
export default SvgComponent;
