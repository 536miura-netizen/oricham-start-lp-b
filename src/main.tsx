import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { initGoogleAnalytics } from "./analytics";
import "./index.css";

initGoogleAnalytics();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
