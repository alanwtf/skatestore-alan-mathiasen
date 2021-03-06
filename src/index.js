import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { getFirestoreApp } from "./firebase/config";
import "./index.scss";

getFirestoreApp();

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
