import { TiThSmallOutline } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { GiNoodles } from "react-icons/gi";
import { LuSoup } from "react-icons/lu";
import { FaPizzaSlice } from "react-icons/fa6";
import { GiHamburger } from "react-icons/gi";
import { MdDinnerDining } from "react-icons/md";






export const Categories = [
    {
        id: "1",
        name: "All",
        icon: <TiThSmallOutline className="w-[40px] h-[70px]  text-green-700"/>
    },
    {
        id: "2",
        name: "Breakfast",
        icon: <MdFreeBreakfast className="w-[40px] h-[60px]  text-green-700"/>

    },
    {
        id: "3",
        name: "Pasta",
        icon: <GiNoodles className="w-[40px] h-[60px]  text-green-900 font-extrabold"/>

    },
    {
        id: "4",
        name: "Soups",
        icon: <LuSoup className="w-[40px] h-[60px]  text-green-700"/>

    },
    {
        id: "5",
        name: "Pizza",
        icon: <FaPizzaSlice className="w-[40px] h-[60px]  text-green-700"/>

    },
    {
        id: "6",
        name: "Burger",
        icon: <GiHamburger className="w-[40px] h-[60px]  text-green-700 " />

    },
    {
        id: "7",
        name: "Supper",
        icon: <MdDinnerDining className="w-[40px] h-[60px]  text-green-800"/>

    }
];