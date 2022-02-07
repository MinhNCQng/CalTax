
import { useContext } from "react"
import ExplainContext from "../../ExplainContext.js/ExplainContext"
import DetailAntTable from "../Table/DetailAntTable"
// import DetailTable from "../Table/DetailTable"
// import DetailTableRow from "../Table/DetailTableRow"
// const NetSalaryExplain = props =>{
//     const {explaination} = useContext(ExplainContext)
//     const {grossSalary, socialExpense, socialExpensePercent, healthInsurancePercent, unemploymentInsurancePercent, healthInsuranceExpense, unemploymentInsuranceExpense, incomeBeforeTax, personalReduction, dependantReduction, taxableIncome, personalIncomeTax, netSalary} = explaination
    
//     return (
//         <div>
//             <h1 className="group-label">Explain in detail (USD)</h1>
//             <DetailTable style= {[80,20]}>
//                 <DetailTableRow bold  value ={[<b>Gross salary</b>,grossSalary]}/>
//                 <DetailTableRow       value ={[<b>Social insurance ({(+socialExpensePercent)*100}%)</b>, "-" + socialExpense]}/>
//                 <DetailTableRow       value ={[<b>Health insurance ({(+healthInsurancePercent)*100}%)</b>, "-" + healthInsuranceExpense]}/>
//                 <DetailTableRow       value ={[<b>Unemployment insurance ({(+unemploymentInsurancePercent)*100}% - Region minimum wage)</b>, "-" + unemploymentInsuranceExpense]}/>
//                 <DetailTableRow bold  value ={[<b>Income before tax	</b>, incomeBeforeTax]}/>
//                 <DetailTableRow       value ={[<b>Reduction for personal</b>, "-" + personalReduction]}/>
//                 <DetailTableRow       value ={[<b>Reduction for dependant</b>,"-"+ dependantReduction]}/>
//                 <DetailTableRow bold  value ={[<b>Taxable income</b>, taxableIncome]}/>
//                 <DetailTableRow       value ={[<b>Personal income tax (*)</b>,"-" + personalIncomeTax]}/>
//                 <DetailTableRow bold  value ={[<>
//                                                     <b>NET salary</b>
//                                                     <br/>
//                                                     (Income before tax - Personal income tax)
//                                                 </>,netSalary]}/>
                
//             </DetailTable>
//         </div>
//     )
    
// }


const NetSalaryExplain = props =>{

    const {explaination} = useContext(ExplainContext)
    const {grossSalary, 
           socialExpense, 
           socialExpensePercent, 
           healthInsurancePercent, 
           unemploymentInsurancePercent, 
           healthInsuranceExpense, 
           unemploymentInsuranceExpense, 
           incomeBeforeTax, 
           personalReduction, 
           dependantReduction, 
           taxableIncome, 
           personalIncomeTax, 
           netSalary} = explaination
    const columns = [
        {
          title: 'item',
          dataIndex: 'item',
          key: 'item',
        },
        {
          title: 'value',
          dataIndex: 'value',
          key: 'value',
        }
      ];
    
    const data = [
        {
        key: '1',
        rowBold:true,
        item: <b>Gross salary</b>,
        value: grossSalary,
        },
        {
        key: '2',
        item: <b>Social insurance ({(+socialExpensePercent)*100}%)</b>,
        value: "-" + socialExpense,
        },
        {
        key: '3',
        item: <b>Health insurance ({(+healthInsurancePercent)*100}%)</b>,
        value: "-" + healthInsuranceExpense,
        },
        {
        key: '4',
        item: <b>Unemployment insurance ({(+unemploymentInsurancePercent)*100}% - Region minimum wage)</b>,
        value: "-" + unemploymentInsuranceExpense,
        },
        {
        key: '5',
        rowBold:true,
        item: <b>Income before tax	</b>,
        value: incomeBeforeTax,
        },
        {
        key: '6',
        item: <b>Reduction for personal</b>,
        value: "-" + personalReduction,
        },
        {
        key: '7',
        item: <b>Reduction for personal</b>,
        value: "-"+ dependantReduction,
        },
        {
        key: '8',
        rowBold:true,
        item: <b>Reduction for dependant</b>,
        value: taxableIncome,
        },
        {
        key: '9',
        item: <b>Personal income tax (*)</b>,
        value: "-" + personalIncomeTax,
        },
        {
        key: '10',
        rowBold:true,
        item: <>
                <b>NET salary</b>
                <br/>
                (Income before tax - Personal income tax)
            </>,
        value: netSalary,
        },
    ];
    return (
        <div>
            <h1 className="group-label">Explain in detail (USD)</h1>
            <DetailAntTable columns={columns} dataSource = {data}/>
        </div>
    )
}

export default NetSalaryExplain