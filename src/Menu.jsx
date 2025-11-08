import { useContext } from "react";
import { ImCancelCircle } from "react-icons/im";
import { dataContext } from "./context/UserContext";
import Card2 from "./Card2";

import { useSelector } from "react-redux";

export default function Menu(){
    let {setCart,cart}=useContext(dataContext);
    const carti=useSelector((state)=>state.cart);
    let price=0;
    carti.map((e)=>{
        price=price+e.total;

    })
    return(
        <>
        <div className={`fixed top-0 right-0 h-screen w-[100vw] md:w-[50vw] bg-slate-50 z-50 transition-all duration-500 ease-in-out overflow-y-auto ${cart? "translate-x-0":"translate-x-full"}`}>
            <div className="p-6 flex justify-between">
                <h1 className="font-bold text-xl font-mono italic underline text-lime-600">Your Orders</h1>
           <div onClick={()=>setCart(false)}> <ImCancelCircle className="font-extrabold text-2xl text-lime-700 cursor-pointer hover:text-gray-900" /></div>
            </div>
           <Card2/>
           <div className="flex flex-col items-center w-full mt-8 space-y-5">

  {/* 💰 Total Price Card */}
  <div className="flex justify-between items-center h-20 bg-gradient-to-r from-slate-100 to-slate-200 shadow-2xl rounded-2xl w-[85%] md:w-[70%] px-8 border border-slate-300 backdrop-blur-sm hover:scale-[1.02] transition-all duration-300 ease-in-out">
    
    <div className="flex items-center space-x-3">
      <span className="text-2xl font-semibold text-slate-800 tracking-wide">
        Total:
      </span>
      <span className="text-2xl font-bold text-green-700 drop-shadow-sm">
        ₹{price}
      </span>
    </div>

    <button className="px-6 py-2 text-lg font-semibold text-white bg-gradient-to-r from-green-700 to-emerald-600 rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out">
      Order
    </button>
  </div>

  {/* 💬 Divider Card */}
  <div className="flex justify-center items-center h-14 bg-white shadow-md rounded-xl w-[85%] md:w-[70%] border border-gray-200 hover:shadow-lg transition-all duration-300 ease-in-out text-slate-600 font-medium tracking-wide">
    <span>────────  More Details Coming Soon  ────────</span>
  </div>
</div>

        </div>
        
        </>
    )
}