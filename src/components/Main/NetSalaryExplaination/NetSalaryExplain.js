import { Table } from "antd";


const NetSalaryExplain = (props) => {
  const { explainData } = props;
  const {
    grossSalary,
    socialExpense,
    socialExpensePercent,
    healthInsurancePercent,
    unemploymentInsurancePercent,
    healthInsuranceExpense,
    unemploymentInsuranceExpense,
    incomeBeforeTax,
    personalReduction,
    dependantReduction,
    taxableIncome,
    personalIncomeTax,
    netSalary,
  } = explainData;
  const columns = [
    {
      title: "item",
      dataIndex: "item",
      key: "item",
    },
    {
      title: "value",
      dataIndex: "value",
      key: "value",
    },
  ];

  const data = [
    {
      key: "1",
      rowBold: true,
      item: <b>Gross salary</b>,
      value: grossSalary,
    },
    {
      key: "2",
      item: <b>Social insurance ({+socialExpensePercent * 100}%)</b>,
      value: "-" + socialExpense,
    },
    {
      key: "3",
      item: <b>Health insurance ({+healthInsurancePercent * 100}%)</b>,
      value: "-" + healthInsuranceExpense,
    },
    {
      key: "4",
      item: (
        <b>
          Unemployment insurance ({+unemploymentInsurancePercent * 100}% -
          Region minimum wage)
        </b>
      ),
      value: "-" + unemploymentInsuranceExpense,
    },
    {
      key: "5",
      rowBold: true,
      item: <b>Income before tax </b>,
      value: incomeBeforeTax,
    },
    {
      key: "6",
      item: <b>Reduction for personal</b>,
      value: "-" + personalReduction,
    },
    {
      key: "7",
      item: <b>Reduction for personal</b>,
      value: "-" + dependantReduction,
    },
    {
      key: "8",
      rowBold: true,
      item: <b>Reduction for dependant</b>,
      value: taxableIncome,
    },
    {
      key: "9",
      item: <b>Personal income tax (*)</b>,
      value: "-" + personalIncomeTax,
    },
    {
      key: "10",
      rowBold: true,
      item: (
        <>
          <b>NET salary</b>
          <br />
          (Income before tax - Personal income tax)
        </>
      ),
      value: netSalary,
    },
  ];
  return (
    <div>
      <h1 className="group-label">Explain in detail (USD)</h1>
      <Table
        style={{ width: "460px", backgroundColor: "rgba(0,0,0,1)" }}
        columns={columns}
        dataSource={data}
        showHeader={false}
        pagination={false}
        rowClassName={(record, index) => {
          return data[index].rowBold ? "table-row-dark" : "";
        }}
      />
    </div>
  );
};

export default NetSalaryExplain;
