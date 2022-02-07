import "./InsuranceInfo.css"

import InsurancePayType from "./InsurancePayType"
import InsuranceSelfInfo from "./InsuranceSelfInfo";
import InsuranceRegion from "./InsuranceRegion";
const InsuranceInfo = props =>{
    const infoData = props.infoData

    const handleChangePayType = newValues => {

        props.handleChangeInsuranceInfo({...infoData,payType:newValues})
    }

    const handleChangeSelfInfo = newValues => {

        props.handleChangeInsuranceInfo({...infoData,selfInfo:newValues})
    }
    
    const handleChangeRegion = newValues =>{
        props.handleChangeInsuranceInfo({...infoData,region:newValues})
    }
    return (
        <div className="margin-top-20px">
            <h1 className="group-label">Insurance</h1>
            <div>
                <InsurancePayType handleChangePayType = {handleChangePayType} payData = {infoData.payType}/>
                <InsuranceSelfInfo handleChangeSelfInfo = {handleChangeSelfInfo} selfData =  {infoData.selfInfo}/>
                <InsuranceRegion handleChangeRegion = {handleChangeRegion} regionData = {infoData.region}/>
            </div>
        </div>
    )
}

export default InsuranceInfo