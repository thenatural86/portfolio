import React from "react"
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton,
} from "react-mdl"

class Projects extends React.Component {
  state = { activeTab: 0 }

  TabToggle = () => {
    switch (this.state.activeTab) {
      case 0:
        return (
          <Card shadow={5} style={{ minWidth: "450", margin: "auto" }}>
            <CardTitle
              style={{
                color: "fff",
                height: "176px",
                background:
                  "url(https://cdn.dribbble.com/users/200315/screenshots/1196501/vincent1.jpg) center/ cover",
              }}
            >
              React Project #1
            </CardTitle>
            <CardText>Im the card text</CardText>
            <CardActions border>
              <Button>GitHub</Button>
              <Button>CodePen</Button>
              <Button>Live Demo</Button>
            </CardActions>
            <CardMenu style={{ color: "fff" }}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        )
      case 1:
        return (
          <div>
            <h1>This is React/Redux</h1>
          </div>
        )
      case 2:
        return (
          <div>
            <h1>This is Ruby on Rails</h1>
          </div>
        )
      case 3:
        return (
          <div>
            <h1>This is Vanilla JavaScript, mmmm...</h1>
          </div>
        )
      default:
        break
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs
          activeTab={this.state.activeTab}
          onChange={(tabId) => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>React</Tab>
          <Tab>React/Redux</Tab>
          <Tab>Ruby On Rails</Tab>
          <Tab>JavaScript</Tab>
        </Tabs>
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={12}>
              <div className="content">{this.TabToggle()}</div>
            </Cell>
          </Grid>
        </section>
      </div>
    )
  }
}

export default Projects
