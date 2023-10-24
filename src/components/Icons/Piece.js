import * as React from "react";
const SvgImage = ({ title, titleId, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 25 25"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="M5.292 4.187a1.5 1.5 0 0 0-1.5 1.5v14a1.5 1.5 0 0 0 1.305 1.488l10.841-10.841a.5.5 0 0 1 .707 0l4.147 4.146V5.687a1.5 1.5 0 0 0-1.5-1.5h-14Zm15.5 11.707-4.5-4.5-9.793 9.793h12.793a1.5 1.5 0 0 0 1.5-1.5v-3.793Zm-18-10.207a2.5 2.5 0 0 1 2.5-2.5h14a2.5 2.5 0 0 1 2.5 2.5v14a2.5 2.5 0 0 1-2.5 2.5h-14a2.5 2.5 0 0 1-2.5-2.5v-14Zm6 2.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgImage;
