import React from "react";
import Product from "./product";

export default function ProductList(props) {
  //   console.log(props);
  if (props.productList.length > 0) {
    return props.productList.map((product, i) => {
      return (
        <Product
          product={product}
          key={i}
          incrementQuantity={props.incrementQuantity}
          decrementQuantity={props.decrementQuantity}
          removeItem={props.removeItem}
          index={i}
        />
      );
    });
  } else {
    return (
      <div className="row" mt-5>
        <h1>The cart is empty</h1>
      </div>
    );
  }
}
