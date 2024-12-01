import Card from "./Card";
import React, { useState } from "react";
const Cards=(props)=>{
    let courses= props.courses;
    let category=props.category;
    const[likedCourses,setLikedCourses]=useState([]);

    function getCourses(){
        if(category==="All"){
            let allCourses=[];
        
        Object.values(courses).forEach(array => {
            array.forEach(data=>{
                    allCourses.push(data); 
                })
            })
            console.log(courses);
        
        return allCourses;
        }
        else{
            // sirf specific category ka array pass krna h
            // console.log(courses);
            // console.log(category);
            // console.log(courses[category]);
            return courses[category];
        }
    }
    // console.log(getCourses());
    return (<div className="flex flex-wrap justify-center gap-4 mb-4">
        {
            getCourses().map((course)=>{
               return <Card key={course.id} course={course} likedCourses={likedCourses} setLikedCourses={setLikedCourses} />
            })
        }
    </div>);
}
export default Cards;