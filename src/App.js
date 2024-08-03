import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar";
import ProductList from "./components/ProductList";
import Footer from "./components/footer";
import AddItem from "./components/addItem";

function App() {
  const products = [
    {
      price: 99999,
      name: "macbook air m1",
      quantity: 0,
    },
    {
      price: 49999,
      name: "hp pavillion",
      quantity: 0,
    },
  ];

  const [productList, setProductlist] = useState(products);
  const [totalAmount, setTotalAmount] = useState(0);

  let incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductlist(newProductList);
    let newTotal = totalAmount;
    newTotal += newProductList[index].price;
    setTotalAmount(newTotal);
  };

  let decrementQuantity = (index) => {
    let newList = [...productList];
    let newTotal = totalAmount;
    if (newList[index].quantity > 0) {
      newList[index].quantity--;
      newTotal -= newList[index].price;
    }
    setProductlist(newList);
    setTotalAmount(newTotal);
  };

  let resetValues = () => {
    let newList = [...productList];
    let i,
      n = newList.length;
    for (i = 0; i < n; i++) {
      newList[i].quantity = 0;
    }
    setProductlist(newList);
    setTotalAmount(0);
  };

  let removeItem = (index) => {
    let newList = [...productList];
    setTotalAmount(
      totalAmount - newList[index].price * newList[index].quantity
    );
    newList.splice(index, 1);
    setProductlist(newList);
  };

  let addProduct = (name,price) => {
    let newList = [...productList];
    newList.push({
      price: Number(price),
      name: name,
      quantity: 0,
    })
    setProductlist(newList);
  }

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <AddItem addProduct={addProduct}/>
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />
      </main>
      <Footer totalAmount={totalAmount} resetValues={resetValues} />
    </>
  );
}

export default App;
