const TextInputField2 = ({prefix,id,inputWidth,value,onChange,suffix, disabled}) => {

    const fieldStyle = {marginRight:"12px"}
    return (
        <span style={fieldStyle}>
            {prefix && <label>{prefix}</label> }
            <input style={{ width: inputWidth, }} id={id} value={value} disabled={disabled} onChange={(e)=>onChange(e)}/>
            {suffix && <span>{suffix}</span>}
        </span>
    )
}

export default TextInputField2;