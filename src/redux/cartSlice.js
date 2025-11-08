import {createSlice, nanoid} from '@reduxjs/toolkit'
import { useContext } from 'react'
import { dataContext } from '../context/UserContext';
const cartSlice=createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        addItem:(state,action)=>{
            state.push(action.payload)
        },
        removeCart: (state, action) => {
       return state.filter(item => item.id !== action.payload);
        },
        updateCart:(state,action)=>{
            const {id,newData}=action.payload;
            const item=state.find(item=>item.id===id);
            if(item){
                Object.assign(item,newData);
            }

        }

    }
})
    

export const {addItem,removeCart,updateCart}=cartSlice.actions
export default cartSlice.reducer