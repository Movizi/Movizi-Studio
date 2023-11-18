import "./loader.css";

function Loader({ fadeOut }) {
  return (
    <div className={`loader-container ${fadeOut ? "animate__fadeOut" : ""}`}>
      <div className="loader">
        <div className={`${fadeOut ? "animate__slideOutDown" : ""}`}>
          <div>
            <div className="loader-shape loader-shape-1"></div>
          </div>
          <div>
            <div className="loader-shape loader-shape-2"></div>
          </div>
          <div>
            <div className="loader-shape loader-shape-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
