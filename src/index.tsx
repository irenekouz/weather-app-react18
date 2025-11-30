import { createRoot } from "react-dom/client";
import "./index.css";
import { StrictMode } from "react";
import App from "./core/App";
import { BrowserRouter } from "react-router";

const container = document.getElementById("root");

createRoot(container!).render(
    <StrictMode>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </StrictMode>
);
