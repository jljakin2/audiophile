import React from "react";
import reactDom from "react-dom";
import { Provider } from "react-redux";

import store from "./store";

import App from "./App";

reactDom.render(
  // provider sets up our redux store
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
