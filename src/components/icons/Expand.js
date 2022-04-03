import * as React from 'react';

const SvgExpand = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path fill="#fff" stroke="#fff" d="M2.5 11.5h19v1h-19z" />
    <path fill="#fff" stroke="#fff" d="M11.5 21.5v-19h1v19z" />
  </svg>
);

export default SvgExpand;
