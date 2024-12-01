import React from "react";
import Template from "../components/Template";
import login from '../assets/Images/login.webp'

const Login=({setIsLoggedIn})=>{
    return(
        <div>
            
            <Template 
                title="Welcome back "
                desc1="Build skills for today, tomorrow, and beyond."
                desc2="Education to future-proof your career."
                image={login}
                formtype="login"
                setIsLoggedIn={setIsLoggedIn}
            ></Template>
        </div>
        
    )
}

export default Login;