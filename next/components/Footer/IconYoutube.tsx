import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" {...props}>
    <g fill={props.color} fillRule="evenodd" data-name="Group 1869">
      <path d="m10.141 13.522 3.5-2.021-3.5-2.022Z" data-name="Path 354" />
      <path
        d="M11.5 0A11.5 11.5 0 1 0 23 11.5 11.506 11.506 0 0 0 11.5 0m6.3 14.664a1.646 1.646 0 0 1-1.162 1.162 39.291 39.291 0 0 1-5.135.275 39.291 39.291 0 0 1-5.135-.275A1.646 1.646 0 0 1 5.2 14.663a18.363 18.363 0 0 1 0-6.327 1.647 1.647 0 0 1 1.162-1.162 39.266 39.266 0 0 1 5.135-.275 39.266 39.266 0 0 1 5.135.275 1.646 1.646 0 0 1 1.162 1.162 18.35 18.35 0 0 1 0 6.327"
        data-name="Path 355"
      />
    </g>
  </svg>
);
export default SvgComponent;
