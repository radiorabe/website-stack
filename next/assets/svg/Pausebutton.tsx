import * as React from "react";

function SvgComponent(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={"100%"}
      height={"100%"}
      viewBox="0 0 65 65"
      {...props}
    >
      <path
        data-name="Subtraction 3"
        d="M32 64A32.008 32.008 0 0119.544 2.515a32.008 32.008 0 0124.912 58.97A31.8 31.8 0 0132 64zm3.592-46.735v30.613h8.5V17.265zm-15.306 0v30.613h8.5V17.265z"
        fill={props.color}
      />
    </svg>
  );
}

export default SvgComponent;
