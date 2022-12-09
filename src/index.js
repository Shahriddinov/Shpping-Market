import React, {Suspense} from "react";
import {createRoot} from "react-dom/client";
import Routes from "./routes";
import "./services/i18n"
import {ToastContainer} from "react-toastify"


const container = document.getElementById("root");
const root = createRoot(container);
root.render(
    <Suspense fallback="">
        <ToastContainer/>
        <Routes/>
    </Suspense>
);