import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 18 18"
    {...props}
  >
    <g data-name="Group 2017" transform="translate(-36 -1182.401)">
      <circle
        cx={9}
        cy={9}
        r={9}
        fill={props.color}
        data-name="Ellipse 18"
        transform="translate(36 1182.401)"
      />
      <path
        fill="#fff"
        d="M46.261 1188.456v-2.708l5.165 4.185-5.165 4.185v-2.708c-6.7 0-6.68 4.185-6.68 4.185-.449-7.523 6.68-7.139 6.68-7.139Z"
        data-name="Union 2"
      />
    </g>
  </svg>
);
export default SvgComponent;
