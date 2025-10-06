import { IoIosLeaf } from "react-icons/io";
import { FaFish } from "react-icons/fa";

function Card({ foodlist = [] }) {
  return (
    <div className="flex flex-wrap gap-7 justify-center mt-0 items-center">
      {foodlist.map((items) => (
        <div key={items.id} className="bg-white w-[200px] h-[260px] p-2 border-2 border-green-100 rounded-md">
          <img
            src={items.food_image}
            alt={items.food_name}
            className="ml-1 rounded-md w-[180px] h-[150px] flex justify-center border-2 border-slate-300"
          />
          <p className="mt-1 text-[17px] text-green-900 font-bold flex">{items.food_name}</p>
          <div className="flex justify-between">
            <p className="mt-1 text-[13px] text-green-500 font-bold flex">Rs.- {items.price} /-</p>
            {items.food_type === "veg" ? (
              <p className="text-green-600 text-[14px] flex mt-1"><IoIosLeaf /> Veg</p>
            ) : (
              <p className="text-green-600 text-[13px] flex mt-1"><FaFish className="text-[18px]" /> non-veg</p>
            )}
          </div>
          <button className="m-2 bg-green-300 border-2 rounded-2xl border-green-700 w-[90%]">Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default Card;
