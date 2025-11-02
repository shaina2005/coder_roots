import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Shaina from "./Shaina.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter base="/coder_roots">
      <App />
      {/* <Shaina /> */}
    </BrowserRouter>
  </StrictMode>
);
