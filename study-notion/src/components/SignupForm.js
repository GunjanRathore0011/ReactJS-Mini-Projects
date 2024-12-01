import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

const SignupForm = ({ setIsLoggedIn }) => {
    const [formData, setFormData] = useState({
        email: "", password: "", confirmPassword: "", firstName: "", lastName: ""
    });

    const [accountType, setAccountType]=useState("student");
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setConfirmShowPassword] = useState(false);
    const navigate = useNavigate();

    function changeHandler(event) {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }
    function submitHandler(event) {
        event.preventDefault();
        if (formData.password != formData.confirmPassword) {
            toast.error("Password do not match");
            return;
        }
        setIsLoggedIn(true);
        toast.success("Account Created");
        const accountData = {
            ...formData
        };
        const finalData={
            ...accountData,
            accountType
        }
        console.log(finalData);
        navigate('/dashboard');
    }
    return (
        <div>
            <div className="flex flex-row w-2/4 justify-between text-richblack-5 bg-richblack-800 rounded-full p-[5px] ">
                <button onClick={()=>setAccountType("student")} className={`${accountType === "student" ?
                    "bg-richblack-900 text-white rounded-full p-[9px] px-[17px] m-[2px]":
                    "m-[2px]"
                 }`}>Student</button>
                <button onClick={()=>setAccountType("instructor")} className={`${accountType === "instructor" ?
                    "bg-richblack-900 text-white rounded-full p-[9px] px-[17px] m-[2px]":
                    "m-[2px]"
                 }`}>Instructor</button>
            </div>
            <form onSubmit={submitHandler}>
                <div className="flex mt-[20px] mb-[20px] justify-between flex-row">
                    <label className="">
                        <p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">
                            First Name<sup className="text-red-600">*</sup></p>
                        <input
                            required
                            name="firstName"
                            value={formData.firstName}
                            type="text"
                            onChange={changeHandler}
                            placeholder="Enter first name"
                            className="focus:bg-richblack-800 bg-richblack-800 rounded-[0.5rem] text-[#EAEBEE]
                            w-full  p-[12px]"
                        />
                    </label>
                    <label className="">
                        <p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">
                            Last Name<sup className="text-red-600">*</sup></p>
                        <input
                            required
                            name="lastName"
                            value={formData.lastName}
                            type="text"
                            onChange={changeHandler}
                            placeholder="Enter last name"
                            className="bg-richblack-800 rounded-[0.5rem] text-[#EAEBEE]
                            w-full p-[12px]"
                        />
                    </label>
                </div>
                <label>
                    <p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">
                        Email Address<sup className="text-red-600">*</sup></p>
                    <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={changeHandler}
                        placeholder="Enter email id"
                        className="bg-richblack-800 rounded-[0.5rem] text-[#EAEBEE]
                        w-full p-[12px]"
                    />
                </label>
                <div className="flex mt-[20px] gap-x-10 flex-row">
                    <label className="w-full relative">
                        <p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">
                            Create Password<sup className="text-red-600">*</sup></p>
                        <input
                            required
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={formData.password}
                            onChange={changeHandler}
                            placeholder="Enter Password"
                            className="bg-richblack-800 rounded-[0.5rem] text-[#EAEBEE]
                            w-full p-[12px]"
                        />
                        <span
                            className="absolute right-3 top-[38px] cursor-pointer"
                            onClick={() => setShowPassword((prev) => !prev)}>
                            {showPassword ?
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2bf" /> :
                                <AiOutlineEye fontSize={24} fill="#AFB2bf" />}
                        </span>
                    </label>
                    <label className="w-full relative">
                        <p className="text-white text-[0.875rem] mb-1 leading-[1.375rem]">
                            Confirm Password<sup className="text-red-600">*</sup></p>
                        <input
                            required
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={changeHandler}
                            placeholder="Confirm Password"
                            className="bg-richblack-800 rounded-[0.5rem] text-[#EAEBEE]
                            w-full p-[12px]"
                        />
                        <span
                            className="absolute right-3 top-[38px] cursor-pointer"
                            onClick={() => setConfirmShowPassword((prev) => !prev)}>
                            {showConfirmPassword ?
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2bf" /> :
                                <AiOutlineEye fontSize={24} fill="#AFB2bf" />}
                        </span>
                    </label>
                </div>
                <button className="w-full text-center mt-6 bg-yellow-400 rounded-[8px] font-medium text-richblack-900 px-[12px] py-[8px]">Create Account</button>
            </form>
        </div>
    );
};

export default SignupForm;
