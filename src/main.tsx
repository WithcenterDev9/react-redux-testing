import React from "react";
import { createRoot } from 'react-dom/client';
import App from "./App";
import "./globals.css";
import { Provider } from "react-redux";
import { appStore } from "./state/store";

createRoot(document.getElementById("root")!).render(
    <Provider store={appStore}>
        <App />
    </Provider>
)