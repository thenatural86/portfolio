import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"

class LandingPage extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell className="banner-text" col={12}>
          <div>
            <h1>Welcome!</h1>
            <h3>My name is Philip and I'm a</h3>
            <h3>Web Developer</h3>
            <hr />
            <h4 style={{ color: "black" }}>
              React | Redux | JavaScript | Ruby on Rails | HTML/CSS | SQLite
            </h4>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default LandingPage
