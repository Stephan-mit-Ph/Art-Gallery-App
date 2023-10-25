export const reset = `
*, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
    padding: 0;
    border: 0;
  }

  html, body {
    height: 100%;
    width: 100%;
  }

  html {
    min-width: 100vw;
  }

  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }

  ul, li, ol {
    list-style: none;
    padding: 0;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  #root, #__next {
    isolation: isolate;
  }
  
`;
