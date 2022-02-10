import { useState } from "react";
import { defaultExplainValue } from "../ExplainContext.js/ExplainContext";
import {
  convertFloattoIntNumber,
  convertNumberToCommaNumberString,
} from "./Calc/CalcUlity";

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
  const [explaination, setExplaination] = useState(defaultExplainValue);

  const handleSetExplanation = (resultObject) => {
    Object.keys(resultObject).forEach((element) => {
      if (element === "detailPersonalIncomeTax") {
        resultObject[element] = resultObject[element].map(
          (detailIncomeTaxElement) => {
            return convertNumberToCommaNumberString(
              convertFloattoIntNumber(detailIncomeTaxElement)
            );
          }
        );
        return;
      }
      if (element.includes("Percent")) return;
      resultObject[element] = convertNumberToCommaNumberString(
        convertFloattoIntNumber(resultObject[element])
      );
    });
    setExplaination(resultObject);
  };



  return (
    <main className="main-container">
      <div className="main-wrapper ">
        <InfoSalaryForm
          setSalaryInfo={setSalaryInfo}
          salaryInfo={salaryInfo}
          handleSetExplanation={handleSetExplanation}
        />
        <DetailExplanationTable explaination={explaination} />
      </div>
    </main>
  );
};

export default Main;
