import TextInputField from "../../InputField/TextInputField"

import { useRef } from "react";


const InsuranceSelfInfo = props => {

    const minWageInputRef = useRef()
    const socialInputRef = useRef()
    const healthInputRef = useRef()
    const unemployedInputRef = useRef()
    const {minWage,social,health,unemployed} = props.selfData;


    const handleInsuranceSelfInfoChange = (event)=>{
        
        const newInfo = {
            minWage: minWageInputRef.current.value,
            social: socialInputRef.current.value,
            health: healthInputRef.current.value,
            unemployed: unemployedInputRef.current.value,
        }
        props.handleChangeSelfInfo(newInfo)
    }
    return (
        <div className="row-info">
            <TextInputField
                ref={minWageInputRef}
                labelText={"Minimum wage "}
                inputWidth={"70px"}
                inputValue={minWage}
                handleChangeInputValue={handleInsuranceSelfInfoChange} 
                trailText={"VND"}
                />
            <TextInputField
                ref={socialInputRef} 
                labelText={"Social "}
                inputWidth={"30px"}
                inputValue={social}
                handleChangeInputValue={handleInsuranceSelfInfoChange} 
                trailText={" % "}/>
            <TextInputField
                ref={healthInputRef}
                labelText={"Health "}
                inputWidth={"30px"}
                inputValue={health}
                handleChangeInputValue={handleInsuranceSelfInfoChange} 
                trailText={" % "}/>
            <TextInputField
                ref={unemployedInputRef}
                labelText={"Unemployed "}
                inputWidth={"30px"}
                inputValue={unemployed}
                handleChangeInputValue={handleInsuranceSelfInfoChange} 
                trailText={" % "}/>
        </div>
    )
}

export default InsuranceSelfInfo