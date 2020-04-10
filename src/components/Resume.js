import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid style={{ backgroundColor: "teal" }}>
          <Cell className="resume-col-bottom-left" col={6}>
            <div className="resume-col-bottom-left-header">
              <h3>Tech Skills</h3>
            </div>
            <div className="resume-col-bottom-left-skills">
              <h4>Frontend</h4>
              <li>React</li>
              <li>Redux</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap/React-MDL/Semantic UI</li>
            </div>
            <div className="resume-col-bottom-left-skills">
              <h4>Backend</h4>
              <li>Ruby on Rails</li>
            </div>
            <div className="resume-col-bottom-left-skills">
              <h4>Database</h4>
              <li>SOLite</li>
            </div>
            <div className="resume-col-bottom-left-skills">
              <h4>Version Control </h4>
              <li>Git</li>
            </div>
            <div className="resume-col-bottom-left-skills">
              <h4>Project Management</h4>
              <li>JIRA</li>
            </div>
          </Cell>
          {/*  */}
          <Cell className="resume-col-bottom-right" col={6}>
            <h2>Experience</h2>
            <li>Fullstack Software Engineer Graduate</li>
            <li>
              Adorama Rental Company, Quality Assurance Specialist, 06/2015 -
              06/2019 Successfully maintained 96%+ resolution rate for all
              client issues, consistently meeting and exceeding bi-weekly KPI
              targets. Problem solved by effectively troubleshooting equipment
              malfunctions and/or improper operation and maintained equipment
              failure records and inter department communication utilizing the
              Jira ticket system.
            </li>
            <li>
              National Geographic (StarTalk, Seasons 1 & 2), Audio Assistant,
              2015 Setup and breakdown of audio department for national
              televised science/education talk show. Handled on set and on air
              audio troubleshooting such as faulty microphone, malfunctioning
              earpiece or unresponsive recording device.
            </li>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume
