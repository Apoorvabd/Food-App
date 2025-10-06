import { useContext } from "react";
import { Categories } from "./Categories";
import Card from "./Card";
import { dataContext } from "./context/UserContext";
import Menu from "./Menu";

function Home() {
  const { cat, setCat,setCart,cart ,selectedCategory, setSelectedCategory } = useContext(dataContext);

  function filter(category) {
    setSelectedCategory(category);
    // No need to filter here, Nav's useEffect handles filtering
  }

  return (
    <div>
     <div className="h-[600px]  md:h-[120px] md:pl-10">
         <div className="grid grid-cols-2 gap-12 md:flex md:w-[900px]   md:justify-center         w-[169px] h-[170px] md:h-[10px] mt-2 mb-3 md:gap-5   m-auto">
        {Categories.map((item) => (
          <div
            key={item.id}
             className={`w-[90px] h-[90px] mt-3  rounded-xl cursor-pointer 
    ${selectedCategory === item.name ? "bg-green-100" : "bg-white"} 
    `}
            onClick={() => filter(item.name)}
          >
            <div className="flex pl-3 items-center h-[60px] text-xl font-semibold rounded-t-xl">
              {item.icon}
            </div>
            <div className="flex pl-3 items-center h-9 font-semibold text-[13.5px] rounded-b-xl">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
     </div>
    <Card foodlist={cat} />
    <Menu/>
    
    </div>
  );
}

export default Home;
