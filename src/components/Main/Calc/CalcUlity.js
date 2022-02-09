function changeVNDtoUSDSalary(VNDSalary,rateChange){
    
    return (VNDSalary/rateChange).toFixed(2) || 0;
}

function convertNumberToCommaNumberString(number){
    const commaNumberString =  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return commaNumberString
}

function convertCommaNumberStringToNumberString(commaNumber){
    return commaNumber.replaceAll(",","")
}

function convertFloattoIntNumber(floatNumber){
    return parseInt(floatNumber)
}

export {convertNumberToCommaNumberString,convertFloattoIntNumber, changeVNDtoUSDSalary, convertCommaNumberStringToNumberString }