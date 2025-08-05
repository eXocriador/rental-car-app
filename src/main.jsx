import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";
import App from "./components/App";
import { store, persistor } from "./redux/store";
import { injectGlobalStyles } from "./components/Shared/GlobalStyle";
import {
  colors,
  fonts,
  spacing,
  shadows,
  borderRadius,
  transitions
} from "./components/Shared/variables";

// Inject global styles
injectGlobalStyles();

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: colors.background,
              color: colors.text,
              border: `1px solid ${colors.border}`
            },
            success: {
              style: {
                background: colors.success,
                color: "white"
              }
            },
            error: {
              style: {
                background: colors.error,
                color: "white"
              }
            }
          }}
        />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
