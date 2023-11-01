import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  // create a state variable for the selected category set to All
  const [selectedCategory, setSelectedCategory] = useState("All");

  // define a function to handle changes to te select element
  function handleFilter(e) {
    setSelectedCategory(e.target.value);
  }

  // filter the items based on the selected category
  const itemToDisplay = items.filter((item) => {
    if (selectedCategory === "All" || item.category === selectedCategory)
      return true;
  });

  return (
    <div className="ShoppingList">
      <div className="Filter">
        {/* When the value of the select element changes, call handleFilter */}
        <select name="filter" onChange={handleFilter}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* Map over the filtered items instead of all items */}
        {itemToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
