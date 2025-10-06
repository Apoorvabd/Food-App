import { useContext, useEffect } from "react";
import { CiSearch } from "react-icons/ci";
import { FaCartPlus } from "react-icons/fa";
import { IoFastFood } from "react-icons/io5";
import { dataContext } from "./context/UserContext";
import { food_items } from "./foods";


function Nav() {
  const { input, setInput, setCat, selectedCategory ,cart,setCart} = useContext(dataContext);

  useEffect(() => {
    let filtered = food_items;

    // Apply category filter first
    if (selectedCategory !== "All") {
      filtered = filtered.filter(
        (item) => item.food_category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    // Apply search filter
    if (input.trim() !== "") {
      filtered = filtered.filter((item) =>
        item.food_name.toLowerCase().includes(input.toLowerCase())
      );
    }

    setCat(filtered);
  }, [input, selectedCategory, setCat]);

  return (
    <div className="h-14 flex w-[100vw] pl-2 items-center justify-between mt-2">
      <div className="text-2xl text-green-500 flex justify-center bg-white items-center h-10 w-10 rounded-lg shadow-xl ml-3">
        <IoFastFood />
      </div>
      <div className="h-9 text-sm flex justify-center items-center w-[590px]">
        <div className="text-[20px] h-9 w-[34px] p-2 bg-white rounded-s-md shadow-green-600 shadow-sm">
          <CiSearch />
        </div>
        <input
          type="text"
          className=" w-[220px] md:w-[550px] rounded-e-md h-9 pl-2 focus:outline-none"
          placeholder="Search food..."
          onChange={(e) => setInput(e.target.value)}
          value={input}
        />
      </div>
      <div className="text-2xl mr-6 flex items-center text-green-500 h-10 rounded-lg bg-white justify-center relative w-12 " onClick={()=>setCart(true)}>
        <FaCartPlus />
        <span className="absolute top-0 right-1 text-[15px] font-bold text-red-400">0</span>
      </div>
    </div>
  );
}

export default Nav;
