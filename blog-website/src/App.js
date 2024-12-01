import React, { useContext, useEffect } from "react";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pageinition from "./components/Pageinition";
import { AppContext } from "./context/AppContext";

function App() {

  const {fetchBlogPosts} = useContext(AppContext);

  useEffect(()=>{
    fetchBlogPosts();
  },[]);

  return (
    <div className="w-full  h-full bg-[#FBCEB1] flex flex-col gap-y-1 items-center">
     <Header/>
     <Blogs/>
     <Pageinition/>
    </div> 
  );
}

export default App;
