import CalcFunction from "../Calc/CalcFunction";
import CalcResult from "../Calc/CalcResult";
import FamilyDependInfo from "../FamilyDependInfo/FamilyDependInfo";
import IncomeInfo from "../IncomeInfo/IncomeInfo";
import InsuranceInfo from "../Insurance/InsuranceInfo";

import "./InFoSalaryForm.css";



const InfoSalaryForm = (props) => {
  const {salaryInfo, updateSalaryInfo} = props
  const handleChangeInComeInfo = (newValues) => {
    updateSalaryInfo({ income: newValues });
  };
  const handleChangeInsuranceInfo = (newValues) => {
    updateSalaryInfo({ insurance: newValues });
  };
  const handleChangeFamilyDependInfo = (newValues) => {
    updateSalaryInfo({ dependant: newValues });
  };

  const handleChangeResult = (newValues) => {
    updateSalaryInfo({ resultCalc: newValues });
  };
  return (
    <div className="salary-info">
      <IncomeInfo
        handleChangeInComeInfo={handleChangeInComeInfo}
        incomeData={salaryInfo.income}
      />
      <InsuranceInfo  handleChangeInsuranceInfo = {handleChangeInsuranceInfo} infoData={salaryInfo.insurance}/>
      <FamilyDependInfo  handleChangeFamilyDependInfo = {handleChangeFamilyDependInfo} infoData= {salaryInfo.dependant}/>
      <CalcFunction handleChangeResult = {handleChangeResult} infoData = {salaryInfo} />
      <CalcResult infoData = {{...salaryInfo.resultCalc, exchangeRateString:salaryInfo.income.exchangeUSDToVND }}/>
    </div>
  );
};

export default InfoSalaryForm;
