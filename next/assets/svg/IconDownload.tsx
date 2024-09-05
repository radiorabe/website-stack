import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => {
  let scale = props.scale ? (props.scale as number) : 1;
  let size = 18 * scale;
  let circleSize = size / 2;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      scale={scale}
      {...props}
    >
      <g data-name="Group 904">
        <g data-name="Group 166">
          <circle
            cx={circleSize}
            cy={circleSize}
            r={circleSize}
            fill={props.color}
            data-name="Ellipse 17"
          />
          <path
            fill="#fff"
            // scale={scale}
            d="M4.656 9.561h2.77v-5.8h3.022v5.8h2.769l-4.28 5.368Z"
            data-name="Union 3"
          />
        </g>
      </g>
    </svg>
  );
};
export default SvgComponent;
