import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const typography = `

    --font-family: ${montserrat.style.fontFamily}, sans-serif;

    --font-normal: normal;
    --font-italic: italic;

    --step--2: clamp(0.6944rem, 0.6572rem + 0.1587vw, 0.8rem);
    --step--1: clamp(0.8331rem, 0.7744rem + 0.2507vw, 1rem);
    --step-0: clamp(1rem, 0.912rem + 0.3756vw, 1.25rem);
    --step-1: clamp(1.2rem, 1.0724rem + 0.5446vw, 1.5625rem);
    --step-2: clamp(1.44rem, 1.2593rem + 0.7709vw, 1.9531rem);
    --step-3: clamp(1.7281rem, 1.477rem + 1.0714vw, 2.4413rem);
    --step-4: clamp(2.0738rem, 1.7293rem + 1.4695vw, 3.0519rem);
    --step-5: clamp(2.4881rem, 2.0209rem + 1.9934vw, 3.815rem);
`;
