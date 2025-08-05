import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "styled-components";
import App from "./components/App";
import { store, persistor } from "./redux/store";
import { GlobalStyle } from "./components/Shared/GlobalStyle";
import {
  colors,
  fonts,
  spacing,
  shadows,
  borderRadius,
  transitions
} from "./components/Shared/variables";

const theme = {
  colors,
  fonts,
  spacing,
  shadows,
  borderRadius,
  transitions
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <App />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
