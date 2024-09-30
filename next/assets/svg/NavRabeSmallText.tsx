import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" {...props}>
    <defs>
      <clipPath id="a">
        <path
          fill={props.color}
          d="M0 0h74.567v11.529H0z"
          data-name="Rectangle 750"
        />
      </clipPath>
    </defs>
    <g data-name="Group 2166">
      <g fill={props.color} clipPath="url(#a)" data-name="Group 2140">
        <path
          d="M0 .082h5.1a4.611 4.611 0 0 1 3.3 1.145 3.487 3.487 0 0 1 .949 2.469v.033A3.438 3.438 0 0 1 6.64 7.196l3.09 4.333H7.343L4.53 7.539H2.011v3.99H0Zm4.955 5.675c1.439 0 2.355-.736 2.355-1.914V3.81c0-1.243-.866-1.9-2.371-1.9H2.011v3.847Z"
          data-name="Path 416"
        />
        <path
          d="M25.695 0h1.865l5.037 11.529H30.47l-1.161-2.764h-5.413l-1.178 2.764h-2.06Zm2.878 6.983L26.595 2.4l-1.963 4.583Z"
          data-name="Path 417"
        />
        <path
          d="M44.375.082h5.134a4.064 4.064 0 0 1 2.993 1.014 2.589 2.589 0 0 1 .769 1.9v.033a2.708 2.708 0 0 1-1.636 2.551c1.358.474 2.274 1.21 2.274 2.78v.033c0 2.044-1.685 3.14-4.236 3.14h-5.3Zm6.88 3.238c0-.916-.7-1.455-2.011-1.455h-2.889v3.041h2.747c1.309 0 2.159-.507 2.159-1.553Zm.638 4.824c0-.981-.768-1.538-2.355-1.538h-3.183v3.14h3.336c1.374 0 2.208-.523 2.208-1.57Z"
          data-name="Path 418"
        />
        <path
          d="M65.999.082h8.487v1.8h-6.477v2.975h5.74v1.816h-5.74v3.058h6.558v1.8h-8.568Z"
          data-name="Path 419"
        />
      </g>
    </g>
  </svg>
);
export default SvgComponent;
