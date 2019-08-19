// we need the whole package
import React from "react";
// we only need the render method from this package
import { render } from "react-dom";
//StorePicker & App are not used anymore because they are going to be indirectly used inside of Router.js
// import StorePicker from "./components/StorePicker";
// import App from "./components/App";
import Router from "./components/Router";
import "./css/style.css";

/* you can mount your React app to the page using the render method. 
The render method takes jsx and the mounting point.
Mounting is the only time you will actually need to access the DOM.
You can render a component out to the DOM */

render(<Router />, document.querySelector("#main"));
