import { useSelector } from "react-redux";
import "./CalcResult.css"
const CalcResult = props =>{
    const {grossSalary, netSalary} = useSelector(state=> state.resultCalc)
    const exchangeRateString = useSelector(state => state.income.exchangeUSDToVND)
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

function changeVNDtoUSDSalary(VNDSalary,rateChange){
    
    return (VNDSalary/rateChange).toFixed(2) || 0;
}

function convertNumberToCommaNumberString(number){
    const commaNumberString =  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return commaNumberString
}

function convertFloattoIntNumber(floatNumber){
    return parseInt(floatNumber)
}

export {convertNumberToCommaNumberString,convertFloattoIntNumber }
export default CalcResult;