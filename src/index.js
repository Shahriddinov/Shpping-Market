import React, {Suspense} from "react";
import {createRoot} from "react-dom/client";
import Routes from "./routes";
import bootstrap from "bootstrap/dist/css/bootstrap-grid.css.map"
import "./services/i18n"
const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Suspense fallback="">
        <Routes/>
    </Suspense>
);