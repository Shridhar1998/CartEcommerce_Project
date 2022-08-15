import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import { BrowserRouter } from "react-router-dom";
import { AddCartContextProvider } from "./Context/AddCartContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AddCartContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AddCartContextProvider>
  </React.StrictMode>
);
