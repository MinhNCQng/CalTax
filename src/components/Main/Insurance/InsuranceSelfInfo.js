import { Form, Input, Row, Space } from "antd";

const InsuranceSelfInfo = (props) => {

 


  return (
    <div className="row-info">
      <Space size={"small"}>
        <Form.Item label="Minimum wage: " name={['insurance','selfInfo','minWage']}>
          <Input
            id="minWage"
            
            style={{ width: "150px" }}

           
            suffix="VND"
          />
        </Form.Item>
        <Form.Item label="Social" name={['insurance','selfInfo','social']} >
          <Input
            id="social"
            
            style={{ width: "60px" }}

            
            suffix=" % "
          />
        </Form.Item>
        <Form.Item label ="Health: " name={['insurance','selfInfo','health']} >
          <Input
            id="health"
        
            style={{ width: "60px" }}
   
            
            suffix=" % "
          />
        </Form.Item>
        <Form.Item label="Unemployed: " name={['insurance','selfInfo','unemployed']}>
          <Input
            id="unemployed"
            style={{ width: "60px" }}
           
            
            suffix=" %"
          />
        </Form.Item>
      </Space>
    </div>
  );
};

export default InsuranceSelfInfo;
