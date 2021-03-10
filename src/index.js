import React from "react"
import ReactDOM from "react-dom"
import { HashRouter } from "react-router-dom"
import App from "./components/App"
import "react-mdl/extra/material.css"
import "react-mdl/extra/material.js"

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.querySelector("#root")
)