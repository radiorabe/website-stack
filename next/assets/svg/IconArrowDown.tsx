import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="8" {...props}>
    <path
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={2}
      d="m1.411 1.412 5.232 4.6 5.108-4.6"
      data-name="Path 317"
    />
  </svg>
);
export default SvgComponent;
