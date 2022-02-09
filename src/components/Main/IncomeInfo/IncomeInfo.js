import {  Input,  Space } from "antd";


const IncomeInfo = (props) => {
  const { incomeData, handleChangeInComeInfo } = props;

  const handleIncomInfoChange = (event) => {
    const targetId = event.target.id;

    handleChangeInComeInfo({ ...incomeData, [targetId]: event.target.value });
  };
  return (
    <div className="margin-top-20px">
      <h1 className="group-label">Income</h1>
      <div className="row-info">
          <Space size={"small"}>
            <Input
              prefix="VND: "
              style={{ width: "130px" }}
              defaultValue={10000000}
              value={incomeData.vndSalary}
              id="vndSalary"
              onChange={handleIncomInfoChange}
            />
            <Input
              prefix="USD: "
              style={{ width: "90px" }}
              defaultValue={10000000}
              value={incomeData.usdSalary}
              id="usdSalary"
              onChange={handleIncomInfoChange}
            />
            <Input
              prefix="Exchange rate: 1 USD = "
              style={{ width: "300px" }}
              defaultValue={10000000}
              value={incomeData.exchangeUSDToVND}
              id="exchangeUSDToVND"
              onChange={handleIncomInfoChange}
              suffix=" VND"
            />
          </Space>
      </div>
    </div>
  );
};

export default IncomeInfo;
