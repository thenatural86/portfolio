import React from "react"
import { Card, CardTitle, CardText, CardActions } from "react-mdl"

const Project = ({ project, modal }) => {
  // console.log(project)
  return (
    <Card
      className="card"
      shadow={5}
      style={{
        minWidth: "450",
        margin: "auto",
        borderRadius: "15px",
      }}
    >
      <CardText
        className="card-text"
        style={{
          fontWeight: "bold",
          color: "black",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {project.name}
      </CardText>
      <CardTitle
        onClick={() => modal(project)}
        className="card-body"
        style={{
          margin: "10px",
          background: `url(${project.image}) center/ cover`,
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
          href={project.github}
          alt="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <button onClick={() => modal(project)}>Description</button>
        <a
          href={project.youtube}
          alt="youtube"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-youtube"></i>
        </a>
      </CardActions>
    </Card>
  )
}

export default Project
