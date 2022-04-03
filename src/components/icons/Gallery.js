import * as React from 'react';

const SvgGallery = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 2.25A1.5 1.5 0 0 1 3 .75h12a1.5 1.5 0 0 1 1.5 1.5v13.5a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5V2.25Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M19.5 3.75V19.5a.75.75 0 0 1-.75.75H4.5"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22.5 6.75V22.5a.75.75 0 0 1-.75.75H7.5M16.5 12.75h-15M6 12.75l4.153-5.932a1.5 1.5 0 0 1 2.357-.128l3.99 4.56M5.25 4.125a.375.375 0 1 1 0 .75.375.375 0 0 1 0-.75Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgGallery;
