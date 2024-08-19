import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64 * (props.scale as number)}
    height={64 * (props.scale as number)}
    data-name="Component 9 \u2013 1"
    {...props}
  >
    <path
      fill={props.color}
      transform={`scale(${props.scale})`}
      d="M32 64A32.008 32.008 0 0 1 19.544 2.515a32.008 32.008 0 0 1 24.912 58.97A31.8 31.8 0 0 1 32 64Zm-8.348-45.913v27.827L47.3 32Z"
      data-name="Subtraction 2"
    />
  </svg>
);
export default SvgComponent;
