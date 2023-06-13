import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./style/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const User = createContext();
const user = {
  email: "ankit@gmail.com",
  username: "Ankit-34",
  password: "123456",
  items: [], // item_id, name, image, price, qnt, inc(), dec()
  grand_price: 0,
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <User.Provider value={user}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </User.Provider>
);
export {User};


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
