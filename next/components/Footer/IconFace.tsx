import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill={props.color} fillRule="evenodd" data-name="Group 1875">
      <path
        d="m9.755 16.833 1.727-1.727h3.169l2.018-2.018V6.749H7.16v8.358h2.595Zm3.744-7.778h1.152v3.457h-1.152Zm-3.169 0h1.152v3.457h-1.148Z"
        data-name="Path 350"
      />
      <path
        d="M11.5 0A11.5 11.5 0 1 0 23 11.5 11.505 11.505 0 0 0 11.5 0m6.186 13.625-3.375 3.374H11.78l-1.686 1.688H8.406v-1.688H5.314v-9l.839-2.253h11.533Z"
        data-name="Path 351"
      />
    </g>
  </svg>
);
export default SvgComponent;
