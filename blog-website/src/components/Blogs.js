import { useContext } from "react";
import App from "../App";
import { AppContext } from "../context/AppContext";
import Spinner from "./Spinner";


function Blogs(){

    const {posts,loading}=useContext(AppContext);

    return(
        <div className= " bg-[#F8AB77] shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] w-11/12 max-w-[670px] py-8 flex items-center justify-center flex-col mt-[30px] mb-[40px] gap-y-7 px-3">
            {
                loading ? 
                (<Spinner></Spinner>):
                (
                    posts.length === 0 ? (
                      <div>
                        <p>No Post Found</p>
                      </div>  
                    ):(
                        posts.map((post)=>(
                            <div key={post.id} >
                                <p className="text-lg font-bold">{post.title}</p>
                                <p className="text-sm mt-[4px]">
                                    By <span className="italic">{post.author}</span> on <span className="underline font-bold">{post.category}</span>

                                </p>
                                <p className="text-sm mt-[4px]">Posted on {post.date}</p>
                                <p className="text-md mt-[14px]"> {post.content} </p>
                                <div className=" flex flex-row gap-x-3">
                                    {post.tags.map((tag,index)=>{
                                        return <span key={index} className="text-blue-700 mt-[5px] underline font-bold text-xs  " >{`#${tag}`}</span>
                                    })}
                                </div>
                                <br></br>
                            </div>
                        ))
                    )
                )
            }
        </div>
    );
}
export default Blogs;