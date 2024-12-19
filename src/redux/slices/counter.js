import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:0,
    reducers:{
        increment:(state)=>state+1,
        decrement:(state)=>state-1,
        increment_by_amount:(state,action)=>state + action.payload,
    }
})

export const{increment,decrement,increment_by_amount} = counterSlice.actions
export default counterSlice.reducer