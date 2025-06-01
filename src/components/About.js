import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col } from "react-bootstrap";
import { Card } from "react-bootstrap";

export const About = () => {
  return (
<section className="about" id="about">
      <Container>
        <Row className="mb-5">
          <Col>
            <h2 className="text-center">About Me</h2>
            <p className="text-center">
              A brief summary about your background, interests, and goals.
              This is your opportunity to make a strong first impression.
            </p>
          </Col>
        </Row>

        {/* Skills Section */}
        <Row className="mb-5">
          <Col>
            <h3 className="text-center mb-4">Skills</h3>
            <Row className="g-4 text-center">
              <Col md={4}>
                <Card className="h-100">
                  <Card.Img variant="top" src={meter1} />
                  <Card.Body>
                    <Card.Title>Web Development</Card.Title>
                    <Card.Text>React, HTML, CSS, JavaScript</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100">
                  <Card.Img variant="top" src={meter2} />
                  <Card.Body>
                    <Card.Title>Brand Identity</Card.Title>
                    <Card.Text>UI/UX, Branding, Design Systems</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4}>
                <Card className="h-100">
                  <Card.Img variant="top" src={meter3} />
                  <Card.Body>
                    <Card.Title>3D Art & Design</Card.Title>
                    <Card.Text>Blender, SpeedTree, Unity</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>

        {/* Experience Section */}
        <Row className="mb-5">
          <Col>
            <h3 className="text-center mb-4">Experience</h3>
            <ul>
              <li><strong>3D Generalist at Myriad Studios</strong> – Created digital doubles and 3D assets for film/TV.</li>
              <li><strong>Bus Driver (Part-time)</strong> – Demonstrated time management and communication.</li>
            </ul>
          </Col>
        </Row>

        {/* Education Section */}
        <Row>
          <Col>
            <h3 className="text-center mb-4">Qualifications</h3>
            <ul>
              <li>Graduate Diploma in Computer Science (in progress)</li>
              <li>Bachelor of Fine Arts (Animation)</li>
            </ul>
          </Col>
        </Row>
      </Container>

      <img className="background-image-left" src={colorSharp} alt="Background decoration" />
    </section>
  )
}