import "./meet-us-card.css";

function MeetUsCard() {
  return (
    <div className="meet-card d-flex flex-column align-items-center">
      <img className="meet-card-image" src="/Logo.svg" alt="brand-logo" />
      <div className="meet-card-body d-flex flex-column align-items-center">
        <h3 className="meet-card-title">Meet Us</h3>
        <p className="meet-card-text">Client Partner</p>
        <button className="button button-blue schedule-call-button">
          Schedule a call
        </button>
        <p className="meet-card-text">It take less than 1 minute</p>
      </div>
    </div>
  );
}

export default MeetUsCard;
