import React from "react";
import ReactDOM from "react-dom";
import "./global-style.js";
import Home from "./views/Home";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(<Home />, document.getElementById("root"));
registerServiceWorker();
