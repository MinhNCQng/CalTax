function CalcGrossSalary(storeData){
    return (Number(storeData.income.vndSalary) + Number(storeData.income.usdSalary)*Number(storeData.income.exchangeUSDToVND))
}

function CalcSocialExpense(storeData){

}