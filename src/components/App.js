import React from "react"
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"

import Main from "./Main"
import { Link } from "react-router-dom"

import "./App.css"

class App extends React.Component {
  renderTitle = () => {
    return (
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Philip Smalls
      </Link>
    )
  }

  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header className="header-color" title={this.renderTitle()} scroll>
            <Navigation>
              <Link to="/">Home</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Header>
          {/* <Drawer title="philipsmalls.com">
            <Navigation>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
          </Drawer> */}
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
