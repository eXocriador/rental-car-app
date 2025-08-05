import "modern-normalize";

// Global styles as regular CSS
const globalStyles = `
  /* Modern Normalize is imported above */

  /* Additional resets and base styles */
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #ffffff;
    color: #121417;
    line-height: 1.5;
    overflow-x: hidden;
  }

  #root {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  /* Reset default styles */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    font-weight: inherit;
    font-size: inherit;
  }

  p {
    margin: 0;
  }

  ul, ol {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    background: none;
    padding: 0;
    margin: 0;
    font: inherit;
    cursor: pointer;
    outline: none;
  }

  input, textarea, select {
    font: inherit;
    border: none;
    outline: none;
    background: none;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  /* Remove default focus styles and add custom ones */
  *:focus {
    outline: none;
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
`;

// Function to inject global styles
export const injectGlobalStyles = () => {
  const styleElement = document.createElement("style");
  styleElement.textContent = globalStyles;
  document.head.appendChild(styleElement);
};

// Export the styles string for manual injection if needed
export const GlobalStyle = globalStyles;
