import React from "react";
import { products } from "../redux/data";
import Product from "../components/Product";

function Home(){
    return (
        <div className="grid md:grid-col-3 sm:grid-col-2 xs-grid-col-1 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
            {
                products.map((post)=>(
                    <Product key={post.id} post={post}></Product>
                ))
            }
        </div>
    )
}

export default Home;