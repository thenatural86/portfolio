import React from "react"
import { Card, CardTitle, CardText, CardActions } from "react-mdl"

const Project = (props) => {
  console.log(props)
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
        {props.name}
      </CardText>
      <CardTitle
        className="card-body"
        style={{
          margin: "10px",
          background: `url(${props.image}) center/ cover`,
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
          href={props.github}
          alt="github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </a>
        <button onClick={props.modal}>Description</button>
        <a
          href={props.youtube}
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
