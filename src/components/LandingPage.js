import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"
import Typewriter from "typewriter-effect"

class LandingPage extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell className="banner-text" col={12}>
          <div>
            <h1>Welcome!</h1>
            <h3>My name is Philip and I'm a</h3>
            <h3>
              <Typewriter
                options={{
                  strings: ["Web Developer", "Writer", "Nature Boy"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                }}
              />
            </h3>

            <hr />
            <h4 style={{ color: "black", fontFamily: "Raleway" }}>
              React | Redux | JavaScript | Ruby on Rails | HTML/CSS | SQLite
            </h4>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default LandingPage
