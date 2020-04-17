import React from "react"
import { Switch, Route } from "react-router-dom"
import LandingPage from "./LandingPage"
import Contact from "./Contact"
import Resume from "./Resume"
import Cards from "./Cards"
// import Modal from "./Modal"

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Projects" component={Cards} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Resume" component={Resume} />
      {/* <Route exact path="/Modal" component={Modal} /> */}
    </Switch>
  )
}
export default Main
