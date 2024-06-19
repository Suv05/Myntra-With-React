import React from "react";

function Spinner({}) {
  return (
    <>
      <center>
        <div
          className="spinner-border text-warning mt-5 mb-5"
          style={{ width: "3rem", height: "3rem" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </center>
    </>
  );
}

export default Spinner;
