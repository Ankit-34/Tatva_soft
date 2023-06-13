import React from "react";
import "../style/Home.css";
import coverImg from "../assets/cover-img.jpg";
import Header from "./Header";
import Footer from './Footer'
import { useState } from "react";
import books from "../assets/Books";
import Card from "./Card";

// const User = createContext();
// const user = {
//     email : "ankit@gmail.com",
//     username : "Ankit-34",
//     password : "123456",
//     items : [], // item_id, name, image, price, qnt, inc(), dec()
//     grand_price : 0 
// };


const Home = () => {

  // const [cartCount, setCartCount] = useState(0);

  return (
    <div>
      {/* <User.Provider value={user}> */}
        <Header />

        <div className="container">
          <div className="left_part">
            <div style={{ width: "90%" }}>
              <p className="tagline">
                Find Your Best Friend..
                <button>Explore Now</button>
              </p>
            </div>
          </div>
          <div className="right_part">
            <img src={coverImg} alt="cover_image" />
          </div>
        </div>

        <div className="cards">
          {books.map((book) => {
            return (
              <Card
                book={book}
              />
            );
          })}
        </div>
        <Footer />
    {/* </User.Provider> */}
    </div>
  );
};

export default Home;

