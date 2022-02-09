import { Button, Form, Space } from "antd";
import {  useEffect } from "react";



import "./CalcFunction.css";

const CalcFunction = (props) => {

  const {infoData , handleSetExplanation} = props
  const handleGrosstoNetButtonCLicked = () => {
    const { grossSalary, netSalary, ...restInfo } = CalcGrossToNetFunction(
      infoData
    );

    handleSetExplanation({ grossSalary, netSalary, ...restInfo });
  };
  const handleNettoGrossButtonCLicked = () => {
    const { grossSalary, netSalary, ...restInfo } = CalcNetToGrossFunction(
      infoData
    );

    handleSetExplanation({ grossSalary, netSalary, ...restInfo });
  };
  useEffect(() => {
    handleGrosstoNetButtonCLicked();
  }, []);
  return (
    <div className="calc-function-container">
      <Form.Item>
        <Space>
          <Button type="primary" onClick={handleGrosstoNetButtonCLicked}>
            GROSS &#8594; NET
          </Button>
          <Button type="primary" onClick={handleNettoGrossButtonCLicked}>
            NET &#8594; GROSS
          </Button>
        </Space>
      </Form.Item>
    </div>
  );
};

function CalcGrossToNetFunction(storeData, customGrossSalary) {
  const exchangeRateString = storeData.income.exchangeUSDToVND;
  const grossSalary = calcGrossSalary(customGrossSalary, storeData);

  const salaryPayForServices =
    storeData.insurance.payType.type === "full wage"
      ? grossSalary
      : Number(storeData.insurance.payType.salary);
  const { socialExpense, socialExpensePercent } = calcSocialExpense(
    storeData,
    salaryPayForServices
  );
  const { healthInsuranceExpense, healthInsurancePercent } =
    calcInsuranceHealth(storeData, salaryPayForServices);
  const { unemploymentInsuranceExpense, unemploymentInsurancePercent } =
    calcEmploymentExpense(storeData, salaryPayForServices);

  const incomeBeforeTax =
    grossSalary -
    socialExpense -
    healthInsuranceExpense -
    unemploymentInsuranceExpense;
  const personalReduction = Number(storeData.dependant.personalSalary);
  const dependantReduction =
    Number(storeData.dependant.dependantSalary) *
    Number(storeData.dependant.numOfDepedant);
  let taxableIncome = incomeBeforeTax - personalReduction - dependantReduction;
  taxableIncome = taxableIncome < 0 ? 0 : taxableIncome;

  const { personalIncomeTax, detailPersonalIncomeTax } =
    getPersonalIncomeTax(taxableIncome);

  const netSalary = incomeBeforeTax - personalIncomeTax;

  // Calculate Company Pay
  const {
    socialInsuranceCompanyPay,
    healthInsuranceCompanyPay,
    unemploymentInsuranceCompanyPay,
    companyPayTotal,
    socialInsuranceCompanyPayPercent,
    healthInsuranceCompanyPayPercent,
    unemploymentInsuranceCompanyPayPercent,
  } = calcCompanyPayExpense(
    socialExpensePercent,
    grossSalary,
    healthInsurancePercent,
    unemploymentInsurancePercent
  );
  return {
    grossSalary,
    netSalary,
    exchangeRateString,
    socialExpense,
    socialExpensePercent,
    healthInsurancePercent,
    healthInsuranceExpense,
    unemploymentInsuranceExpense,
    unemploymentInsurancePercent,
    personalReduction,
    dependantReduction,
    incomeBeforeTax,
    detailPersonalIncomeTax,
    taxableIncome,
    personalIncomeTax,
    socialInsuranceCompanyPay,
    healthInsuranceCompanyPay,
    unemploymentInsuranceCompanyPay,
    companyPayTotal,
    socialInsuranceCompanyPayPercent,
    healthInsuranceCompanyPayPercent,
    unemploymentInsuranceCompanyPayPercent,
  };
}

function calcCompanyPayExpense(
  socialExpensePercent,
  grossSalary,
  healthInsurancePercent,
  unemploymentInsurancePercent
) {
  const socialInsuranceCompanyPayPercent = 0.255 - socialExpensePercent;
  const socialInsuranceCompanyPay =
    grossSalary * socialInsuranceCompanyPayPercent;

  const healthInsuranceCompanyPayPercent = 0.045 - healthInsurancePercent;
  const healthInsuranceCompanyPay =
    grossSalary * healthInsuranceCompanyPayPercent;
  const unemploymentInsuranceCompanyPayPercent =
    0.02 - unemploymentInsurancePercent;
  const unemploymentInsuranceCompanyPay =
    grossSalary * unemploymentInsuranceCompanyPayPercent;
  const companyPayTotal =
    grossSalary +
    socialInsuranceCompanyPay +
    healthInsuranceCompanyPay +
    unemploymentInsuranceCompanyPay;
  return {
    socialInsuranceCompanyPay,
    healthInsuranceCompanyPay,
    unemploymentInsuranceCompanyPay,
    companyPayTotal,
    socialInsuranceCompanyPayPercent,
    healthInsuranceCompanyPayPercent,
    unemploymentInsuranceCompanyPayPercent,
  };
}

function calcEmploymentExpense(storeData, salaryPayForServices) {
  const unemploymentInsurancePercent =
    Number(storeData.insurance.selfInfo.unemployed) / 100;
  const unemploymentInsuranceExpense =
    salaryPayForServices * unemploymentInsurancePercent;
  return { unemploymentInsuranceExpense, unemploymentInsurancePercent };
}

function calcInsuranceHealth(storeData, salaryPayForServices) {
  const healthInsurancePercent =
    Number(storeData.insurance.selfInfo.health) / 100;
  const healthInsuranceExpense = salaryPayForServices * healthInsurancePercent;
  return { healthInsuranceExpense, healthInsurancePercent };
}

function calcSocialExpense(storeData, salaryPayForServices) {
  const socialExpensePercent =
    Number(storeData.insurance.selfInfo.social) / 100;
  const socialExpense = salaryPayForServices * socialExpensePercent;
  return { socialExpense, socialExpensePercent };
}

function calcGrossSalary(customGrossSalary, storeData) {
  return (
    customGrossSalary ||
    Number(storeData.income.vndSalary) +
      Number(storeData.income.usdSalary) *
        Number(storeData.income.exchangeUSDToVND)
  );
}

function CalcNetToGrossFunction(storeData) {
  const netSlary = calcNetSalary(storeData);
  let leftBoundGrossSalary = netSlary;
  let rightBoundGrossSalary = findRightBoundSalary(
    leftBoundGrossSalary,
    storeData
  );
  while (true) {
    let middleSalary = (leftBoundGrossSalary + rightBoundGrossSalary) / 2;
    let CalcResult = CalcGrossToNetFunction(storeData, middleSalary);
    let temp = CalcResult.netSalary;
    if (Math.floor(temp) === netSlary) {
      return {
        ...CalcResult,
        grossSalary: Math.floor(middleSalary),
        netSalary: netSlary,
      };
    }
    if (temp < netSlary) leftBoundGrossSalary = middleSalary;
    else rightBoundGrossSalary = middleSalary;
  }
}

function findRightBoundSalary(leftBoundGrossSalary, storeData) {
  let rightBoundCoeff = 2;
  let rightBoundGrossSalary = leftBoundGrossSalary * rightBoundCoeff;
  while (
    CalcGrossToNetFunction(storeData, rightBoundGrossSalary) <
    leftBoundGrossSalary
  ) {
    rightBoundCoeff += 1;
  }
  rightBoundGrossSalary = leftBoundGrossSalary * rightBoundCoeff;
  return rightBoundGrossSalary;
}

function calcNetSalary(storeData) {
  return (
    Number(storeData.income.vndSalary) +
    Number(storeData.income.usdSalary) *
      Number(storeData.income.exchangeUSDToVND)
  );
}

function getPersonalIncomeTax(salary) {
  let personalIncomeTax = 0;
  let detailPersonalIncomeTax = [];
  for (var salaryRangeTaxItem of salaryRangeTaxList) {
    if (salaryRangeTaxItem.rightBound) {
      let SalaryInRange =
        salaryRangeTaxItem.rightBound - (salaryRangeTaxItem.leftBound || 0);
      let temp = Math.min(SalaryInRange, salary);
      personalIncomeTax += temp * salaryRangeTaxItem.taxPercent;
      detailPersonalIncomeTax.push(temp);
      salary -= temp;
    } else {
      let temp = salary * salaryRangeTaxItem.taxPercent;
      personalIncomeTax += temp;
      detailPersonalIncomeTax.push(temp);
    }
  }
  return { personalIncomeTax, detailPersonalIncomeTax };
}

const salaryRangeTaxList = [
  {
    leftBound: undefined,
    rightBound: 5000000,
    taxPercent: 0.05,
  },
  {
    leftBound: 5000000,
    rightBound: 10000000,
    taxPercent: 0.1,
  },
  {
    leftBound: 10000000,
    rightBound: 18000000,
    taxPercent: 0.15,
  },
  {
    leftBound: 18000000,
    rightBound: 32000000,
    taxPercent: 0.2,
  },
  {
    leftBound: 32000000,
    rightBound: 52000000,
    taxPercent: 0.25,
  },
  {
    leftBound: 52000000,
    rightBound: 80000000,
    taxPercent: 0.3,
  },
  {
    leftBound: 80000000,
    rightBound: undefined,
    taxPercent: 0.35,
  },
];

export default CalcFunction;
