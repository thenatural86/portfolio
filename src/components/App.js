import React from "react"
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl"

import Main from "./Main"
import { Link } from "react-router-dom"

import "./App.css"

class App extends React.Component {
  renderTitle = () => {
    return (
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        Philip Smalls{"  "}
        <img
          src="https://i.ya-webdesign.com/images/chucky-lightning-bolt-png-7.png"
          alt="lightning"
          style={{ height: "20px" }}
        />
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
            <Drawer title="Title">
              <Navigation>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
              </Navigation>
            </Drawer>
          </Header>
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
