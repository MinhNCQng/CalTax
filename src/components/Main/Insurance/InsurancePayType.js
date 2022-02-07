import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { insuranceActions } from "../../../store/redux-store";
import TextInputField from "../../InputField/TextInputField";

const InsurancePayType = props => {
    const {type, salary} = useSelector(state=>state.insurance.payType)
    const types = ["full wage","other"]
    const isDisable = type !== "other"
    
    const otherSalaryInputRef = useRef()
    const dispatch = useDispatch()
    const handleInsuranceTypeChange = (value)=>{
        const newType = {
            type:value,
            salary: otherSalaryInputRef.current.value
        }
        dispatch(insuranceActions.updateInsurancePayType(newType))
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