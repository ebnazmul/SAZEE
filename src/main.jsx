import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Context from "./contexts/Context";
import Router from "./routes/Router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Context>
      <Router />
    </Context>
  </StrictMode>
);
