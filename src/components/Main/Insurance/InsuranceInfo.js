import "./InsuranceInfo.css"

import InsurancePayType from "./InsurancePayType"
import InsuranceSelfInfo from "./InsuranceSelfInfo";
import InsuranceRegion from "./InsuranceRegion";
const InsuranceInfo = props =>{

    const fieldStyle = {marginRight:"8px"}
    return (
        <div className="margin-top-20px">
            <h1 className="group-label">Insurance</h1>
            <div>
                <InsurancePayType/>
                <InsuranceSelfInfo/>
                <InsuranceRegion/>
            </div>
        </div>
    )
}

export default InsuranceInfo