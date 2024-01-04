import * as React from "react";
const Wabe = (props) => (
  <svg
    className="wave"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 1440 320"
    {...props}
  >
    <path
      fill="#ffc107"
      d="m0 64 24 10.7c24 10.3 72 32.3 120 32 48 .3 96-21.7 144-16 48 5.3 96 37.3 144 74.6C480 203 528 245 576 256s96-11 144-26.7c48-16.3 96-26.3 144-16 48 10.7 96 42.7 144 37.4 48-5.7 96-47.7 144-58.7s96 11 144 26.7c48 16.3 96 26.3 120 32l24 5.3v64H0Z"
    />
  </svg>
);
export default Wabe;
