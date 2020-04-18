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
      },
      {
        id: "2",
        name: "MarveLess",
        image:
          "https://user-images.githubusercontent.com/44248618/69985181-b6433180-1508-11ea-81b1-7c2c57a7e328.png",
        github: "https://github.com/thenatural86/marveless-frontend",
        youtube: "https://www.youtube.com/watch?v=nfm8Ygze1mk",
      },
      {
        id: "3",
        name: "PotterLess",
        image:
          "https://user-images.githubusercontent.com/47828048/67108339-4d903780-f19c-11e9-9842-930c2910fd1d.png",
        github: "https://github.com/thenatural86/Mod2PotterlessProject",
        youtube: "https://www.youtube.com/watch?v=9uXvGhemK-E&t=2s",
      },
      {
        id: "4",
        name: "Coming Soon ... Black Lightning 50/50",
        image:
          "https://cdn.dribbble.com/users/200315/screenshots/1196501/vincent1.jpg",
        github: "https://github.com/thenatural86",
        youtube: "https://www.youtube.com/watch?v=Dg4sBFBtLRE&t=205s",
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
