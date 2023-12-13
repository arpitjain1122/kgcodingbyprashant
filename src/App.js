import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  // Parent - fooditems yahi define hoga === props (parent to child) one way data passing
  
  let fooditems = ["dal", "khana", "Green Vegetable"];

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>

      <ErrorMessage items={fooditems}></ErrorMessage>
      <FoodItems items={fooditems}></FoodItems>
    </React.Fragment>
  );
}

export default App;
