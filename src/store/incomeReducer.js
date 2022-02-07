import { createSlice } from "@reduxjs/toolkit";

const incomeReducer = createSlice({
    name:"income",
    initialState:{
        vndSalary:"",
        usdSalary:"",
        exchangeUSDToVND: ""
    },
    reducers:{
        updateIncomInfo(state,action){
            return action.payload;
        }
    }
})

export default incomeReducer