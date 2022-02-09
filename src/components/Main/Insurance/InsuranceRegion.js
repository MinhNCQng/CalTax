import infoIcon from "../../../assets/icons/get_info.png";
import React, { useState } from "react";
import RegionModal from "../../Modal/RegionModal";
import reactDom from "react-dom";
import { Radio } from "antd";
const InsuranceRegion = (props) => {
  const [visibleRegionModel, setVisibleRegionModel] = useState(false);
  const currentRegion = props.regionData;
  const regions = ["I", "II", "III", "IV"];

  const handleRegionOptionChange = (e) => {
    const value = e.target.value;
    props.handleChangeRegion({ region: value });
  };

  const handleRegionModalCLicked = () => {
    setVisibleRegionModel(!visibleRegionModel);
  };

  const handleCloseButtonModal = () => {
    setVisibleRegionModel(false);
  };
  return (
    <div className="row-info">
      <span>
        Region &nbsp;
        <span onClick={handleRegionModalCLicked} style={{ cursor: "pointer" }}>
          <img src={infoIcon} width={"16px"} alt="infoIcon" />
        </span>
        &nbsp;
        {visibleRegionModel &&
          reactDom.createPortal(
            <RegionModal handleOnCloseButtonClicked={handleCloseButtonModal} />,
            document.getElementById("modal")
          )}
      </span>
      

      <Radio.Group value={currentRegion} onChange = {handleRegionOptionChange}>
        {regions.map((element, index) => (
          <Radio key={index} value={element}>{element}</Radio>
        ))}
      </Radio.Group>
    </div>
  );
};
export default InsuranceRegion;
