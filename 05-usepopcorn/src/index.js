import React from "react";
import ReactDOM from "react-dom/client";
// import RatingStar from "./Star";
import "./index.css";
import App from "./App";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <RatingStar maxLength={10} color="#f1a1b1" onSet={setMovieRating} />
//       <p>This movie was rated {movieRating} rating</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <RatingStar
      maxLength={5}
      messages={["Teribble", "Bad", "Okay", "Good", "Amazing"]}
      defaultRating={3}
    />
    <Test /> */}
    <App />
  </React.StrictMode>
);
