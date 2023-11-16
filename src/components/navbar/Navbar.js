import "./navbar.css";
import { NavLink } from "react-router-dom";
import { Col, Row } from "react-bootstrap";

function Navbar() {
  return (
    <nav className="navigation">
      <Row className="align-items-center">
        <Col
          lg={4}
          className="nav-brand d-flex align-items-center justify-content-start"
        >
          <img src="/Logo.svg" className="brand-logo" alt="brand-logo" />
          <h1 className="brand-name">Movizi</h1>
        </Col>
        <Col
          lg={8}
          className="nav-links d-flex align-items-center justify-content-end"
        >
          <NavLink to="/" className="nav-link">
            Home
          </NavLink>
          <NavLink to="/projects" className="nav-link">
            Projects
          </NavLink>
          <NavLink to="/process" className="nav-link">
            Process
          </NavLink>
          <NavLink to="/insights" className="nav-link">
            Insights
          </NavLink>
          <button className="button contact-us-button">Contact Us</button>
        </Col>
      </Row>
    </nav>
  );
}

export default Navbar;
