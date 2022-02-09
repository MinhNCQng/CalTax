import { Table } from "antd";


const EmployerExplaination = (props) => {
  const { explainData } = props;
  const {
    grossSalary,
    socialInsuranceCompanyPayPercent,
    healthInsuranceCompanyPayPercent,
    unemploymentInsuranceCompanyPayPercent,
    socialInsuranceCompanyPay,
    healthInsuranceCompanyPay,
    unemploymentInsuranceCompanyPay,
    companyPayTotal,
  } = explainData;
  const columns = [
    {
      title: "item",
      dataIndex: "item",
      key: "item",
      align: "right",
    },
    {
      title: "value",
      dataIndex: "value",
      key: "value",
      align: "right",
    },
  ];

  const data = [
    {
      key: "1",
      item: <b>GROSS salary</b>,
      value: grossSalary,
    },
    {
      key: "2",
      item: (
        <b>Social insurance ({+socialInsuranceCompanyPayPercent * 100}%)</b>
      ),
      value: socialInsuranceCompanyPay,
    },
    {
      key: "3",
      item: (
        <b>Health insurance ({+healthInsuranceCompanyPayPercent * 100}%)</b>
      ),
      value: healthInsuranceCompanyPay,
    },
    {
      key: "4",
      item: (
        <b>
          Unemployment insurance (
          {+unemploymentInsuranceCompanyPayPercent * 100}% - Region minimum
          wage)
        </b>
      ),
      value: unemploymentInsuranceCompanyPay,
    },
    {
      key: "5",
      rowBold: true,
      item: <b>Total</b>,
      value: companyPayTotal,
    },
  ];
  return (
    <div className="margin-top-20px">
      <h1 className="group-label">Employer pay (USD)</h1>
      <Table
        
        style={{ width: "460px", backgroundColor:"rgba(0,0,0,1)" }}
        columns={columns}
        dataSource={data}
        showHeader={false}
        pagination={false}
        rowClassName={(record,index) => {return data[index].rowBold ? 'table-row-dark' :"" }}
      />

    </div>
  );
};

export default EmployerExplaination;
