import { useContext, useEffect  } from "react";

import ExplainContext from "../../ExplainContext.js/ExplainContext";

import "./CalcFunction.css"

const CalcFunction = props =>{


    const {handleSetExplanation} = useContext(ExplainContext)

    const handleGrosstoNetButtonCLicked = () =>{
        const {grossSalary, netSalary, ...restInfo} = CalcGrossToNetFunction(props.infoData);
        
        handleSetExplanation({grossSalary, netSalary, ...restInfo})

        props.handleChangeResult({grossSalary, netSalary})
        
    }
    const handleNettoGrossButtonCLicked = () =>{
        const {grossSalary, netSalary, ...restInfo} = CalcNetToGrossFunction(props.infoData);
        handleSetExplanation({grossSalary, netSalary, ...restInfo})
        props.handleChangeResult({grossSalary, netSalary})

    }
    useEffect(()=>{
        handleGrosstoNetButtonCLicked()  
    },[])
    return (
        <div className="calc-function-container">
            <button className="button" onClick={handleGrosstoNetButtonCLicked}>
                GROSS &#8594; NET
            </button>
            <button className="button" onClick={handleNettoGrossButtonCLicked}>
                NET &#8594; GROSS
            </button>
        </div>
    )
}




function CalcGrossToNetFunction(storeData, customGrossSalary){
    
    const grossSalary = (customGrossSalary|| (Number(storeData.income.vndSalary) + Number(storeData.income.usdSalary)*Number(storeData.income.exchangeUSDToVND)))

    const salaryPayForServices = storeData.insurance.payType.type === "full wage" ? grossSalary : Number(storeData.insurance.payType.salary)
    const socialExpensePercent = Number(storeData.insurance.selfInfo.social)/100
    const socialExpense = salaryPayForServices*socialExpensePercent
    const healthInsurancePercent = Number(storeData.insurance.selfInfo.health)/100
    const healthInsuranceExpense = salaryPayForServices*healthInsurancePercent
    const unemploymentInsurancePercent = Number(storeData.insurance.selfInfo.unemployed)/100
    const unemploymentInsuranceExpense = salaryPayForServices*unemploymentInsurancePercent
    
    
    const incomeBeforeTax = grossSalary - socialExpense - healthInsuranceExpense - unemploymentInsuranceExpense
    const personalReduction = Number(storeData.dependant.personalSalary)
    const dependantReduction = Number(storeData.dependant.dependantSalary)*Number(storeData.dependant.numOfDepedant)
    let taxableIncome = incomeBeforeTax - personalReduction - dependantReduction
    taxableIncome = taxableIncome < 0 ? 0: taxableIncome
    
    const {personalIncomeTax, detailPersonalIncomeTax}= getPersonalIncomeTax(taxableIncome)


    const netSalary = incomeBeforeTax - personalIncomeTax

    // Calculate Company Pay
    const socialInsuranceCompanyPayPercent = 0.255 - socialExpensePercent
    const socialInsuranceCompanyPay = grossSalary*socialInsuranceCompanyPayPercent
    
    const healthInsuranceCompanyPayPercent = 0.045 - healthInsurancePercent
    const healthInsuranceCompanyPay =  grossSalary*healthInsuranceCompanyPayPercent
    const unemploymentInsuranceCompanyPayPercent = (0.02 - unemploymentInsurancePercent)
    const unemploymentInsuranceCompanyPay = grossSalary*unemploymentInsuranceCompanyPayPercent
    const companyPayTotal = grossSalary + socialInsuranceCompanyPay + healthInsuranceCompanyPay + unemploymentInsuranceCompanyPay
    return {grossSalary,
            netSalary, 
            socialExpense,
            socialExpensePercent, 
            healthInsurancePercent,
            healthInsuranceExpense, 
            unemploymentInsuranceExpense, 
            unemploymentInsurancePercent,
            personalReduction, 
            dependantReduction, 
            incomeBeforeTax, 
            detailPersonalIncomeTax, 
            taxableIncome, 
            personalIncomeTax,
            socialInsuranceCompanyPay,
            healthInsuranceCompanyPay,
            unemploymentInsuranceCompanyPay,
            companyPayTotal,
            socialInsuranceCompanyPayPercent,
            healthInsuranceCompanyPayPercent,
            unemploymentInsuranceCompanyPayPercent,
        }
}

function CalcNetToGrossFunction (storeData){
    const netSlary = Number(storeData.income.vndSalary) + Number(storeData.income.usdSalary)*Number(storeData.income.exchangeUSDToVND)
    let leftBoundGrossSalary = netSlary
    let rightBoundCoeff = 2;
    let rightBoundGrossSalary = leftBoundGrossSalary*rightBoundCoeff
    while (CalcGrossToNetFunction(storeData,rightBoundGrossSalary) < leftBoundGrossSalary){
        rightBoundCoeff+=1
    }
    rightBoundGrossSalary = leftBoundGrossSalary*rightBoundCoeff
    while (true){
        let middleSalary = (leftBoundGrossSalary + rightBoundGrossSalary)/2
        let CalcResult = CalcGrossToNetFunction(storeData,middleSalary)
        let temp = CalcResult.netSalary
        if (Math.floor(temp) === netSlary) {return {...CalcResult,grossSalary: Math.floor(middleSalary), netSalary:netSlary}}
        if (temp < netSlary) leftBoundGrossSalary = middleSalary
        else  rightBoundGrossSalary = middleSalary
        
        
        
    } 


}

function getPersonalIncomeTax(salary){
    let personalIncomeTax = 0 ;
    let detailPersonalIncomeTax = []
    for (var salaryRangeTaxItem of salaryRangeTaxList){
        if (salaryRangeTaxItem.rightBound){

            let SalaryInRange = salaryRangeTaxItem.rightBound-(salaryRangeTaxItem.leftBound || 0)
            let temp = Math.min(SalaryInRange,salary)
            personalIncomeTax += temp*salaryRangeTaxItem.taxPercent
            detailPersonalIncomeTax.push(temp)
            salary-=temp;            
        } else {
            let temp = salary* salaryRangeTaxItem.taxPercent
            personalIncomeTax += temp
            detailPersonalIncomeTax.push(temp)
        }
    }
    return {personalIncomeTax, detailPersonalIncomeTax }
}





const salaryRangeTaxList = [
    {
        leftBound:undefined,
        rightBound:5000000,
        taxPercent: 0.05,
    },
    {
        leftBound:5000000,
        rightBound:10000000,
        taxPercent: 0.1,
    },
    {
        leftBound:10000000,
        rightBound:18000000,
        taxPercent: 0.15,
    },
    {
        leftBound:18000000,
        rightBound:32000000,
        taxPercent: 0.2,
    },
    {
        leftBound:32000000,
        rightBound:52000000,
        taxPercent: 0.25,
    },
    {
        leftBound:52000000,
        rightBound:80000000,
        taxPercent: 0.30,
    },
    {
        leftBound:80000000,
        rightBound:undefined,
        taxPercent: 0.35,
    },
]

export default CalcFunction