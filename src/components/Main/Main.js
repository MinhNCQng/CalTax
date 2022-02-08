import { useState } from "react";
import DetailExplanationTable from "./DetailExplanationTable.js/DetailExplanationTable";

import InfoSalaryForm from "./InfoSalaryForm/InFoSalaryForm";

import "./Main.css";

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

const Main = (props) => {
  const [salaryInfo, setSalaryInfo] = useState(initalSalaryInfo);
  
  const updateSalaryInfo = (fieldUpdate) => {
    setSalaryInfo((prev) => {
      return { ...prev, ...fieldUpdate };
    });
  };

  return (
    <main className="main-container">
      <div className="main-wrapper ">
        <InfoSalaryForm  salaryInfo = {salaryInfo} updateSalaryInfo ={updateSalaryInfo}/>
        <DetailExplanationTable />
      </div>
    </main>
  );
};

export default Main;
