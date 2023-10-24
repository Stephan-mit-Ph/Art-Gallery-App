import * as React from "react";
const SvgSpotlight = ({ title, titleId, ...props }) => (
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
      d="M3.232 3.232A2.5 2.5 0 0 1 5 2.5h3a.5.5 0 0 1 0 1H5A1.5 1.5 0 0 0 3.5 5v3a.5.5 0 0 1-1 0V5a2.5 2.5 0 0 1 .732-1.768ZM15.5 3a.5.5 0 0 1 .5-.5h3A2.5 2.5 0 0 1 21.5 5v3a.5.5 0 0 1-1 0V5A1.5 1.5 0 0 0 19 3.5h-3a.5.5 0 0 1-.5-.5ZM3 15.5a.5.5 0 0 1 .5.5v3A1.5 1.5 0 0 0 5 20.5h3a.5.5 0 0 1 0 1H5A2.5 2.5 0 0 1 2.5 19v-3a.5.5 0 0 1 .5-.5Zm18 0a.5.5 0 0 1 .5.5v3a2.5 2.5 0 0 1-2.5 2.5h-3a.5.5 0 0 1 0-1h3a1.5 1.5 0 0 0 1.5-1.5v-3a.5.5 0 0 1 .5-.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgSpotlight;
