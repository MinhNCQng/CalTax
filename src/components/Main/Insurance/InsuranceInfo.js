import "./InsuranceInfo.css"

import InsurancePayType from "./InsurancePayType"
import InsuranceSelfInfo from "./InsuranceSelfInfo";
import InsuranceRegion from "./InsuranceRegion";
const InsuranceInfo = props =>{
    const {infoData } = props

    
    return (
        <div className="margin-top-20px">
            <h1 className="group-label">Insurance</h1>
            <div>
                <InsurancePayType  payData = {infoData.payType}/>
                <InsuranceSelfInfo />
                <InsuranceRegion />
            </div>
        </div>
    )
}

export default InsuranceInfo