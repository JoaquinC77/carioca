import React from "react";
import PropTypes from "prop-types";

export default function ExitButton({ height, width, fill, stroke, onClick }) {
  return (
    <>
      <button className="bg-transparent" onClick={onClick} type="button">
        <svg
          height={height}
          viewBox="0 0 21 21"
          width={width}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            fill={fill}
            fillRule="evenodd"
            stroke={stroke}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m7.5 7.5 6 6" />
            <path d="m13.5 7.5-6 6" />
          </g>
        </svg>
      </button>
    </>
  );
}

ExitButton.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  fill: PropTypes.string,
  stroke: PropTypes.string,
  onClick: PropTypes.func.isRequired
};

ExitButton.defaultProps = {
  height: "40",
  width: "40",
  fill: "none",
  stroke: "currentColor",
};
