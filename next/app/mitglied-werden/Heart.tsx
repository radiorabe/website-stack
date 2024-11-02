import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={171.5} height={157} {...props}>
    <path
      fill={props.color}
      d="M164.28 70.414c-14.331 27.56-52.67 65.041-74.35 85.006a6.123 6.123 0 0 1-8.207 0C59.92 135.455 21.582 97.974 7.251 70.414-24.229 9.783 55.143-30.638 85.765 29.993c30.622-60.631 109.994-20.21 78.515 40.421Z"
      opacity={0.998}
    />
  </svg>
);
export default SvgComponent;
