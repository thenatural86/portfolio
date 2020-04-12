import React, { Component } from "react"
import { Grid, Cell } from "react-mdl"

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid className="resume-grid">
          <Cell className="resume-col-bottom-left" col={6}>
            <div
              style={{ marginBottom: "1em" }}
              className="resume-col-bottom-left-header"
            >
              <h3>Tech Skills</h3>
            </div>
            <div className="resume-col-bottom-left-skills">
              <h5>Frontend</h5>
              <li>React</li>
              <li>Redux</li>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Bootstrap/React-MDL/Semantic UI</li>
            </div>
            <div className="resume-col-bottom-left-skills">
              <h5>Backend</h5>
              <li>Ruby on Rails</li>
              <h5>Database</h5>
              <li>SQLite</li>
              <h5>Version Control </h5>
              <li>Git</li>
              <li>GitHub</li>
              <h5>Project Management</h5>
              <li>JIRA</li>
            </div>
          </Cell>
          <Cell className="resume-col-bottom-right" col={6}>
            <div className="resume-col-bottom-right-header">
              <h3>Experience</h3>
            </div>
            <div className="resume-col-bottom-right-experience">
              <h5>Flatiron School</h5>
              <p>Fullstack Software Engineer Graduate, 2019</p>
              <li>
                Attained proficiency and understanding of Fullstack technologies
                through education and implementation.
              </li>
              <li>
                Application of Agile Methodology through pair programming and
                building web applications end to end.
              </li>
              <li>Gained Computer Science fundamentals.</li>
              <h5>Adorama Rental Company</h5>
              <p>Quality Assurance Specialist, 06/2015 - 06/2019 </p>
              <p>
                <li>
                  Successfully maintained 96%+ resolution rate for all client
                  issues
                </li>
                <li>Consistently met and exceeded bi-weekly KPI targets.</li>
                <li>
                  Problem solved by effectively troubleshooting equipment
                  malfunctions
                </li>
                <li>
                  maintained equipment records and inter department
                  communication via Jira software
                </li>
              </p>
              <h5>National Geographic (StarTalk, Seasons 1 & 2)</h5>
              <p>Audio Assistant, 2015</p>
              <p>
                <li>
                  Setup and breakdown of audio department for national televised
                  science/education talk show.
                </li>
                <li>Handled on location audio troubleshooting</li>
              </p>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume
