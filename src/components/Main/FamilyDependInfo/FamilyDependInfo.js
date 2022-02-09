import { Input, Space } from "antd";
const FamilyDependInfo = (props) => {
  const { infoData, handleChangeFamilyDependInfo } = props;
  const { personalSalary, dependantSalary, numOfDepedant } = infoData;

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
        <Space>
          <Input
            id="personalSalary"
            prefix="Personal: "
            suffix={"VND"}
            style={{ width: "130px" }}
            onChange={handleFamilyDependInfoChange}
            value={personalSalary}
          />

          <Input
            id="dependantSalary"
            prefix="Dependant: "
            suffix={"VND"}
            style={{ width: "130px" }}
            onChange={handleFamilyDependInfoChange}
            value={dependantSalary}
          />

          <Input
            id="dependantSalary"
            prefix="Number of dependant: "
            style={{ width: "180px" }}
            onChange={handleFamilyDependInfoChange}
            value={numOfDepedant}
          />
        </Space>
      </div>
    </div>
  );
};
export default FamilyDependInfo;
