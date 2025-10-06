import { createContext, useState } from "react";
import { food_items } from "../foods";

export const dataContext = createContext();

export default function UserContext({ children }) {
  const [input, setInput] = useState("");
  const [cat, setCat] = useState(food_items);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [cart,setCart]=useState(false);

  const data = { input, setInput, cat, setCat, selectedCategory,cart,setCart, setSelectedCategory };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
}
