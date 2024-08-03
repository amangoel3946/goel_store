import React from "react";

export default function Footer(props) {
  return (
    <div className="row fixed-bottom">
      <button
        className="btn btn-danger col-2"
        onClick={() => {
          props.resetValues();
        }}
      >
        RESET
      </button>
      <div className="col-8 bg-dark text-center text-white">
        <h4>
          {"Total Amount : "}
          {props.totalAmount}
        </h4>
      </div>
      <button className="btn btn-primary col-2">PAY NOW</button>
    </div>
  );
}
