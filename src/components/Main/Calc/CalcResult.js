import "./CalcResult.css"
import { changeVNDtoUSDSalary, convertCommaNumberStringToNumberString, convertFloattoIntNumber, convertNumberToCommaNumberString } from "./CalcUlity"
const CalcResult = props =>{
    const {explainData} = props
    const {grossSalary, netSalary,exchangeRateString} = explainData
    
    const exchangeRateNumber = Number(convertCommaNumberStringToNumberString(exchangeRateString))
    

    const grossDollarSalaryString = convertCommaNumberStringToNumberString(grossSalary)
    const grossDollarSalary = changeVNDtoUSDSalary(+grossDollarSalaryString,exchangeRateNumber)

    const netDollarSalaryString = convertCommaNumberStringToNumberString(netSalary)
    const netDollarSalary = changeVNDtoUSDSalary(+netDollarSalaryString,exchangeRateNumber)

    return (
        <div className="calc-result text-align-right">
            <b>GROSS</b> : {grossSalary} (VND) ≈ {grossDollarSalary} (USD)
            <br/>
            <b>NET</b> : {netSalary} ≈ {netDollarSalary}(USD)
        </div>
    )

}


export default CalcResult;