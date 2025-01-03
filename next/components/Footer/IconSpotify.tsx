import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    {...props}
  >
    <g data-name="Group 1873">
      <path
        fill={props.color}
        d="M11.5 0A11.5 11.5 0 1 0 23 11.5 11.534 11.534 0 0 0 11.5 0m5.29 16.617a.682.682 0 0 1-.977.23c-2.7-1.668-6.1-2.012-10.119-1.092a.711.711 0 0 1-.345-1.38c4.37-.977 8.165-.575 11.155 1.265a.689.689 0 0 1 .287.977m1.38-3.162a.866.866 0 0 1-1.208.287A14.905 14.905 0 0 0 5.52 12.42a.873.873 0 1 1-.517-1.668 16.821 16.821 0 0 1 12.938 1.552.812.812 0 0 1 .229 1.151Zm1.61-3.508a1.2 1.2 0 0 1-1.495.287C14.606 8.05 8.454 7.82 4.946 8.912A1.055 1.055 0 0 1 4.313 6.9c4.083-1.207 10.811-.978 15.065 1.553a1.109 1.109 0 0 1 .4 1.494"
        data-name="Path 352"
      />
    </g>
  </svg>
);
export default SvgComponent;
