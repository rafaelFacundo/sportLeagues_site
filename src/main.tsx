import React from "react";
import ReactDOM from "react-dom/client";
import FontStyle from "./fonts/fonts.ts";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FontStyle />
    <App />
  </React.StrictMode>
);
