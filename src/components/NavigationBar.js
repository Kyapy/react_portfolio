import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/youtube.svg';
import navIcon3 from '../assets/img/github.svg';
import { NavLink } from "react-router-dom";

export const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar fixed="top" expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          William Park
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" className="navbar-link">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="navbar-link">About</Nav.Link>
            <Nav.Link as={NavLink} to="/portfolio" className="navbar-link">Portfolio</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/william-park-5454a01ba" target="_blank" rel="noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://www.youtube.com/@kyapy6727" target="_blank" rel="noreferrer"><img src={navIcon2} alt="YouTube" /></a>
              <a href="https://github.com/Kyapy" target="_blank" rel="noreferrer"><img src={navIcon3} alt="GitHub" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};