import CalcFunction from "../Calc/CalcFunction";
import CalcResult from "../Calc/CalcResult";
import FamilyDependInfo from "../FamilyDependInfo/FamilyDependInfo";
import IncomeInfo from "../IncomeInfo/IncomeInfo";
import InsuranceInfo from "../Insurance/InsuranceInfo";

import "./InFoSalaryForm.css";
const InfoSalaryForm = (props) => {
  return (
    <div className="salary-info">
      <IncomeInfo />
      <InsuranceInfo />
      <FamilyDependInfo />
      <CalcFunction />
      <CalcResult />
    </div>
  );
};

export default InfoSalaryForm;
