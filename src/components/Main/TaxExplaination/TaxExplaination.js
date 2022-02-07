import { useContext } from "react"
import ExplainContext from "../../ExplainContext.js/ExplainContext"
import DetailTable from "../Table/DetailTable"
import DetailTableRow from "../Table/DetailTableRow"

import TaxData from "./TaxData"
const TaxExplaination = props =>{
    const {explaination} = useContext(ExplainContext)
    return (
        <div className="margin-top-20px">
            <h1 className="group-label">(*) Chi tiết thuế thu nhập cá nhân (VND)</h1>
            <DetailTable style= {[63,18]}>
                {TaxData.map((element,index)=>{
                    if (index !== 0) element.value[2] =  explaination.detailPersonalIncomeTax[index-1] || 0
                    return <DetailTableRow key={index} bold= {element.boldRow}  value = {element.value}/>
                })}
                
            </DetailTable>
        </div>
    )
}

export default TaxExplaination