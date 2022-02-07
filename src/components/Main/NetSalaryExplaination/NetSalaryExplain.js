
import { useContext } from "react"
import ExplainContext from "../../ExplainContext.js/ExplainContext"
import DetailTable from "../Table/DetailTable"
import DetailTableRow from "../Table/DetailTableRow"
const NetSalaryExplain = props =>{
    const {explaination} = useContext(ExplainContext)
    const {grossSalary, socialExpense, socialExpensePercent, healthInsurancePercent, unemploymentInsurancePercent, healthInsuranceExpense, unemploymentInsuranceExpense, incomeBeforeTax, personalReduction, dependantReduction, taxableIncome, personalIncomeTax, netSalary} = explaination
    
    return (
        <div>
            <h1 className="group-label">Explain in detail (USD)</h1>
            <DetailTable style= {[80,20]}>
                <DetailTableRow bold  value ={[<b>Gross salary</b>,grossSalary]}/>
                <DetailTableRow       value ={[<b>Social insurance ({(+socialExpensePercent)*100}%)</b>, "-" + socialExpense]}/>
                <DetailTableRow       value ={[<b>Health insurance ({(+healthInsurancePercent)*100}%)</b>, "-" + healthInsuranceExpense]}/>
                <DetailTableRow       value ={[<b>Unemployment insurance ({(+unemploymentInsurancePercent)*100}% - Region minimum wage)</b>, "-" + unemploymentInsuranceExpense]}/>
                <DetailTableRow bold  value ={[<b>Income before tax	</b>, incomeBeforeTax]}/>
                <DetailTableRow       value ={[<b>Reduction for personal</b>, "-" + personalReduction]}/>
                <DetailTableRow       value ={[<b>Reduction for dependant</b>,"-"+ dependantReduction]}/>
                <DetailTableRow bold  value ={[<b>Taxable income</b>, taxableIncome]}/>
                <DetailTableRow       value ={[<b>Personal income tax (*)</b>,"-" + personalIncomeTax]}/>
                <DetailTableRow bold  value ={[<>
                                                    <b>NET salary</b>
                                                    <br/>
                                                    (Income before tax - Personal income tax)
                                                </>,netSalary]}/>
                
            </DetailTable>
        </div>
    )
    
}

export default NetSalaryExplain