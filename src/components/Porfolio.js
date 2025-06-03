import { useState, useEffect } from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { Github_items } from "./github_items";
import { Youtube_items } from "./youtube_items";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Portfolio = () => {

  const [searchTerm, setSearchTerm] = useState(""); // Search function variables

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Here are projects I have worked on.</p>
                {/* Tab selection */}
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Github</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Live2D</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  {/* Search bar */}
                  <input
                    className="form-control search-bar"
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                  {/* Tab Content */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    {/* All tab */}
                    <Tab.Pane eventKey="first">
                      <Row>
                        <Github_items searchTerm={searchTerm}/>
                        <Youtube_items searchTerm={searchTerm}/>
                      </Row>
                    </Tab.Pane>
                    {/* Github tab */}
                    <Tab.Pane eventKey="second">
                       <Row>
                        <Github_items searchTerm={searchTerm}/>
                      </Row>
                    </Tab.Pane>
                    {/* Youtube tab */}
                    <Tab.Pane eventKey="third">
                      <Row>
                        <Youtube_items searchTerm={searchTerm}/>
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}