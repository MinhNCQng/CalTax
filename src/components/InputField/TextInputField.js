import { forwardRef } from "react";

const TextInputField = ({labelText,inputWidth,inputValue,handleChangeInputValue,trailText, disable, inputType ="text"},ref) => {

    const fieldStyle = {marginRight:"12px"}
    return (
        <span style={fieldStyle}>
            {labelText && <label>{labelText}</label> }
            <input ref={ref} style={{ width: inputWidth, }} type={inputType} value={inputValue} disabled={disable} onChange={(e)=>handleChangeInputValue(e)}/>
            {trailText && <span>{trailText}</span>}
        </span>
    )
}

export default forwardRef(TextInputField);