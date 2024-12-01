import React from "react";
import {FcLike,FcLikePlaceholder} from "react-icons/fc"
import { toast } from "react-toastify";

const Card=(props)=>{ 
    let course=props.course;
    let likedCourses=props.likedCourses;
    let setLikedCourses=props.setLikedCourses;
    // let courseDesc=course.description.substring(0,100);
    function clickHandler(){
        if(likedCourses.includes(course.id)){
            setLikedCourses((prev)=>prev.filter ((cid)=>cid!=course.id));
            toast.warning("Like removed");
        }
        else{
            if(likedCourses.length==0){
                setLikedCourses([course.id]);
            }
            else{
                setLikedCourses((prev)=>[...prev,course.id]);
            }
            toast.success("Liked Successfully");
        }
    }
    // console.log(course.image.url);
    return (
    <div className="w-[300px] bg-slate-800 bg-opacity-80 rounded-md overflow-hidden">
        <div className="relative">
    
        <img src={course.image.url}></img>
        <div className="w-[30px] h-[30px] bg-white rounded-full absolute right-2 bottom-[-12.5px] grid place-items-center"> 
            <button >
                {
                likedCourses.includes(course.id) ? (<FcLike onClick={clickHandler} fontSize='1.75rem'/>):(<FcLikePlaceholder onClick={clickHandler} fontSize='1.75rem'></FcLikePlaceholder>) 
                }
            </button>
        </div>
        </div>
        
        <div className="p-4">
            <p className=" text-white font-semibold text-lg leading-6">
                {course.title}
            </p>
            <p className="mt-2 text-white">
                {
                    course.description.length>100 ? (course.description.substr(0,100)) + "...":( course.description)
                }
            </p>
        </div> 
    </div>
    );
}
export default Card;