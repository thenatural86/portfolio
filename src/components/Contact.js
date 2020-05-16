import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"
import us from "./images/us.jpg"

class Contact extends Component {
  render() {
    return (
      <div style={{ fontFamily: "Raleway" }} className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <h2>Contact Me</h2>
            <img
              className="contact-image"
              src={us}
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
