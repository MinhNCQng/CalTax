
import { useState } from "react";
import { convertFloattoIntNumber, convertNumberToCommaNumberString } from "../Main/Calc/CalcResult";
import ExplainContext, {defaultExplainValue} from "./ExplainContext";

const ExplainProvider = props =>{

    const [explaination,setExplaination] = useState(defaultExplainValue)

    const handleSetExplanation = (resultObject) => {
        
        Object.keys(resultObject).forEach((element)=>{
            if (element === "detailPersonalIncomeTax") {
                resultObject[element] = resultObject[element].map(detailIncomeTaxElement =>{
                    return convertNumberToCommaNumberString(convertFloattoIntNumber(detailIncomeTaxElement))
                })
                return;
            }
            if (element.includes("Percent")) return
            resultObject[element] = convertNumberToCommaNumberString(convertFloattoIntNumber(resultObject[element]))
        })
        setExplaination(resultObject)
    }
    return (
        <ExplainContext.Provider value={{explaination,handleSetExplanation}}>
            {props.children}
        </ExplainContext.Provider>
    )
}

export default ExplainProvider;