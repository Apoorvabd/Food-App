import { useContext } from "react";
import { ImCancelCircle } from "react-icons/im";
import { dataContext } from "./context/UserContext";
import Card2 from "./Card2";

export default function Menu(){
    let {setCart,cart}=useContext(dataContext);
    return(
        <>
        <div className={`h-[100vh] md:w-[50vw] fixed top-0 right-0 w-[100%] bg-slate-50   ${cart? "translate-x-0":"translate-x-full"}`}>
            <div className="p-6 flex justify-between">
                <h1 className="font-bold text-xl font-mono italic underline text-lime-600">Your Orders</h1>
           <div onClick={()=>setCart(false)}> <ImCancelCircle className="font-extrabold text-2xl text-lime-700 cursor-pointer hover:text-gray-900" /></div>
            </div>
           <Card2/>
        </div>
        
        </>
    )
}