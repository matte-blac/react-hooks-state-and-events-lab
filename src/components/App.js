import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // create a state variable for dark mode set to false
  const [darkMode, setDarkMode] = useState(false);

  //define a function to toggle dark mode on and off
  const handleDarkMode = () => {
    setDarkMode(!darkMode); // toggle the value of darkMode
  };

  // determine the className based on whether dark mode is enabled or not
  const appClass = darkMode ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkMode}>
          {/* change the button text based on whether dark mode is enabled or not */}
          {darkMode ? "Dark Mode" : "Light Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
