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

  //let fooditems = ["dal", "khana", "Green Vegetable"];

  //useState(["Salad", "dahi", "Green Vegetable"]);
  // let textStateArr = useState("Food item entered by user");  // ye array return krta hai jisme 2 elements hote hai
  // // pehle element hota hai curent value aapke state ki aur doosra ek method jisse app usko edit kr sakte hai.
  // // as below
  // let textToShow = textStateArr[0];
  // let setTextState = textStateArr[1];

  // destructuring lines 15 to 19 in one line as below
  //let [textToShow, setTextState] = useState();

  let [fooditems, setfooditem] = useState(["Salad", "dahi", "Green Vegetable"]);
  //console.log(`Current value of textState : ${textToShow}`)

  //let textToShow = "Food item entered by user"
  const onKeyDown = (event) => {
    if (event.key === "Enter") {
      let newFoodItem = event.target.value; // fetching value from input form
      event.target.value = "";
      let newItems = [...fooditems, newFoodItem]; // creating new array and adding the new value to this array
      setfooditem(newItems);
      console.log("Food item entered is : " + newFoodItem);
    }
  };

  return (
    <>
      <Container>
        <h1 className="food-heading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMessage items={fooditems}></ErrorMessage>
        <FoodItems items={fooditems}></FoodItems>
      </Container>
    </>
  );
}

export default App;
