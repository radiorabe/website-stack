import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={26.77}
      height={22}
      viewBox="0 0 26.77 22"
      {...props}
    >
      <g
        data-name="Group 2133"
        transform="translate(1.5 1.5)"
        fill="none"
        stroke={props.color}
        strokeLinecap="square"
        strokeLinejoin="round"
        strokeWidth={3}
      >
        <path
          data-name="Line 43"
          transform="translate(.405)"
          d="M0 0L22.959 0"
        />
        <path
          data-name="Line 44"
          transform="translate(0 9.5)"
          d="M0 0L23.77 0"
        />
        <path
          data-name="Line 45"
          transform="translate(.405 19)"
          d="M0 0L22.959 0"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
