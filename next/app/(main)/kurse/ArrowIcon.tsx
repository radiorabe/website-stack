import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={42.1} height={14.6} {...props}>
    <path
      fill="none"
      stroke={props.color}
      strokeLinecap="round"
      strokeWidth={3}
      d="m2.044 2.049 19.227 10.83 18.773-10.83"
      data-name="Path 317"
    />
  </svg>
);
export default SvgComponent;
