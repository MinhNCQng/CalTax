import { Input, Radio } from "antd";

const InsurancePayType = (props) => {
  const { type, salary } = props.payData;
  const types = ["full wage", "other"];
  const isDisable = type !== "other";

  const { handleChangePayType, payData } = props;

  const handleInsurancePayTypeChanged = (e) => {
    const targetId = e.target.id;
    handleChangePayType({
      payType: { ...payData, [targetId]: e.target.value },
    });
  };

  const handleInsurancePayOptionChanged = (e) => {
    const value = e.target.value
    handleChangePayType({ payType: { ...payData, type: value } });
  };

  return (
    <div className="row-info">
      <span>Pay for </span>
      <Radio.Group value={type} onChange = {handleInsurancePayOptionChanged}>
      {types.map((element, index) => (
        <Radio key={index} value={element}>{element}</Radio>
      ))}
      </Radio.Group>
      <Input
        id="salary"
        suffix={"VND"}
        style={{ width: "130px" }}
        defaultValue={0}
        onChange={handleInsurancePayTypeChanged}
        disabled={isDisable}
        value={salary}
      />
    </div>
  );
};

export default InsurancePayType;
