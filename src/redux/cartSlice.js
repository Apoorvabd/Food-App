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
        removeCart:(state,action)=>{
            state.cart=state.filter((e)=>(q))
        }
    }
})
    

export const {addItem}=cartSlice.actions
export default cartSlice.reducer