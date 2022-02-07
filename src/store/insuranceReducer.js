import { createSlice } from "@reduxjs/toolkit";

const insuranceReducer = createSlice({
    name:"insurance",
    initialState:{
        selfInfo:{
            minWage:"",
            social:"",
            health:"",
            unemployed: "",
        },
        region:"I",
        payType:{
            type:"full wage",
            salary: ""
        }
    },
    reducers:{
        updateInsuranceSelfInfo(state,action){ 
            state.selfInfo = action.payload;
            return state;
        },
        updateInsurancePayType(state,action){ 
            state.payType = action.payload;
            return state;
        },
        updateInsuranceRegion(state,action){
            state.region = action.payload
        }
    }
})
export default insuranceReducer;