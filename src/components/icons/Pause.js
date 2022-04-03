import * as React from 'react';

const SvgPause = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9.75 9.248v7.5M14.25 9.248v7.5"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      clipRule="evenodd"
      d="M12 24.248c6.213 0 11.25-5.037 11.25-11.25S18.213 1.748 12 1.748.75 6.785.75 12.998 5.787 24.248 12 24.248Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgPause;
