import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={"100%"}
      height={"100%"}
      viewBox="0 0 21.051 21.051"
      {...props}
    >
      <g data-name="Group 2133">
        <path
          data-name="Line 44"
          transform="rotate(-45 12.443 11.654) translate(0 9.5)"
          fill="none"
          stroke="#e3f9f8"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M0 0L23.77 0"
        />
      </g>
      <g data-name="Group 2197">
        <path
          data-name="Line 44"
          transform="rotate(45 9.967 8.372) translate(0 9.5)"
          fill="none"
          stroke="#e3f9f8"
          strokeLinecap="square"
          strokeLinejoin="round"
          strokeWidth={3}
          d="M0 0L23.77 0"
        />
      </g>
    </svg>
  );
}

export default SvgComponent;
