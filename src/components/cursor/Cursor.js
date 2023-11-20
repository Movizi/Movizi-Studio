import "./cursor.css";

function Cursor({ cursor }) {
  return (
    <div
      className="cursor d-flex justify-content-center align-items-center"
      ref={cursor}
    >
      <img src="/assets/icons/arrow.svg" alt="arrow-icon" />
    </div>
  );
}

export default Cursor;
