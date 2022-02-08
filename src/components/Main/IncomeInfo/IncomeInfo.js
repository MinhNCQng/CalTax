import TextInputField2 from "../../InputField/TextInputField2";

const IncomeInfo = props => {

    const {incomeData, handleChangeInComeInfo} = props;
    
    const handleIncomInfoChange = (event) => {
        const targetId = event.target.id
        
        handleChangeInComeInfo({...incomeData,[targetId]: event.target.value})
    }
    return (
        <div className="margin-top-20px">
            <h1 className="group-label">Income</h1>
            <div className="row-info">
                <TextInputField2
                    prefix={"VND: "} 
                    inputWidth={"100px"} 
                    id="vndSalary"
                    value={incomeData.vndSalary} 
                    onChange={handleIncomInfoChange}/>
                <TextInputField2 
                    id="usdSalary"
                    prefix={"USD: "} 
                    inputWidth={"60px"} 
                    value={incomeData.usdSalary} 
                    onChange={handleIncomInfoChange}/>
                <TextInputField2 
                    id="exchangeUSDToVND"
                    prefix={"Exchange rate: 1 USD = "} 
                    inputWidth={"60px"} 
                    value={incomeData.exchangeUSDToVND} 
                    onChange={handleIncomInfoChange}
                    suffix={" VND"}/>
            </div>
        </div>
    )
}

export default IncomeInfo;