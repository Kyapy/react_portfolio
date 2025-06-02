// Logo images 
import logo_CSharp from "../assets/img/CSharp.svg"
import logo_CPlusPlus from "../assets/img/CPlusPlus.svg"
import logo_python from "../assets/img/Python.svg";
import logo_react from "../assets/img/React.svg"
import logo_JS from "../assets/img/JS.svg";
import logo_HTML from "../assets/img/HTML.svg";
import logo_CSS from "../assets/img/CSS.svg";

import logo_Unity from "../assets/img/Unity.svg";
import logo_UE from "../assets/img/unreal-engine.png";

import logo_Blender from "../assets/img/Blender.svg";
import logo_Maya from "../assets/img/Maya.svg";
import logo_SP from "../assets/img/Substance_3D_Painter.svg";
import logo_Cubism from "../assets/img/Live2DCubism.png";

import colorSharp from "../assets/img/color-sharp.png";
import { Container, Row, Col, Card } from "react-bootstrap";

export const About = () => {

  // Logo for programming langauges
  const skills_programming = [

    {
      name: "CSharp",
      imgUrl: logo_CSharp,
    },

    {
      name: "CSPlusPlus",
      imgUrl: logo_CPlusPlus,
    },

    {
      name: "Python",
      imgUrl: logo_python,
    },

    {
      name: "React",
      imgUrl: logo_react,
    },

    {
      name: "JS",
      imgUrl: logo_JS,
    },

        {
      name: "HTML",
      imgUrl: logo_HTML,
    },

        {
      name: "CSS",
      imgUrl: logo_CSS,
    },
  ]

  // Logo for game development
  const skills_gameDevelopment = [

    {
      name: "Unreal Engine",
      imgUrl: logo_UE,
    },

    {
      name: "Unity",
      imgUrl: logo_Unity,
    },


  ]

  // Logo for 2D/3D art programs
  const skills_designTool = [

    {
      name: "Blender",
      imgUrl: logo_Blender,
    },

    {
      name: "Maya",
      imgUrl: logo_Maya,
    },

    {
      name: "Substance 3D Painter",
      imgUrl: logo_SP,
    },

    {
      name: "Live2D Cubism",
      imgUrl: logo_Cubism,
    },
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
                    {
                      skills_programming.map (logos => (
                      < div >
                      <img src={logos.imgUrl} />
                      </div>
                      ))
                    }
                  </div>
                </div>
              </Col>

          {/* Game Development */}
          <Col md={4} className="mb-4">
            <div className="about-box">
              <h4 className="text-center">Game Development</h4>
              <div className="image-grid">
                {
                  skills_gameDevelopment.map (logos => (
                  < div >
                  <img src={logos.imgUrl} />
                  </div>
                  ))
                }
              </div>
            </div>
          </Col>

          {/* Design Tools */}
          <Col md={4} className="mb-4">
            <div className="about-box">
              <h4 className="text-center">Design Tools</h4>
              <div className="image-grid">
                {
                  skills_designTool.map (logos => (
                  < div >
                  <img src={logos.imgUrl} />
                  </div>
                  ))
                }
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