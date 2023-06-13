import React, {useContext, useState}  from 'react'
// import books from '../assets/Books'
// import { useLocation } from 'react-router-dom';
import  Cartbook from './Cartbook'
import '../style/Cart.css'
import Header from './Header'
import {User} from '../index'

const Cart = () => {

    const user = useContext(User);
    console.log("Finally :" , user);
    user.grand_price=0;

    user.items.map((item)=>{
        user.grand_price += (item.total_price); 
    })
    console.log("Total : ", user.grand_price);

    const [grandPrice, setGrandPrice] = useState(0);

    const handleClick = () => {

    }

  return (
    <div className='cart_outer'>
        <Header />

        <div className="cart_title">Your Cart Is Here...</div>

        <div className='clear_cart'>
            <button onClick={()=>handleClick}>
                Clear Cart
            </button>
        </div>

        <div classname="cart_container">
        {
            (user.items!==undefined || user.items!==[]) ? 
            user.items.map((book) => { 
                return <Cartbook book={book} setGrandPrice={setGrandPrice}/> 
            }) :
            <h1>Empty!!</h1>
        }
        </div>

        <div className='grandPrice'>
            <p>Grand Total : {user.grand_price} </p>
            <button className='place_order'>
                Place Order
            </button>
        </div>


    </div>
  )
}

export default Cart