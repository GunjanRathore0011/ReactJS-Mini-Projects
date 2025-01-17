import React, { useState } from "react";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
const LoginForm=({setIsLoggedIn})=>{
    const [formData,setFormData]=useState({
        email:"",password: ""})
    
    const[showPassword,setShowPassword]=useState(false);    
    const navigate=useNavigate();

    function changeHandler(event){
        setFormData( (prevData)=>(
            {
                ...prevData,
                [event.target.name]:event.target.value
                
            }
        ))
    }

    function submitHandler(event){
        event.preventDefault();
        setIsLoggedIn(true);
        toast.success("Logged In");
        navigate("/dashboard");
    }

    return(
        <form onSubmit={submitHandler}
        className="flex flex-col w-full gap-y-4 mt-6"
        >
            <label className="w-full">
            <p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">
                Email Address<sup className="text-red-600">*</sup>
            </p>
            <input required 
            type="email" 
            value={formData.email}
            name="email"
            onChange={changeHandler}
            placeholder="Enter email address"
            className="bg-richblack-800 rounded-[0.5rem] text-[#EAEBEE]
             w-full p-[12px]"
            ></input>
            </label>
        
            <label className="w-full relative">
            <p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">
                Password<sup className="text-red-600">*</sup>
            </p>
            <input 
            required
            type={showPassword? ("text"):("password")}
            value={formData.password}
            name="password"
            onChange={changeHandler}
            placeholder="Enter Password"
            className="bg-richblack-800 rounded-[0.5rem] text-[#EAEBEE]
             w-full p-[12px]"
            ></input>
            
            <span
            className="absolute right-3 top-[38px] cursor-pointer"
            onClick={()=>setShowPassword((prev)=>!prev)}>
                {showPassword ?
                (<AiOutlineEyeInvisible fontSize={24} fill="#AFB2bf" />):
                (<AiOutlineEye fontSize={24} fill="#AFB2bf"/>)}
            </span>

            <Link  to="#">
                <p className="text-xs mt-1 text-[#0C85E9] max-w-max ml-auto">
                Forgot Password
                </p>
            </Link>
            </label>

            <button className="w-full text-center mt-6 bg-yellow-400 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]">Sign In</button>
        </form>
    )
}

export default LoginForm;