import React from "react"
import { Switch, Route } from "react-router-dom"
import LandingPage from "./LandingPage"
import Contact from "./Contact"
import Projects from "./Projects"
import Resume from "./Resume"

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/Projects" component={Projects} />
      <Route exact path="/Contact" component={Contact} />
      <Route exact path="/Resume" component={Resume} />
    </Switch>
  )
}
export default Main
