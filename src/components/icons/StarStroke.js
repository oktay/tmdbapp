import * as React from 'react';

const SvgStarStroke = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m12 2 2.5 7.178H22l-5.833 4.644L18.25 21 12 16.778 5.75 21l2.083-7.178L2 9.178h7.5L12 2Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgStarStroke;
