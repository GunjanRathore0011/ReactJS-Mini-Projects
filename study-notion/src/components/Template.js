import React from "react";
import frameImage from "../assets/Images/frame.png"
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import { FcGoogle } from "react-icons/fc"; 
const Template=({title , desc1 ,desc2 ,image,formtype,setIsLoggedIn})=>{
    return(
        <div className="flex w-11/12 max-w-[1160px] py-12 mx-auto gap-x-12  justify-between gap-y-0">
            <div className="w-11/12 max-w-[450px]"> 
                 <h1 
                 className="text-white font-semibold text-[1.875rem] leading-[2.375rem] "
                 >{title}</h1>
                 <p className=" text-[1.125rem] leading[1.625rem mt-4">
                    <span className="text-richblack-100">{desc1 }</span><br></br>
                    <span className="text-[#074E88]">{desc2}</span>
                 </p>
                 {formtype === "signup" ?
                 (<SignupForm setIsLoggedIn={setIsLoggedIn}/>):
                 (<LoginForm setIsLoggedIn={setIsLoggedIn}/>)}

                <div className="flex flex-row w-full items-center gap-x-3 mt-6">
                    <div className="h-[1px] w-full bg-richblack-700"></div>
                    <p className="text-richblack-700 font-medium leading[1.375rem]">OR</p>
                    <div className="h-[1px] w-full bg-richblack-700"></div>
                </div>

                <button className="flex flex-row items-center w-full justify-center rounded-[8px] 
                font-medium text-richblack-100 border-richblack-700 border  px-[12x] py-[8px] mt-6  gap-x-2">
                    <FcGoogle></FcGoogle>
                    <p>Sign in with Google</p>
                </button>
            </div>
            
            <div className="relative">
                <img src={frameImage}
                alt="Pattern"
                width={558}
                height={504}
                loading="lazy"
                >
                </img>
                <img src={image}
                alt="students"
                width={558}
                height={490}
                loading="lazy"
                className="absolute -top-4 right-4"
                >
                </img>
            </div>
        </div>
    )

}

export default Template;