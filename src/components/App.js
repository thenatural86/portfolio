import React from "react"
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"

import Main from "./Main"
import { Link } from "react-router-dom"

class App extends React.Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header title="philipsmalls.com" scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          <Drawer title="Title">
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    )
  }
}

export default App
