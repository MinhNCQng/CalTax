import { Form, Input, Space } from "antd";
const FamilyDependInfo = (props) => {
  




  return (
    <div className="margin-top-20px">
      <h1 className="group-label">Reduction based on family circumstances</h1>
      <div className="row-info">
        <Space>
          <Form.Item label="Personal" name={['dependant','personalSalary']}>
            <Input
              id="personalSalary"
              
              suffix={"VND"}
              style={{ width: "130px" }}
             
            />
          </Form.Item>
          <Form.Item label="Dependant" name={['dependant','dependantSalary']}>
            <Input
              id="dependantSalary"
              
              suffix={"VND"}
              style={{ width: "130px" }}
              
            />
          </Form.Item>
          <Form.Item label="Number of dependant: " name={['dependant','numOfDepedant']}>
            <Input
              id="dependantSalary"
              
              style={{ width: "35px" }}
             
            />
          </Form.Item>
        </Space>
      </div>
    </div>
  );
};
export default FamilyDependInfo;
