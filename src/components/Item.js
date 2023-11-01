import React, { useState } from "react";

function Item({ name, category }) {
  // create a state variable for inCart set to false
  const [inCart, setInCart] = useState(false);

  // define a function to add and remove inCart
  function handleInCart() {
    setInCart(!inCart); //toggle the value of inCart
  }

  const cartClass = inCart ? "in-cart" : "";

  return (
    <li className={cartClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartClass} onClick={handleInCart}>
        {inCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
