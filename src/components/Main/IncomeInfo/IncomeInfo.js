import {  Form, Input, Space } from "antd";

const IncomeInfo = (props) => {


  
  return (
    <div>
      <h1 className="group-label">Salary</h1>
      <Space size={"small"}>
        <Form.Item label="VND" name={['income','vndSalary']}>
          <Input
            style={{ width: "100px" }}
            
            id="vndSalary"
            
            className="margin-right-10px"
          />
        </Form.Item>

        <Form.Item label="USD: " name={['income','usdSalary']}>
          <Input
            style={{ width: "90px" }}
            
            id="usdSalary"
            
          />
        </Form.Item>

        <Form.Item label="Exchange rate: 1 USD" name={['income','exchangeUSDToVND']}>
          <Input
            style={{ width: "130px" }}
            
            id="exchangeUSDToVND"
            
            suffix=" VND"
          />
        </Form.Item>
      </Space>
    </div>
  );
};

export default IncomeInfo;
