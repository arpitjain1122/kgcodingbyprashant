import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./App.css";

function App() {
  //let fooditems = ["dal","khana","Green Vegetable"];
  let fooditems = [];

  return (
    <React.Fragment>
      <h1>Healthy Food</h1>

      {fooditems.length === 0 ? <h3>I am still hungry</h3> : null}

      <ul className="list-group">
        {fooditems.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </React.Fragment>
  );
}

export default App;
