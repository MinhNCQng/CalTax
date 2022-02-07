import { useContext } from "react"
import ExplainContext from "../../ExplainContext.js/ExplainContext"
import DetailAntTable from "../Table/DetailAntTable"
// import DetailTable from "../Table/DetailTable"
// import DetailTableRow from "../Table/DetailTableRow"

// const EmployerExplaination = props =>{
    // const {explaination}= useContext(ExplainContext)
    // const {grossSalary, socialInsuranceCompanyPayPercent, healthInsuranceCompanyPayPercent, unemploymentInsuranceCompanyPayPercent, socialInsuranceCompanyPay, healthInsuranceCompanyPay, unemploymentInsuranceCompanyPay, companyPayTotal} = explaination

//     return (
//         <div className="margin-top-20px">
//             <h1 className="group-label">Employer pay (USD)</h1>
//             <DetailTable style= {[80,20]}>
//                 <DetailTableRow      value ={[<b>GROSS salary</b>,grossSalary]}/>
//                 <DetailTableRow      value ={[<b>Social insurance ({(+socialInsuranceCompanyPayPercent)*100}%)</b>,socialInsuranceCompanyPay]}/>
//                 <DetailTableRow      value ={[<b>Health insurance ({(+healthInsuranceCompanyPayPercent)*100}%)</b>,healthInsuranceCompanyPay]}/>
//                 <DetailTableRow      value ={[<b>Unemployment insurance ({(+unemploymentInsuranceCompanyPayPercent)*100}% - Region minimum wage)</b>,unemploymentInsuranceCompanyPay]}/>
//                 <DetailTableRow bold value ={[<b>Total</b>,companyPayTotal]}/>
//             </DetailTable>
//         </div>
//     )
// }

const EmployerExplaination = props =>{
    const {explaination}= useContext(ExplainContext)
    const {grossSalary,
           socialInsuranceCompanyPayPercent, 
           healthInsuranceCompanyPayPercent, 
           unemploymentInsuranceCompanyPayPercent, 
           socialInsuranceCompanyPay,
           healthInsuranceCompanyPay,
           unemploymentInsuranceCompanyPay,
           companyPayTotal
           } = explaination
    const columns = [
        {
          title: "item",
          dataIndex: 'item',
          key: 'item',
        },
        {
          title: "value",
          dataIndex: 'value',
          key: 'value',
        },
      ];
    
      const data = [
        {
        key: '1',
        item: <b>GROSS salary</b>,
        value:grossSalary,
        },
        {
        key: '2',
        item: <b>Social insurance ({(+socialInsuranceCompanyPayPercent)*100}%)</b>,
        value:socialInsuranceCompanyPay,
        },
        {
        key: '3',
        item: <b>Health insurance ({(+healthInsuranceCompanyPayPercent)*100}%)</b>,
        value:healthInsuranceCompanyPay,
        },
        {
        key: '4',
        item: <b>Unemployment insurance ({(+unemploymentInsuranceCompanyPayPercent)*100}% - Region minimum wage)</b>,
        value:unemploymentInsuranceCompanyPay,
        },
        {
        key: '5',
        rowBold:true,
        item: <b>Total</b>,
        value:companyPayTotal,
        },

    ];
    return (
        <div className="margin-top-20px">
            <h1 className="group-label">Employer pay (USD)</h1>
            <DetailAntTable columns={columns} dataSource= {data}/>
        </div>
        
    )
}

export default EmployerExplaination