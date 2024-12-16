import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 23 23"
    {...props}
  >
    <path
      fill={props.color}
      d="M23 11.57A11.5 11.5 0 1 0 9.7 23v-8.085H6.783V11.57H9.7V9.021c0-2.9 1.717-4.5 4.344-4.5a17.582 17.582 0 0 1 2.574.226v2.846h-1.45A1.667 1.667 0 0 0 13.3 9.4v2.17h3.189l-.51 3.345H13.3V23A11.552 11.552 0 0 0 23 11.57"
      data-name="Path 346"
    />
  </svg>
);
export default SvgComponent;
