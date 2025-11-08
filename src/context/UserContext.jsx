import { createContext, useState } from "react";
import { food_items } from "../foods";

export const dataContext = createContext();

export default function UserContext({ children }) {
  const [input, setInput] = useState("");
  const [cat, setCat] = useState(food_items);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart,setCart]=useState(false);
   const [num ,setNum]=useState(0);
   const [icon,setIcon]=useState();
   const [added,setAdded]=useState([]);

  const data = { input, setInput, cat, setCat, selectedCategory,cart,setCart, setSelectedCategory,num,icon,setIcon,setNum,added,setAdded };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}
