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

export {convertNumberToCommaNumberString,convertFloattoIntNumber, changeVNDtoUSDSalary }