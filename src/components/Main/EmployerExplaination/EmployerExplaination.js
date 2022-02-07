import { useContext } from "react"
import ExplainContext from "../../ExplainContext.js/ExplainContext"
import DetailTable from "../Table/DetailTable"
import DetailTableRow from "../Table/DetailTableRow"

const EmployerExplaination = props =>{
    const {explaination}= useContext(ExplainContext)
    const {grossSalary, socialInsuranceCompanyPayPercent, healthInsuranceCompanyPayPercent, unemploymentInsuranceCompanyPayPercent, socialInsuranceCompanyPay, healthInsuranceCompanyPay, unemploymentInsuranceCompanyPay, companyPayTotal} = explaination

    return (
        <div className="margin-top-20px">
            <h1 className="group-label">Employer pay (USD)</h1>
            <DetailTable style= {[80,20]}>
                <DetailTableRow      value ={[<b>GROSS salary</b>,grossSalary]}/>
                <DetailTableRow      value ={[<b>Social insurance ({(+socialInsuranceCompanyPayPercent)*100}%)</b>,socialInsuranceCompanyPay]}/>
                <DetailTableRow      value ={[<b>Health insurance ({(+healthInsuranceCompanyPayPercent)*100}%)</b>,healthInsuranceCompanyPay]}/>
                <DetailTableRow      value ={[<b>Unemployment insurance ({(+unemploymentInsuranceCompanyPayPercent)*100}% - Region minimum wage)</b>,unemploymentInsuranceCompanyPay]}/>
                <DetailTableRow bold value ={[<b>Total</b>,companyPayTotal]}/>
            </DetailTable>
        </div>
    )
}

export default EmployerExplaination