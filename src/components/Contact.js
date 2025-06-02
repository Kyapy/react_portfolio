import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/youtube.svg';
import navIcon3 from '../assets/img/github.svg';

export const Contact = () => {
  return (
    <contact className="contact" id="contact">
      <Container className="text-center">
        <h2>FIND ME ON</h2>
        <p>
          Feel free to <span className="highlight">connect</span> with me
        </p>
        <div className="social-icons">
            <a href="https://www.linkedin.com/in/william-park-5454a01ba" 
            target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
            <a href="https://www.youtube.com/@kyapy6727" 
            target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
            <a href="https://github.com/Kyapy"
            target="_blank" rel="noreferrer"><img src={navIcon3} alt="" /></a>
        </div>
        <p>
          Or Email Me on
        </p>
        <p>
         <span className="highlight">williampark9916@gmail.com</span> 
        </p>
      </Container>
    </contact>
  )
}