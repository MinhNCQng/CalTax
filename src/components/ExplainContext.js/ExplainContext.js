

import { createContext } from "react";


const defaultExplainValue = {
    grossSalary:"0", 
    netSalary:"0", 
    socialExpense:"0",
    socialExpensePercent:"",
    healthInsuranceExpense:"0", 
    healthInsurancePercent:"",
    unemploymentInsuranceExpense:"0", 
    unemploymentInsurancePercent:"",
    incomeBeforeTax:"0", 
    taxableIncome:"0", 
    personalIncomeTax:"0",
    personalReduction:"0",
    dependantReduction:"0",
    detailPersonalIncomeTax:[

    ],
    socialInsuranceCompanyPay:"0",
    healthInsuranceCompanyPay:"0",
    unemploymentInsuranceCompanyPay:"0",
    companyPayTotal:"0",
    socialInsuranceCompanyPayPercent:"",
    healthInsuranceCompanyPayPercent:"",
    unemploymentInsuranceCompanyPayPercent:"",

}
const ExplainContext = createContext()

export default ExplainContext;
export {defaultExplainValue}