import React from "react";
const Filter=(props)=>{
    let filterData=props.filterData;
    let category=props.category;
    let setCategory=props.setCategory;
    function filterHandler(title){
        setCategory(title);
    } 
    return (<div className="w-11/12 flex flex-wrap max-w-max space-x-4 gap-y-4 mx-auto py-4 justify-center" >
        {
         filterData.map((data)=>(
            <button onClick={()=>filterHandler(data.title)} className={`text-lg px-2 py-1  rounded-md font-medium text-white bg-slate-900 hover:bg-opacity-50 ${category==data.title ? " border-2 bg-opacity-100": "bg-opacity-70"}`}key={data.id}>{data.title}</button>
         )) 
        }
    </div>);
}
export default Filter;