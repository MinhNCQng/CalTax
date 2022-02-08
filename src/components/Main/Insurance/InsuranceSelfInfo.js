import TextInputField2 from "../../InputField/TextInputField2";


const InsuranceSelfInfo = props => {


    const {selfData, handleChangeSelfInfo} = props
    const {minWage,social,health,unemployed} = selfData;

    const handleInsuranceSelfInfoChange = e =>{
        const targetId  = e.target.id
        const targetValue = e.target.value
        handleChangeSelfInfo({selfInfo:{...selfData, [targetId]: targetValue}})
    }
    return (
        <div className="row-info">
            <TextInputField2
                id="minWage"
                prefix={"Minimum wage "}
                inputWidth={"70px"}
                value={minWage}
                onChange={handleInsuranceSelfInfoChange} 
                suffix={"VND"}
                />
            <TextInputField2
                id="social"
                prefix={"Social "}
                inputWidth={"30px"}
                value={social}
                onChange={handleInsuranceSelfInfoChange} 
                suffix={" % "}/>
            <TextInputField2
                id="health"
                prefix={"Health "}
                inputWidth={"30px"}
                value={health}
                onChange={handleInsuranceSelfInfoChange} 
                suffix={" % "}/>
            <TextInputField2
                id="unemployed"
                prefix={"Unemployed "}
                inputWidth={"30px"}
                value={unemployed}
                onChange={handleInsuranceSelfInfoChange} 
                suffix={" % "}/>
        </div>
    )
}

export default InsuranceSelfInfo