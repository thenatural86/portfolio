import React from "react"
import { Grid, Cell, Card, CardTitle, CardText, CardActions } from "react-mdl"

class Projects extends React.Component {
  renderCards = () => {
    return (
      <div className="projects-grid">
        <Card
          shadow={5}
          style={{
            minWidth: "450",
            margin: "auto",
            borderRadius: "15px",
          }}
        >
          <CardText
            style={{
              fontWeight: "bold",
              color: "black",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#B2FEFA",
            }}
          >
            My Stream
          </CardText>
          <CardTitle
            className="card-body"
            style={{
              margin: "10px",
              background:
                "url(https://user-images.githubusercontent.com/44248618/77825990-13c84300-70e3-11ea-9e2f-03ceaa0ad2b5.png) center/ cover",
            }}
          ></CardTitle>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
            border
          >
            <a
              href="https://github.com/thenatural86/streams-client"
              alt="github"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.youtube.com/watch?v=OQjETkiY9sQ"
              alt="youtube"
              target="_blank"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </CardActions>
        </Card>

        <Card
          shadow={5}
          style={{ minWidth: "450", margin: "auto", borderRadius: "15px" }}
        >
          <CardText
            style={{
              fontWeight: "bold",
              color: "black",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#B2FEFA",
            }}
          >
            MarveLess
          </CardText>
          <CardTitle
            className="card-body"
            style={{
              margin: "10px",
              background:
                "url(https://user-images.githubusercontent.com/44248618/69985181-b6433180-1508-11ea-81b1-7c2c57a7e328.png) center/ cover",
            }}
          ></CardTitle>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
            border
          >
            <a
              href="https://github.com/thenatural86/marveless-frontend"
              alt="github"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.youtube.com/watch?v=nfm8Ygze1mk"
              alt="youtube"
              target="_blank"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </CardActions>
        </Card>

        <Card
          shadow={5}
          style={{ minWidth: "450", margin: "auto", borderRadius: "15px" }}
        >
          <CardText
            style={{
              fontWeight: "bold",
              color: "black",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#B2FEFA",
            }}
          >
            PotterLess
          </CardText>
          <CardTitle
            className="card-body"
            style={{
              margin: "10px",
              background:
                "url(https://user-images.githubusercontent.com/47828048/67108339-4d903780-f19c-11e9-9842-930c2910fd1d.png) center/ cover",
            }}
          ></CardTitle>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
            border
          >
            <a
              href="https://github.com/thenatural86/Mod2PotterlessProject"
              alt="github"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.youtube.com/watch?v=9uXvGhemK-E&t=2s"
              alt="youtube"
              target="_blank"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </CardActions>
        </Card>

        <Card
          shadow={5}
          style={{ minWidth: "450", margin: "auto", borderRadius: "15px" }}
        >
          <CardText
            style={{
              fontWeight: "bold",
              color: "black",
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#B2FEFA",
            }}
          >
            Coming Soon ... Black Lightning 50/50{" "}
          </CardText>
          <CardTitle
            className="card-body"
            style={{
              margin: "10px",
              background:
                "url(https://cdn.dribbble.com/users/200315/screenshots/1196501/vincent1.jpg) center/ cover",
            }}
          ></CardTitle>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "space-evenly",
            }}
            border
          >
            <a
              href="https://github.com/thenatural86"
              alt="github"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.youtube.com/watch?v=Dg4sBFBtLRE&t=205s"
              alt="youtube"
              target="_blank"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </CardActions>
        </Card>
      </div>
    )
  }

  render() {
    return (
      <div className="content-grid">
        <Grid className="project-grid-style">
          <Cell col={8}>
            <div className="content">{this.renderCards()}</div>
          </Cell>
        </Grid>
      </div>
    )
  }
}
export default Projects
