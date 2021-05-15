import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { ToastContainer } from "react-toastify";

ReactDOM.render(
  <React.StrictMode>
    <ToastContainer />
    <Routes />
  </React.StrictMode>,
  document.getElementById("root")
);
