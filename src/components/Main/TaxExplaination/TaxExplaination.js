import { Table } from "antd";

const TaxExplaination = (props) => {
  const {
    explainData: { detailPersonalIncomeTax },
  } = props;

  const columns = [
    {
      title: <b>The taxable</b>,
      dataIndex: "taxable",
      key: "taxable",
    },
    {
      title: <b>The tax rate</b>,
      dataIndex: "taxrate",
      key: "taxrate",
    },
    {
      title: <b>The payment</b>,
      dataIndex: "payment",
      key: "payment",
    },
  ];

  const data = [
    {
      key: "1",
      taxable: "To 5 million VND",
      taxrate: "5%",
      payment: detailPersonalIncomeTax[0] || "0",
    },
    {
      key: "2",
      taxable: "Upper 5 million VND to 10 million VND",
      taxrate: "10%",
      payment: detailPersonalIncomeTax[1] || "0",
    },
    {
      key: "3",
      taxable: "Upper 10 million VND to 18 million VND",
      taxrate: "15%",
      payment: detailPersonalIncomeTax[2] || "0",
    },
    {
      key: "4",
      taxable: "Upper 18 million VND to 32 million VND",
      taxrate: "20%",
      payment: detailPersonalIncomeTax[3] || "0",
    },
    {
      key: "5",
      taxable: "Upper 32 million VND to 52 million VND",
      taxrate: "25%",
      payment: detailPersonalIncomeTax[4] || "0",
    },
    {
      key: "6",
      taxable: "Upper 52 million VND to 80 million VND",
      taxrate: "30%",
      payment: detailPersonalIncomeTax[5] || "0",
    },
    {
      key: "7",
      taxable: "Upper 80 million VND",
      taxrate: "35%",
      payment: detailPersonalIncomeTax[6] || "0",
    },
  ];
  return (
    <div className="margin-top-20px">
      <h1 className="group-label">(*) Detail of personal income tax (USD)</h1>
      <Table
        style={{ width: "460px", backgroundColor: "rgba(0,0,0,1)" }}
        columns={columns}
        dataSource={data}
        pagination={false}
        rowClassName={(record, index) => {
          return data[index].rowBold ? "table-row-dark" : "";
        }}
      />
    </div>
  );
};

export default TaxExplaination;
