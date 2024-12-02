import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={21} height={19} {...props}>
    <path
      fill="#ff2c55"
      d="M19.869 8.517c-1.733 3.333-6.367 7.866-8.992 10.282a.741.741 0 0 1-.993 0C7.247 16.383 2.61 11.85.877 8.517-2.93 1.183 6.669-3.701 10.373 3.628c3.703-7.329 13.303-2.445 9.496 4.889Z"
      opacity={0.998}
    />
  </svg>
);
export default SvgComponent;
