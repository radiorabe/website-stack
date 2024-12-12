import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={38}
      height={38}
      viewBox="0 0 38 38"
      {...props}
    >
      <g data-name="Group 2132">
        <path
          data-name="Subtraction 2"
          d="M19 38a19.005 19.005 0 01-7.4-36.507 19 19 0 0114.8 35.014A18.881 18.881 0 0119 38zm-4.957-27.261v16.522L28.087 19z"
          transform="translate(0 -.019) translate(0 .019)"
          fill={props.color}
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
