import { Form } from "antd";
import CalcFunction from "../Calc/CalcFunction";
import CalcResult from "../Calc/CalcResult";
import FamilyDependInfo from "../FamilyDependInfo/FamilyDependInfo";
import IncomeInfo from "../IncomeInfo/IncomeInfo";
import InsuranceInfo from "../Insurance/InsuranceInfo";

import "./InFoSalaryForm.css";

const InfoSalaryForm = (props) => {
  const { salaryInfo, updateSalaryInfo, handleSetExplanation } = props;
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
      <Form>
        <IncomeInfo
          handleChangeInComeInfo={handleChangeInComeInfo}
          incomeData={salaryInfo.income}
        />
        <InsuranceInfo
          handleChangeInsuranceInfo={handleChangeInsuranceInfo}
          infoData={salaryInfo.insurance}
        />
        <FamilyDependInfo
          handleChangeFamilyDependInfo={handleChangeFamilyDependInfo}
          infoData={salaryInfo.dependant}
        />

        <CalcFunction
          handleChangeResult={handleChangeResult}
          infoData={salaryInfo}
          handleSetExplanation = {handleSetExplanation}
        />
      </Form>
      <CalcResult
        infoData={{
          ...salaryInfo.resultCalc,
          exchangeRateString: salaryInfo.income.exchangeUSDToVND,
        }}
      />
    </div>
  );
};

export default InfoSalaryForm;
