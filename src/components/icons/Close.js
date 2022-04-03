import * as React from 'react';

const SvgClose = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m12.87 12.53 5.07 5.07-.34.34-5.07-5.07-.53-.53-.53.53-5.07 5.07-.34-.34 5.07-5.07.53-.53-.53-.53L6.06 6.4l.34-.34 5.07 5.07.53.53.53-.53 5.07-5.07.34.34-5.07 5.07-.53.53.53.53Z"
      fill="#fff"
      stroke="#fff"
      strokeWidth={1.5}
    />
  </svg>
);

export default SvgClose;
