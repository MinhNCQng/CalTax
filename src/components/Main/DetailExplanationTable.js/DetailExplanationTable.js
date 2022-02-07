import EmployerExplaination from "../EmployerExplaination/EmployerExplaination";
import NetSalaryExplain from "../NetSalaryExplaination/NetSalaryExplain";
import TaxExplaination from "../TaxExplaination/TaxExplaination";

const DetailExplanationTable = props =>{
    return (
        <div className="detail-explanation">
                    <NetSalaryExplain/>
                    <TaxExplaination/>
                    <EmployerExplaination/>
        </div>
    )
}


export default DetailExplanationTable;