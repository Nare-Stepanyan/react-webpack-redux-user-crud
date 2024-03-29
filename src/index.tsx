import React from "react";
import { Provider } from "react-redux";
import ReactDOM from "react-dom/client";
import App from "./app/index";
import { store } from "./store";
import "./styles/style.scss";

const root = ReactDOM.createRoot(document.getElementById("root")!);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
