import React, { useState } from "react";
import "../style/Cartbook.css";

const Cartbook = ({ book, setGrandPrice }) => {
  const [qnt, setQnt] = useState(book.qnt);

  return (
    <>
      
      <div className="cb">
        <img src={book.image} alt="img" />
        <div className="cb_name"> {book.name} </div>
        <div className="cb_price"> {book.price} /-</div>
        <div className="adjust">
          <button
            onClick={() => {
              setQnt((prev) => prev + 1);
              book.qnt = book.qnt + 1;
              book.total_price = (qnt + 1) * book.price;
              setGrandPrice((prev) => prev + book.price);
            }}
          >
            +
          </button>
          <p>{qnt}</p>
          <button
            onClick={() => {
              setQnt((prev) => prev - 1);
              book.qnt = book.qnt - 1;
              book.total_price = qnt * book.price - book.price;
              setGrandPrice((prev) => prev - book.price);
            }}
          >
            -
          </button>
        </div>
      </div>
    </>
  );
};

export default Cartbook;
