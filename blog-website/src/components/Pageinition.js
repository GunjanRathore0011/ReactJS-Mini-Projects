import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Pageinition(){
    const {page,handlePageChange,totalPages}=useContext(AppContext);
  
    return(
        <div className="fixed bottom-0 bg-[#F8AB77] w-full flex justify-center shadow-[0_3px_10px_rgb(0.2,0,0,0.2)]">
            <div className=" flex justify-between py-2 flex-row w-11/12 max-w-[670px]">
            <div className="flex gap-x-2">
            { page>1 &&
            <button className="hover:scale-110 transition duration-75 ease-in cursor-pointer rounded-lg font-semibold border-2 border-[#F8AB77] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:bg-[#FBCEB1] py-[2px] px-[10px]" onClick={()=>(handlePageChange(page-1))}>
             Previous
            </button>
            }

            { page<totalPages &&
            <button className="hover:scale-110 transition duration-75 ease-in cursor-pointer rounded-lg font-semibold border-2 border-[#F8AB77] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] hover:bg-[#FBCEB1] py-[2px] px-[10px]" onClick={()=>(handlePageChange(page+1))}>
             Next
            </button>
            }
            </div>
            <p className="font-bold text-sm">
                Page {page} of {totalPages}
            </p>
        </div>
        </div>
    );
}
export default Pageinition;