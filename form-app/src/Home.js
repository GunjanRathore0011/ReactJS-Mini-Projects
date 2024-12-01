import React from "react";
import { Link } from "react-router";
import { LuSchool } from "react-icons/lu";
import { useState } from "react";


function Home(){

  const [formData, setformData] = useState({
    firstName: "", lastName: "",phone: "",date: "",year:""
    ,age:"",occupation:"",memories:""
  });

  // console.log(formData);

  function changeHandler(event) {
    const { name, value } = event.target;

    // If it's a checkbox, use the `checked` property. Otherwise, use `value`.
    setformData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Printing form ka data.....")
    console.log(formData);
  }

  // console.log(formData);

    return(
        <div className="App  flex flex-col items-center ">
            <div className="form-box  flex flex-col justify-center items-center ">

        <div className="flex flex-col items-center">
        <LuSchool className="w-[60px] h-[60px]"/>
        <h1>Alumni Registration</h1>
        <p>This form lets you apply to be a member of your college's alumni</p>
        </div>
        <div className="w-full h-[2px] bg-gray-800"></div>
        <form className="w-full flex flex-col" onSubmit={submitHandler}>

          <br></br><label>First name<span className="text-red-700">*</span></label><br></br>
          <input className="w-[]"
            required
            onChange={changeHandler}
            type="text"
            placeholder="first name"
            name="firstName"
            value={formData.firstName}>
          </input>
 
          <br></br><label >Last name<span className="text-red-700">*</span></label><br></br>
          <input 
            className=""
            required
            onChange={changeHandler}
            type="text"
            placeholder="last name"
            name="lastName"
            value={formData.lastName}>
          </input>

          <br></br><label>Phone<span className="text-red-700">*</span></label><br></br>
          <input
            required
            onChange={changeHandler}
            type="text"
            placeholder="phone number"
            name="phone"
            value={formData.phone}>
          </input>

          <br></br><label>Email address<span className="text-red-700">*</span></label><br></br>
          <input
            required
            onChange={changeHandler}
            type="email"
            placeholder="email address"
            name="emailAddress"
            value={formData.emailAddress}>
          </input>

          <br></br><label>DOB<span className="text-red-700">*</span></label><br></br>
          <input className="text-gray-400"
            required
            onChange={changeHandler}
            type="date"

            placeholder="date of birth"
            name="date"
            value={formData.date}>
          </input>
  
          <br></br><label>Age<span className="text-red-700">*</span></label><br></br>
          <input
            required
            onChange={changeHandler}
            type="text"
            placeholder="age"
            name="age"
            value={formData.age}>
          </input>

          <br></br><label>Year of graduating from college<span className="text-red-700">*</span></label><br></br>
          <input
            required
            onChange={changeHandler}
            type="number"
            min={2009}
            max={2027}
            placeholder="year of graduation"
            name="year"
            value={formData.year}>
          </input>

          <br></br><label>Occupation<span className="text-red-700">*</span></label><br></br>
          <input
            required
            onChange={changeHandler}
            type="text"
            placeholder="occupation"
            name="occupation"
            value={formData.occupation}>
          </input> 

          <br></br><label>Memories at College</label><br></br>
          <input
        
            onChange={changeHandler}
            type="textarea"
            placeholder="memories"
            name="memories"
            value={formData.memories}>
          </input>

          <div>
            <Link to="/submit">
             <button className="my-5 mx-[47%] p-2 font-bold  rounded-2xl w-[10%] border-2 border-gray-700 bg-[#EAEFF1] hover:bg-slate-700 hover:text-[#EAEFF1] hover:border-[#EAEFF1]">Submit</button>

            </Link>
          </div>

        </form>

      </div>

        </div>
    )
}
export default Home;