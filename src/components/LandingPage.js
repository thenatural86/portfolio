import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"

class LandingPage extends Component {
  render() {
    return (
      <Grid className="landing-grid">
        <Cell
          style={{ width: "50%", marginLeft: "25em" }}
          className="banner-text"
          col={12}
        >
          <div>
            <h1>Welcome!</h1>
            <h3>My name is Philip and I'm a Web Developer</h3>
            <p>
              Besides coding, I enjoy cooking, playing the guitar and being in
              nature. I also enjoy getting together with friends and making{" "}
              <a
                href="https://www.youtube.com/watch?v=-TelTxk8Twc"
                rel="noopener noreferrer"
                target="_blank"
              >
                short films
              </a>{" "}
              and
              <a
                href="https://www.youtube.com/watch?v=T64uPGd_sAE"
                rel="noopener noreferrer"
                target="_blank"
              >
                {" "}
                the like.{" "}
              </a>
              Please check out my website and say hello!
            </p>
            <hr />
            <p>
              React | Redux | JavaScript | Ruby on Rails | HTML/CSS | SQLite
            </p>

            <div className="social-links">
              <a
                href="https://www.linkedin.com/in/philip-smalls/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-linkedin-in"></i>
              </a>

              <a
                href="https://github.com/thenatural86"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-github"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UC16Y3fs7PjLaOdsSGhuW-5g"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-youtube"></i>
              </a>
              <a
                href="https://medium.com/@philip.smalls86"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i class="fab fa-medium"></i>
              </a>
            </div>
          </div>
        </Cell>
      </Grid>
    )
  }
}

export default LandingPage
