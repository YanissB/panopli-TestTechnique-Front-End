import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createTheme, WuiProvider } from "@welcome-ui/core";

const theme = createTheme();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <WuiProvider theme={theme}>
      <App />
    </WuiProvider>
  </React.StrictMode>
);
