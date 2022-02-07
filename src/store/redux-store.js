import { configureStore } from "@reduxjs/toolkit";
import familyDependReducer from "./familyDependReducer";
import incomeReducer from "./incomeReducer";
import insuranceReducer from "./insuranceReducer";
import resultReducer from "./resultReducer";
const store = configureStore({
    reducer:{
        income: incomeReducer.reducer,
        insurance: insuranceReducer.reducer,
        dependant: familyDependReducer.reducer, 
        resultCalc: resultReducer.reducer
    }
})


export const incomeDataActions = incomeReducer.actions
export const insuranceActions = insuranceReducer.actions
export const familyDependActions = familyDependReducer.actions
export const resultActions = resultReducer.actions
export default store