import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={64 * (props.scale as number)}
    height={64 * (props.scale as number)}
    {...props}
  >
    <path
      fill={props.color}
      transform={`scale(${props.scale})`}
      d="M32 64A32.008 32.008 0 0 1 19.544 2.515a32.008 32.008 0 0 1 24.912 58.97A31.8 31.8 0 0 1 32 64Zm3.592-46.735v30.613h8.5V17.265Zm-15.306 0v30.613h8.5V17.265Z"
      data-name="Subtraction 3"
    />
  </svg>
);
export default SvgComponent;
