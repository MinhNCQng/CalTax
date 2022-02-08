import TextInputField2 from "../../InputField/TextInputField2";

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

  const handleInsurancePayOptionChanged = (value) => {
    handleChangePayType({ payType: { ...payData, type: value } });
  };

  return (
    <div className="row-info">
      <span>Pay for </span>
      {types.map((element, index) => (
        <span key={index} className="region-option">
          <input
            type={"radio"}
            onChange={() => handleInsurancePayOptionChanged(element)}
            checked={element === type}
          />
          <label> {element} </label>
        </span>
      ))}
      <TextInputField2
        id="salary"
        onChange={handleInsurancePayTypeChanged}
        value={salary}
        inputWidth={"70px"}
        suffix={" VND "}
        disabled={isDisable}
      />
    </div>
  );
};

export default InsurancePayType;
