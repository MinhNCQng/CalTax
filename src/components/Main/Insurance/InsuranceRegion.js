
import React from "react";

import { Form, Radio, Space } from "antd";

const InsuranceRegion = (props) => {
  
  const regions = ["I", "II", "III", "IV"];

  
  return (
    <div className="row-info">
      

      <Form.Item label={"Region"} name={['insurance','region']}>
        <Radio.Group  >
          <Space>
            {regions.map((element, index) => (
              <Radio key={index} value={element}>
                {element}
              </Radio>
            ))}
          </Space>
        </Radio.Group>
      </Form.Item>
    </div>
  );
};
export default InsuranceRegion;
