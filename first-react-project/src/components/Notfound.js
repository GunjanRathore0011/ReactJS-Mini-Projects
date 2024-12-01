import React from "react";
import { FaSkullCrossbones } from "react-icons/fa";

const Notfound=()=>{
    return(
        <div className="flex h-[500px] justify-center items-center">
           <div>
           <FaSkullCrossbones /></div> 
            <div className="text-lg font-semibold mr-2 p-2">   Courses not found...   </div>
        </div>
    )
}
export default Notfound;