import "./book-call.css";
import { Col, Row } from "react-bootstrap";
import MeetUsCard from "../meet-us-card/MeetUsCard";

function BookCall() {
  return (
    <div className="book-call">
      <Row>
        <Col lg={8} className="book-call-section">
          <h1>Book a call</h1>
          <p>
            Schedule a personalized consultation with our experienced team.
            Whether you have questions, need advice, or want to discuss your
            project, we're here to help.
          </p>
          <h6>Or shoot us a mail</h6>
          <hr />
          <button className="button button-gray copy-email-button">
            <span>hi@Movizi.studio</span>
            <span>
              <img src="/assets/icons/copy.svg" alt="copy-icon" />
            </span>
          </button>
        </Col>
        <Col lg={4} className="meet-us">
          <MeetUsCard />
        </Col>
      </Row>
    </div>
  );
}

export default BookCall;
