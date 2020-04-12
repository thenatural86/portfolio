import React, { Component } from "react"
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl"

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={12}>
            <h2>Contact Me</h2>{" "}
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
              <button>Email</button>
              <button>Linkin</button>
              <button>Facebook</button>
              <button>Gitbhub</button>
              <button>Twitter</button>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact
