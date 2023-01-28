import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import data from "./data"

const root = createRoot(document.querySelector("#root"));

root.render(
    <div>
        <StrictMode>
            <App />
        </StrictMode>
    </div>
);
