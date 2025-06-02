import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/youtube.svg';
import navIcon3 from '../assets/img/github.svg';

export const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/william-park-5454a01ba" 
                target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://www.youtube.com/@kyapy6727" 
                target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
                <a href="https://github.com/Kyapy" 
                target="_blank" rel="noreferrer"><img src={navIcon3} alt="" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
