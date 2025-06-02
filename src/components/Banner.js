import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

// Banner component
export const Banner = () => {

  // Dynamic banner feature, change text every certain interval  
  const [loopNum, setLoopNum] = useState(0); // Track next word
  const [isDeleting, setIsDeleting] = useState(false); // Is removing or adding the string?
  const [text, setText] = useState(''); // Current string
  const [delta, setDelta] = useState(300 - Math.random() * 100); // Typing speed
  const [index, setIndex] = useState(1); // String variable pointer
  const toRotate = [ "Game Developer", "Web Designer", "3D Artist" ]; // Rotate strings
  const period = 2000;

  // Tick for text change
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) }; // Reset tick
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  // Render
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hello! I am William,`}</h1>
                <h2>{`I am a `} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Game Developer", "Web Designer", "3D Artist" ]'><span className="wrap">{text}</span></span></h2>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}