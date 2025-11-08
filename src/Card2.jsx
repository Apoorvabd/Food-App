import image1 from './assets/image1.avif'
import { FaTrashAlt } from "react-icons/fa";
import { useContext, useState } from "react";
import { dataContext } from "./context/UserContext";
import { useDispatch, useSelector } from 'react-redux';
import { removeCart, updateCart } from "./redux/cartSlice"; // ✅ Import action



function Card2(){
    const {num,icon,setNum,setIcon,added,setAdded}=useContext(dataContext);
    const [no,setNo]=useState(0);
    const cart=useSelector(state=>state.cart);
    console.log(cart);
    const dispatch=useDispatch();

    const handledel=(id)=>{
        setNum(num-1);
        dispatch(removeCart(id));
    }
    
   const update = (idi, q, a) => {
  const item = cart.find(i => i.id === idi);
  if (!item) return;

  // Agar qty 1 se kam ho gayi, remove kar do
  if (item.qty <= 1 && a !== 0) {
    dispatch(removeCart(idi));
    setNum(num-1);
    return;
  }

  // Calculate new quantity
  const newQty = a === 0 ? q + 1 : q - 1;

  // Calculate new total price for that product
  const newTotal = item.price * newQty;

  // Update cart
  dispatch(updateCart({ id: idi, newData: { qty: newQty, total: newTotal } }));
};

    return (
        <>
        {cart.map((e)=>(
             <div key={e.id} className="flex h-[90px] ml-12 w-[80%]  rounded-md shadow-xl  ">
            
            <div className="bg- w-[70%] h-[75px] mt-2 flex p-3  gap-4 overflow-hidden">
                <img src={e.icon} alt="  lyg" className='w-[110px] h-[75px] object-cover rounded-xl mt-0'/>
                <div className=' w-[190px] h-[70px]'>
                    <div className='mb-2'>
                        <p>{e.text}</p>
                    </div>
                    <div className=' ml-4  w-[79%] border-2 border-green-400 shadow-xl h-[35px] flex justify-center rounded-md'>
                        <button className='w-8 h-[30px] rounded-s-md bg-slate-50 text-3xl items-center flex justify-center' onClick={()=>update(e.id,e.qty,1)}> - </button>
                        <span className='w-10 h-[30px] bg-green-100   text-[16px] flex justify-center items-center'> {e.qty} </span>
                        <button className='w-8 h-[30px] bg-slate-50 rounded-e-md text-2xl flex justify-center items-center'onClick={()=>update(e.id,e.qty,0)} >+</button>
                    </div>
                </div>
            </div>
            <div className=" md:w-[30%] mt-4 h-16  ">
                <p className='flex justify-self-end mr-2 text-green-800 text-lg'>{e.total}/-</p>
                <p className=' flex justify-self-end mr-2 text-red-800 text-lg mt-2' onClick={()=>handledel(e.id)}><FaTrashAlt /></p>
            </div>
        </div>
        ))}
       
        </>
    )

}
export default Card2