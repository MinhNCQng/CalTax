import "./InsuranceInfo.css"

import InsurancePayType from "./InsurancePayType"
import InsuranceSelfInfo from "./InsuranceSelfInfo";
import InsuranceRegion from "./InsuranceRegion";
const InsuranceInfo = props =>{
    const {infoData, handleChangeInsuranceInfo } = props

    const handleInsuranceFieldChanged = (newValues) =>{
        handleChangeInsuranceInfo({...infoData,...newValues})
    }
    return (
        <div className="margin-top-20px">
            <h1 className="group-label">Insurance</h1>
            <div>
                <InsurancePayType handleChangePayType = {handleInsuranceFieldChanged} payData = {infoData.payType}/>
                <InsuranceSelfInfo handleChangeSelfInfo = {handleInsuranceFieldChanged} selfData =  {infoData.selfInfo}/>
                <InsuranceRegion handleChangeRegion = {handleInsuranceFieldChanged} regionData = {infoData.region}/>
            </div>
        </div>
    )
}

export default InsuranceInfo