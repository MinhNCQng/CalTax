import { createSlice } from "@reduxjs/toolkit"

const familyDependReducer = createSlice(
    {
        name:"FamilyDepend",
        initialState:{
            personalSalary:"",
            dependantSalary:"",
            numOfDepedant:"",
        },
        reducers:{
            updatefamilyDependInfo(state,action){
                return action.payload
            }
        }
    }
)
export default familyDependReducer