import EmployerExplaination from "../EmployerExplaination/EmployerExplaination";
import NetSalaryExplain from "../NetSalaryExplaination/NetSalaryExplain";
import TaxExplaination from "../TaxExplaination/TaxExplaination";



const DetailExplanationTable = props =>{
    const {explaination} = props
    
    return (
        <div className="detail-explanation">
                    <NetSalaryExplain explainData = {explaination}/>
                    <TaxExplaination explainData = {explaination}/>
                    <EmployerExplaination explainData = {explaination}/>
        </div>
    )
}


export default DetailExplanationTable;