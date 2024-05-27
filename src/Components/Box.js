import React from "react";

function Box(props) {
  return (
    <>
      <div className="boxes" >
        <img
          src={props.image}
          alt="error"
          className="pdf-images"
        />
        <p className="pdf-para">{props.description}
        </p>
        <div className="pdf-button-outer">
          <button type="button" className="btn-pdf" >
          <a href={props.pdf} className="download-btn-anchor" target="_blank">Download</a>
          </button>
        </div>
      </div>
    </>
  );
}

export default Box;

