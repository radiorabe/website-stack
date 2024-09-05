import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={38} height={38} {...props}>
    <g data-name="Group 904">
      <g data-name="Group 166">
        <circle
          cx={19}
          cy={19}
          r={19}
          fill={props.color}
          data-name="Ellipse 17"
        />
        <path
          fill="#00635f"
          d="M10.017 20.157h5.728V8.166h6.25v11.991h5.722l-8.851 11.1Z"
          data-name="Union 3"
        />
      </g>
    </g>
  </svg>
);
export default SvgComponent;
