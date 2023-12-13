import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";
import FoodItems from "./components/FoodItems";
import ErrorMessage from "./components/ErrorMessage";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  // Parent - fooditems yahi define hoga === props (parent to child) one way data passing

  let fooditems = ["dal", "khana", "Green Vegetable"];

  // let textStateArr = useState("Food item entered by user");  // ye array return krta hai jisme 2 elements hote hai 
  // // pehle element hota hai curent value aapke state ki aur doosra ek method jisse app usko edit kr sakte hai.
  // // as below
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // destructuring lines 15 to 19 in one line as below
  let [textToShow, setTextState ] = useState("Food item entered by user");
  console.log(`Current value of textState : ${textToShow}`)

  //let textToShow = "Food item entered by user"
  const handleOnChange = (event) => {
    console.log(event.target.value);
    setTextState(event.target.value);
  };

  return (
    <>
    <Container>
      <h1 className="food-heading">Healthy Food</h1>
      <ErrorMessage items={fooditems}></ErrorMessage>
      <FoodInput handleOnChange={handleOnChange}></FoodInput>
      <p>{textToShow}</p>
      <FoodItems items={fooditems}></FoodItems>
    </Container>
    </>
  );
}

export default App;
