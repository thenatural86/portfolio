import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <h2>Contact Me</h2>
            <img
              className="contact-image"
              src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/92849555_10156672183300981_4992975803168849920_n.jpg?_nc_cat=111&_nc_sid=8024bb&_nc_ohc=4i_UsFCwLcgAX-Mi2Lg&_nc_ht=scontent-lga3-1.xx&oh=5d7cc990ac7f6ed7044ceeb5ca61d98e&oe=5EB69FA7"
              alt="me"
              style={{ borderRadius: "15px" }}
            />
          </Cell>
          <Cell col={12}>
            <hr />
            <div className="contact-list">
              <a
                href="https://www.linkedin.com/in/philip-smalls/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                href="https://github.com/thenatural86"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://www.youtube.com/channel/UC16Y3fs7PjLaOdsSGhuW-5g"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-youtube"></i>
              </a>
              <a
                href="https://medium.com/@philip.smalls86"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-medium"></i>
              </a>
              <a
                href="https://www.instagram.com/ninjajesse/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-instagram-square"></i>
              </a>
              <a
                href="https://www.facebook.com/philip.smalls"
                rel="noopener noreferrer"
                target="_blank"
              >
                <i className="fab fa-facebook-square"></i>
              </a>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact
