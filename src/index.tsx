import React from "react";
import ReactDOM from "react-dom/client";
import "./sass/app.scss";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { setupStore } from "./store/store";
import { Provider } from "react-redux";
import autorization from "./store/user/autorization";

const store = setupStore();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

//autorization();

root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
