import { useState } from "react";
import CalcFunction from "../Calc/CalcFunction";
import CalcResult from "../Calc/CalcResult";
import FamilyDependInfo from "../FamilyDependInfo/FamilyDependInfo";
import IncomeInfo from "../IncomeInfo/IncomeInfo";
import InsuranceInfo from "../Insurance/InsuranceInfo";

import "./InFoSalaryForm.css";

const initalSalaryInfo = {
  income: {
    vndSalary: "10000000",
    usdSalary: "0",
    exchangeUSDToVND: "23300",
  },
  insurance: {
    selfInfo: {
      minWage: "1490000",
      social: "8",
      health: "1.5",
      unemployed: "1",
    },
    region: "I",
    payType: {
      type: "full wage",
      salary: "0",
    },
  },
  dependant: {
    personalSalary: "11000000",
    dependantSalary: "4400000",
    numOfDepedant: "0",
  },
  resultCalc: {
    grossSalary: 0,
    netSalary: 0,
  },
};

const InfoSalaryForm = (props) => {
  const [salaryInfo, setSalaryInfo] = useState(initalSalaryInfo);

  const handleChangeInComeInfo = (newValues) => {
    setSalaryInfo((prev) => {
      return { ...prev, income: newValues };
    });
  };
  const handleChangeInsuranceInfo = (newValues) => {
    setSalaryInfo((prev) => {
      return { ...prev, insurance: newValues };
    });
  };
  const handleChangeFamilyDependInfo = (newValues) => {
    setSalaryInfo((prev) => {
      return { ...prev, dependant: newValues };
    });
  };

  const handleChangeResult = (newValues) =>{
    setSalaryInfo((prev) => {
      return { ...prev, resultCalc: newValues };
    });
  }
  return (
    <div className="salary-info">
      <IncomeInfo
        handleChangeInComeInfo={handleChangeInComeInfo}
        infoData={salaryInfo.income}
      />
      <InsuranceInfo  handleChangeInsuranceInfo = {handleChangeInsuranceInfo} infoData={salaryInfo.insurance}/>
      <FamilyDependInfo  handleChangeFamilyDependInfo = {handleChangeFamilyDependInfo} infoData= {salaryInfo.dependant}/>
      <CalcFunction handleChangeResult = {handleChangeResult} infoData = {salaryInfo} />
      <CalcResult infoData = {{...salaryInfo.resultCalc, exchangeRateString:salaryInfo.income.exchangeUSDToVND }}/>
    </div>
  );
};

export default InfoSalaryForm;
