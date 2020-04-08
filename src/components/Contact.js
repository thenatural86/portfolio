import React, { Component } from "react"
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl"

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Philip Smalls</h2>
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQHdyi5p85Tx1g/profile-displayphoto-shrink_200_200/0?e=1587600000&v=beta&t=ZdOMGXHFiJc9AK1BVn0bxSEnutkAEI0Vdd7FZE-Pwzs"
              alt="me"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.{" "}
            </p>
          </Cell>

          <Cell col={6}>
            <h2>Contact Me</h2>
            <hr />
            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i class="fas fa-phone-square" aria-hidden="true" />
                    (203) 247-8779
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i class="fas fa-envelope-open-text"></i>
                    philip.smalls86@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "30px", fontFamily: "Anton" }}
                  >
                    <i class="fas fa-phone-square" aria-hidden="true" />
                    (203) 247-8779
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Contact
