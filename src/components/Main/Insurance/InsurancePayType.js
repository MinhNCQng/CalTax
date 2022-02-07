import { useRef } from "react";

import TextInputField from "../../InputField/TextInputField";

const InsurancePayType = props => {
    
    const {type, salary} = props.payData
    const types = ["full wage","other"]
    const isDisable = type !== "other"
    
    const otherSalaryInputRef = useRef()

    const handleInsuranceTypeChange = (value)=>{
        const newType = {
            type:value,
            salary: otherSalaryInputRef.current.value
        }
        props.handleChangePayType(newType)
    }


    return (
        <div className="row-info">
            <span>Pay for </span>
            {types.map((element,index)=>
                <span key={index}  className="region-option" >
                    <input type={"radio"} onChange={()=>handleInsuranceTypeChange(element)}  checked={element === type} />
                    <label> {element} </label>
                </span>
            )}
            <TextInputField ref={otherSalaryInputRef} handleChangeInputValue={()=>handleInsuranceTypeChange(type)} inputValue={salary} inputWidth={"70px"} trailText={" VND "} disable={isDisable} />
            

        </div>
    )
}

export default InsurancePayType