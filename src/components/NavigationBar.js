import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/youtube.svg';
import navIcon3 from '../assets/img/github.svg';
import { BrowserRouter as Router } from "react-router-dom";

export const NavigationBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar fixed="top" expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#home">
            <a>William Park</a>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} 
              onClick={() => onUpdateActiveLink('project')}>Portfolio</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/william-park-5454a01ba" 
                target="_blank" rel="noreferrer"><img src={navIcon1} alt="" /></a>
                <a href="https://www.youtube.com/@kyapy6727" 
                target="_blank" rel="noreferrer"><img src={navIcon2} alt="" /></a>
                <a href="https://github.com/Kyapy" 
                target="_blank" rel="noreferrer"><img src={navIcon3} alt="" /></a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
};
