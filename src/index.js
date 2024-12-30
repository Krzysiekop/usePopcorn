import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating
      maxRating={5}
      size="48"
      messages={["Teribble", "Bad", "Okey", "Good", "Amazing"]}
      defaultRating={3}
    ></StarRating>
    <StarRating maxRating={10}></StarRating>
    <StarRating></StarRating>
    <Test></Test> */}
  </React.StrictMode>
);

export default function Test() {
  const [rating, setMovieRating] = useState(0);
  return (
    <>
      {" "}
      <StarRating
        color="blue"
        maxRating={5}
        onSetRating={setMovieRating}
      ></StarRating>
      <p>You choose {rating} rating</p>
    </>
  );
}
