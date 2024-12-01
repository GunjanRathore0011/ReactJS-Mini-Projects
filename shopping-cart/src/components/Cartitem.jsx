import React from "react";

import { MdAutoDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-toastify";

function Cartitem({item}){

    const {cart}=useSelector((state)=>state);
    const dispatch=useDispatch();

    function deleteHandler(){
        dispatch(remove(item.id));
        toast.error("Item Removed");
    }

    return (
        <div>   

            <div className="flex mt-5 gap-x-5  w-[500px] h-[200px]">

                <div className="h-[180px] ">
                    <img src={item.image} className="h-full w-full" ></img>
                </div>

                <div className="flex flex-col justify-around  ">
                <div>
                    <h1 className="text-gray-700 font-semibold text-xl text-left  mt-1 ">{item.title} </h1>
                    <h1 className=" text-gray-400 font-normal text-sm text-left mt-3 ">{item.description.split(" ").slice(0,15).join(" ")+"..."} </h1>
                </div>

                <div className="flex items-center justify-between  px-4 text-green-600 ">
                    <p>${item.price} </p>
                    <div
                    className="h-10 w-10 bg-red-300 border rounded-full flex justify-center items-center cursor-pointer"
                    onClick={deleteHandler}>
                        <MdAutoDelete className="text-2xl text-red-800"></MdAutoDelete>
                    </div>
                </div>
                </div>

            </div>
            <div className="w-full h-[1px] bg-black mt-2"></div>
        </div>
    )
}

export default Cartitem;