import { useContext } from "react"
import ExplainContext from "../../ExplainContext.js/ExplainContext"
import DetailAntTable from "../Table/DetailAntTable"
// import DetailTable from "../Table/DetailTable"
// import DetailTableRow from "../Table/DetailTableRow"

// import TaxData from "./TaxData"
// const TaxExplaination = props =>{
//     const {explaination} = useContext(ExplainContext)
//     return (
//         <div className="margin-top-20px">
//             <h1 className="group-label">(*) Chi tiết thuế thu nhập cá nhân (VND)</h1>
//             <DetailTable style= {[63,18]}>
//                 {TaxData.map((element,index)=>{
//                     if (index !== 0) element.value[2] =  explaination.detailPersonalIncomeTax[index-1] || 0
//                     return <DetailTableRow key={index} bold= {element.boldRow}  value = {element.value}/>
//                 })}
                
//             </DetailTable>
//         </div>
//     )
// }

const TaxExplaination = props => {

    const {explaination:{detailPersonalIncomeTax}} = useContext(ExplainContext)

    const columns = [
        {
          title: <b>The taxable</b>,
          dataIndex: 'taxable',
          key: 'taxable',
        },
        {
          title: <b>The tax rate</b>,
          dataIndex: 'taxrate',
          key: 'taxrate',
        },
        {
          title: <b>The payment</b>,
          dataIndex: 'payment',
          key: 'payment',
        },
      ];
    
      const data = [
        {
        key: '1',
        taxable:  "To 5 million VND",
        taxrate:"5%",
        payment: detailPersonalIncomeTax[0] || "0",
        },
        {
        key: '2',
        taxable: "Upper 5 million VND to 10 million VND",
        taxrate:"10%",
        payment: detailPersonalIncomeTax[1] || "0",
        },
        {
        key: '3',
        taxable: "Upper 10 million VND to 18 million VND",
        taxrate:"15%",
        payment: detailPersonalIncomeTax[2] || "0",
        },
        {
        key: '4',
        taxable: "Upper 18 million VND to 32 million VND",
        taxrate:"20%",
        payment: detailPersonalIncomeTax[3] || "0",
        },
        {
        key: '5',
        taxable: "Upper 32 million VND to 52 million VND",
        taxrate: "25%",
        payment: detailPersonalIncomeTax[4] || "0",
        },
        {
        key: '6',
        taxable: "Upper 52 million VND to 80 million VND",
        taxrate: "30%",
        payment: detailPersonalIncomeTax[5] || "0",
        },
        {
        key: '7',
        taxable: "Upper 80 million VND",
        taxrate: "35%",
        payment: detailPersonalIncomeTax[6] || "0",
        },
    ];
    return (
        <div className="margin-top-20px">
            <h1 className="group-label">(*) Detail of personal income tax (USD)</h1>
            <DetailAntTable columns={columns} dataSource = {data} showTableHeader/>
        </div>
    )
}

export default TaxExplaination