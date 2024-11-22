import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={32} height={32} {...props}>
    <defs>
      <clipPath id="a">
        <path
          fill={props.color}
          d="M.061.061h32v32h-32z"
          data-name="Rectangle 418"
        />
      </clipPath>
    </defs>
    <g
      clipPath="url(#a)"
      data-name="Group 1224"
      transform="translate(-.061 -.061)"
    >
      <path
        fill={props.color}
        d="M22.55 17.952a.7.7 0 0 1 .987-.987l1.7 1.7 6.884-6.885-3.491-3.4a3.457 3.457 0 0 1-4.889-4.888L20.344 0l-6.885 6.885 1.7 1.7a.7.7 0 1 1-.987.988l-1.7-1.7L0 20.344l3.212 3.244a3.763 3.763 0 0 1 5.322 5.322l3.243 3.211L24.249 19.65Zm-1.806-2.795a.7.7 0 0 1-.987 0l-2.793-2.792a.7.7 0 0 1 .987-.987l2.793 2.792a.7.7 0 0 1 0 .987"
        data-name="Path 258"
      />
    </g>
  </svg>
);
export default SvgComponent;
