import { useState } from "react";

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

function Test() {
  // const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      {/* <StarRating color="blue" maxRating={10} onSetRating={setMovieRating} /> */}
      {/* <p>This movie was rated {movieRating} stars</p> */}
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
    /> */}
    {/* <StarRating maxRating={10} />
    
    <StarRating /> */}
    {/* <StarRating size={24} color="red" className="test" defaultRating={2} /> */}
    <Test />
    {/* <StarRating size={34} color="green" />
    <StarRating size={55} color="deeppink" /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
