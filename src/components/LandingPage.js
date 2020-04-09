import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"

class LandingPage extends Component {
  render() {
    return (
      <div style={{ width: "100%", margin: "auto" }}>
        <Grid className="landing-grid">
          <Cell className="image-container" col={6}>
            <img
              src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/92849555_10156672183300981_4992975803168849920_n.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=4i_UsFCwLcgAX-Mi2Lg&_nc_ht=scontent-lga3-1.xx&oh=5d7cc990ac7f6ed7044ceeb5ca61d98e&oe=5EB69FA7"
              alt="avatar"
              className="avatar-image"
            />
          </Cell>
          <Cell className="banner-text" col={6}>
            <div>
              <h1>Hello there,</h1>
              <h3>My name is Philip and I'm a Web Developer</h3>
              <p>
                Besides coding, I enjoy cooking, playing the guitar and being in
                nature. That's a picture of me and my Grams, she's the best. I
                also enjoy getting together with friends and making{" "}
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
                  the like.
                </a>
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
      </div>
    )
  }
}

export default LandingPage
