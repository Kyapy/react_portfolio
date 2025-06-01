import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import logo_python from "../assets/img/python.svg";
import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col, Card } from "react-bootstrap";

export const About = () => {

  const skills_programming = [
    {
      name: "Python",
      imgUrl: logo_python,
    }
  ]

  const skills_gameDevelopment = [

  ]

  const skills_designTool = [

  ]

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
              {/* Programming */}
              <Col md={4} className="mb-4">
                <div className="about-box">
                  <h4 className="text-center">Programming</h4>
                  <div className="image-grid">
                    <img src={logo_python} alt="Python" />
                    <img src={meter2} alt="C++" />
                    <img src={meter3} alt="C#" />
                    <img src={meter1} alt="Git" />
                  </div>
                </div>
              </Col>

          {/* Web Development */}
          <Col md={4} className="mb-4">
            <div className="about-box">
              <h4 className="text-center">Web Development</h4>
              <div className="image-grid">
                <img src={meter2} alt="HTML" />
                <img src={meter3} alt="CSS" />
                <img src={meter1} alt="JavaScript" />
                <img src={meter2} alt="React" />
              </div>
            </div>
          </Col>

          {/* Design Tools */}
          <Col md={4} className="mb-4">
            <div className="about-box">
              <h4 className="text-center">Design Tools</h4>
              <div className="image-grid">
                <img src={meter3} alt="Figma" />
                <img src={meter2} alt="Photoshop" />
                <img src={meter1} alt="GitHub" />
                <img src={meter3} alt="CLI" />
              </div>
            </div>
          </Col>
            </Row>
          </Col>
        </Row>
      </Container>
        {/* Experience Section */}
        <Container>
        <Row className="mb-5">
          <Col>
            <h3 className="text-center mb-4">Experience</h3>
            <ul>
              <li><strong>3D Generalist at Myriad Studios</strong> – Created digital doubles and 3D assets for film/TV.</li>
              <li><strong>Bus Driver (Part-time)</strong> – Demonstrated time management and communication.</li>
            </ul>
          </Col>
        </Row>
      </Container>
        {/* Education Section */}
        <Container>
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