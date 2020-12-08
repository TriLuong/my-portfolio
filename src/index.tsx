import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "pages/App";
import BasicLayout from "layouts/BasicLayout";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "assets/scss/_common.scss";

ReactDOM.render(
  <BasicLayout>
    <App />
  </BasicLayout>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
