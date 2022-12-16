import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./services/i18n";
import { ToastContainer } from "react-toastify";
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Suspense fallback="">
    <ToastContainer />
    <App />
  </Suspense>
);
