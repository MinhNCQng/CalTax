import "./CalcResult.css"
import { changeVNDtoUSDSalary, convertFloattoIntNumber, convertNumberToCommaNumberString } from "./CalcUlity"
const CalcResult = props =>{
    const {grossSalary, netSalary,exchangeRateString} = props.infoData
    
    const exchangeRateNumber = Number(exchangeRateString)
    const commaGrossSalary = convertNumberToCommaNumberString(convertFloattoIntNumber(grossSalary))
    const commaNetSalary = convertNumberToCommaNumberString(convertFloattoIntNumber(netSalary))
    const grossUSDSalary = changeVNDtoUSDSalary(grossSalary,exchangeRateNumber)
    const netUSDSalary = changeVNDtoUSDSalary(netSalary,exchangeRateNumber)


    return (
        <div className="calc-result text-align-right">
            <b>GROSS</b> : {commaGrossSalary} (VND) ≈ {grossUSDSalary} (USD)
            <br/>
            <b>NET</b> : {commaNetSalary} ≈ {netUSDSalary} (USD)
        </div>
    )

}


export default CalcResult;