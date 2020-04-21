import React from "react"
import Project from "./Project"
import { Grid, Cell } from "react-mdl"
import Modal from "./Modal"

class Cards extends React.Component {
  state = {
    projects: [
      {
        id: "1",
        name: "My Stream",
        image:
          "https://user-images.githubusercontent.com/44248618/77825990-13c84300-70e3-11ea-9e2f-03ceaa0ad2b5.png",
        github: "https://github.com/thenatural86/streams-client",
        youtube: "https://www.youtube.com/watch?v=OQjETkiY9sQ",
        description:
          "My Stream is an interactive web application that allows a user to create, view, edit and delete their own live streaming video using Open Broadcaster Software. As a fan of websites that use live streaming technology such as twitch.tv and youtube.com, I have always wanted to implement this technology in my own projects and this is the result of that.",
        specs:
          "React, React Router, Redux, Redux Thunk, Redux Form, Google OAuth2 API, React Portals, React Refs, Axios, Semantic UI, Lodash, FLV Media Container, Real-Time Messaging Protocol (RTMP) server.",
      },
      {
        id: "2",
        name: "MarveLess",
        image:
          "https://user-images.githubusercontent.com/44248618/69985181-b6433180-1508-11ea-81b1-7c2c57a7e328.png",
        github: "https://github.com/thenatural86/marveless-frontend",
        youtube: "https://www.youtube.com/watch?v=nfm8Ygze1mk",
        description:
          "MarveLess is a interactive website that allows a user to learn more about their favorite Marvel characters and comics or perhaps discover new favorite. As a life long fan of the Marvel Comics and more recently a fan of the Marvel Cinematic Universe, when I learned that a Marvel API existed I jumped at the opportunity to build something that could demonstrate my love for the Marvel brand as well as be an app that others could use to learn more about the Marvel universe.",
        specs:
          "React, React Router, React Hooks, Ruby on Rails, CSS, Marvel API",
      },
      {
        id: "3",
        name: "PotterLess",
        image:
          "https://user-images.githubusercontent.com/47828048/67108339-4d903780-f19c-11e9-9842-930c2910fd1d.png",
        github: "https://github.com/thenatural86/Mod2PotterlessProject",
        youtube: "https://www.youtube.com/watch?v=9uXvGhemK-E&t=2s",
        description:
          "The Wizarding World (aka Warner Bros) have done an incredible job creating interactive platforms to keep Harry Potter fans satisfied for years now- whether it be the immersive amusement park in Universal Studios, the epic movie and book series, or their online presence... namely the Pottermore website. One visit to that website will have any users impressed by the amount of user interactivity it provides. This inspired the building of Potterless (the name implying it provides some Harry Potter fun but not any more than Pottermore) We wanted to put our newfound skills in Ruby on Rails to the test and create an engaging and themed experience that could (almost) rival or imitate what the Pottermore website does so successfully.",
        specs: "Ruby on Rails, HTML, CSS, and Bootstrap UI",
      },
      {
        id: "4",
        name: "Coming Soon ... Black Lightning 50/50",
        image:
          "https://cdn.dribbble.com/users/200315/screenshots/1196501/vincent1.jpg",
        github: "https://github.com/thenatural86",
        youtube: "https://www.youtube.com/watch?v=Dg4sBFBtLRE&t=205s",
        specs: "Context",
      },
    ],
    modal: false,
    modalCard: {},
  }

  // function to toggle modal state on/off
  toggleModalState = (project) => {
    // console.log(project)
    this.setState({ modal: !this.state.modal })
    this.setState({ modalCard: project })
  }

  // function to render individual cards
  renderCards = () => {
    return this.state.projects.map((project) => {
      return (
        <Project
          key={project.id}
          project={project}
          modal={this.toggleModalState}
        />
      )
    })
  }

  render() {
    return (
      <div className="content-grid">
        <Grid className="project-grid-style">
          <Cell col={8}>
            <div className={`modalBackground modalShowing-${this.state.modal}`}>
              <Modal
                modalCard={this.state.modalCard}
                modalState={this.state.modal}
                modal={this.toggleModalState}
              />
            </div>
            <div className="content">{this.renderCards()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Cards
