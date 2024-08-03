import React from "react";

export default function Product(props) {
  // console.log(props);
  return (
    <>
      <div className="row">
        <div className="col-5">
          <h2>
            {props.product.name}{" "}
            <span className="badge text-bg-secondary">
              {"₹ "}
              {props.product.price}
            </span>
          </h2>
        </div>
        <div className="col-2">
          <div
            class="btn-group"
            role="group"
            aria-label="Basic mixed styles example"
          >
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                props.decrementQuantity(props.index);
              }}
            >
              -
            </button>
            <button type="button" className="btn btn-danger">
              {props.product.quantity}
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                props.incrementQuantity(props.index);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="col-2">
          <h4>
            {"₹ "}
            {props.product.price * props.product.quantity}
          </h4>
        </div>
        <div className="col-3">
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => {
              props.removeItem(props.index);
            }}
          >
            {"REMOVE"}
          </button>
        </div>
      </div>
    </>
  );
}
