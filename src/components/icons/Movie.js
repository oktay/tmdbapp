import * as React from 'react';

const SvgMovie = props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2 22V2M22 2v20M7.333 2h9.334v8H7.333V2ZM7.333 14h9.334v8H7.333v-8ZM5 4a.333.333 0 1 1-.667 0A.333.333 0 0 1 5 4ZM5 9.333a.333.333 0 1 1-.667 0 .333.333 0 0 1 .667 0ZM5 14.667a.333.333 0 1 1-.666 0 .333.333 0 0 1 .666 0ZM5 20a.333.333 0 1 1-.667 0A.333.333 0 0 1 5 20ZM19.667 4A.334.334 0 1 1 19 4a.334.334 0 0 1 .667 0ZM19.667 9.333a.334.334 0 1 1-.667 0 .334.334 0 0 1 .667 0ZM19.667 14.667a.333.333 0 1 1-.667 0 .333.333 0 0 1 .667 0ZM19.667 20a.334.334 0 1 1-.668 0 .334.334 0 0 1 .668 0Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default SvgMovie;
