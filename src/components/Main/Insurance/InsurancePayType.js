import { Col, Input, Radio, Row } from "antd";
import { Form } from "antd";

const InsurancePayType = (props) => {
  const { type } = props.payData;
  const types = ["full wage", "other"];
  const isDisable = type !== "other";




  return (
    <Row className="row-info" gutter={8}>
      <Input.Group compact>
        <Col>
          <Form.Item>
            <span>Pay for </span>
          </Form.Item>
        </Col>

        <Col>
          <Form.Item name={['insurance','payType','type']}>
            <Radio.Group
              
              
            >
              {types.map((element, index) => (
                <Radio key={index} value={element}>
                  {element}
                </Radio>
              ))}
            </Radio.Group>
          </Form.Item>
        </Col>
        <Col>
          <Form.Item name={['insurance','payType','salary']}>
            <Input
              id="salary"
              suffix={"VND"}
              style={{ width: "130px" }}
              
              disabled={isDisable}
              
            />
          </Form.Item>
        </Col>
      </Input.Group>
    </Row>
  );
};

export default InsurancePayType;
