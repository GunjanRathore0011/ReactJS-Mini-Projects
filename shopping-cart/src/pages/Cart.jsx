import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import Cartitem from "../components/Cartitem";

function Cart(){
    const {cart} =useSelector((state)=>state);
    const [totalAmount,setTotalAmount] = useState(0);

    useEffect(()=>{
        setTotalAmount( cart.reduce( (acc,curr)=> acc+ curr.price,0) ) ;
    },[cart])

    return (
        <div>
        {
            cart.length > 0 ? (
                <div className="flex gap-5">
                    <div className="">
                        {
                            cart.map((item,index) => (
                                 <Cartitem key={item.id} item={item} itemIndex={index} ></Cartitem>
                            ))
                        }
                    </div> 
                    
                    <div className="h-[500px] w-[300px] flex flex-col justify-between  mt-20 ">
                        <div className="flex flex-col ">
                        <div className="text-green-600 uppercase font-semibold text-lg">Your Cart</div>
                        <div className="text-green-600 uppercase font-bold text-3xl ">Summary</div>
                        <p>
                            <span className="font-semibold text-md">
                                Total Items: {cart.length} 
                            </span>
                        </p>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-md">Total Amount: <span className="font-bold ">${totalAmount}</span> </p>
                        <button className="bg-green-600 mt-4 border rounded-md text-white font-semibold text-lg">
                            Checkout Now
                        </button>
                    </div>
                    </div>
                </div>

            ) : (
                <div>
                    <h1>Cart Empty</h1> 
                    <NavLink to="/">
                        <button>Shop Now</button>
                    </NavLink>
                </div>
            )
        }
        
        
    </div>
    )
}

export default Cart;