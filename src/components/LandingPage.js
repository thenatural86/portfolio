import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://us.123rf.com/450wm/moremar/moremar1706/moremar170600011/81168217-stock-vector-portrait-of-an-african-man-the-face-of-a-guy-avatar-for-the-internet-vector-illustration.jpg?ver=6"
              alt="avatar"
              className="avatar-image"
            />
            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

              <hr />
              <p>JavaScript | React | Redux | HTML/CSS | SQLite</p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage
