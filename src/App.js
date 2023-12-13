import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";

function App() {
  // Parent - fooditems yahi define hoga === props (parent to child) one way data passing

  let fooditems = ["dal", "khana", "Green Vegetable"];

  return (
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={fooditems}></ErrorMessage>
      <FoodItems items={fooditems}></FoodItems>
    </Container>
  );
}

export default App;
