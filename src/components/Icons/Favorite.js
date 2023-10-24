import * as React from "react";
const SvgFavorite = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M14.653 2.955a6 6 0 0 1 6.54 9.789l-8.84 8.84a.5.5 0 0 1-.707 0l-8.84-8.84a6.002 6.002 0 0 1 8.488-8.488l.706.707.706-.706a6 6 0 0 1 1.947-1.302Zm2.297.543a5 5 0 0 0-3.536 1.465l-1.06 1.06a.5.5 0 0 1-.708 0l-1.06-1.06a5.001 5.001 0 1 0-7.072 7.073L12 20.523l8.486-8.487a5 5 0 0 0-3.536-8.538Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgFavorite;
