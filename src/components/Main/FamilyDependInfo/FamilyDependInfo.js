import TextInputField from "../../InputField/TextInputField";

import TextInputField2 from "../../InputField/TextInputField2";

const FamilyDependInfo = (props) => {
  const { infoData, handleChangeFamilyDependInfo } = props;
  const { personalSalary, dependantSalary, numOfDepedant } = infoData;
  console.log(infoData);
  const handleFamilyDependInfoChange = (e) => {
    const targetId = e.target.id;
    const targetValue = e.target.value;
    handleChangeFamilyDependInfo({
      ...infoData,
      [targetId]: targetValue,
    });
  };

  return (
    <div className="margin-top-20px">
      <h1 className="group-label">Reduction based on family circumstances</h1>
      <div className="row-info">
        <TextInputField2
          id={"personalSalary"}
          prefix={"Personal: "}
          value={personalSalary}
          onChange={handleFamilyDependInfoChange}
          inputWidth={"70px"}
          suffix={" VND"}
        />
        <TextInputField2
          id="dependantSalary"
          prefix={"Dependant: "}
          value={dependantSalary}
          onChange={handleFamilyDependInfoChange}
          inputWidth={"70px"}
          suffix={" VND"}
        />
        <TextInputField2
          id="numOfDepedant"
          prefix={"Number of dependant: "}
          value={numOfDepedant}
          onChange={handleFamilyDependInfoChange}
          inputWidth={"40px"}
        />
      </div>
    </div>
  );
};
export default FamilyDependInfo;
