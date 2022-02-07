import { createSlice } from "@reduxjs/toolkit";

const resultReducer = createSlice({
    name:"result",
    initialState:{
        grossSalary:0,
        netSalary:0,
    },
    reducers:{
        updateGrossAndNetSalary(state,action){
            state = action.payload
            return state;
        }
    }
})
export default resultReducer