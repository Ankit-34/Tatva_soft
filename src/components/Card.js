import React,{useContext, useState} from "react";
import "../style/Card.css";
import {User} from '../index';

const Card = ({book}) => {

    const user = useContext(User);
    const [qnt, setQnt] = useState(book.qnt | 1);

    const addToCart = (e) => {
        e.preventDefault();

        user.items.push({
            item_id : book.id,
            image : book.baseimage,
            name : book.name,
            price : book.price,
            qnt : qnt,
            total_price : book.price
            // setQnt : (val) => {setQnt(val)}
        })

        console.log("Updated context : " , user);
    }

  return (
    <>
      <div className="card">
        <img src={book.baseimage} alt="pic"></img>
        <div className="data">
          <p className="name">{book.name}</p>
          <p className="category">{book.category}</p>
          <p className="description">{book.description}</p>
          <p className="price">Price : {book.price}</p>
          <button className="addtocart" onClick={addToCart}>
            Add to cart
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
