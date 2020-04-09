import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"

class AboutMe extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell className="about-me-col-left" col={4}>
            <h1>About Me</h1>
            <p>
              Philip Smalls here. Thanks for visiting my website. I am a Full
              Stack Web Developer who is passionate about coding and living
              every day as an opportunity to become a better version of myself.
            </p>
          </Cell>
          <Cell className="about-me-col-center" col={4}>
            2
          </Cell>
          <Cell className="about-me-col-right" col={4}>
            3
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default AboutMe
