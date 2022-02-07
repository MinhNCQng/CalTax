import { useSelector, useDispatch } from "react-redux";
import { insuranceActions } from "../../../store/redux-store";

import infoIcon from "../../../assets/icons/get_info.png"
import React, { useState } from "react";
import RegionModal from "../../Modal/RegionModal";
import reactDom from "react-dom";
const InsuranceRegion = props => {
    const [visibleRegionModel,setVisibleRegionModel] = useState(false);
    const currentRegion = useSelector(store => store.insurance.region);
    const dispatch = useDispatch()
    const regions = ["I", "II", "III", "IV"]

    const handleRegionOptionChange = (value) =>{
        dispatch(insuranceActions.updateInsuranceRegion(value))
    }
    
    const handleRegionModalCLicked = ()=>{
        setVisibleRegionModel(!visibleRegionModel);
    }

    const handleCloseButtonModal = ()=>{
        setVisibleRegionModel(false);
    }
    return (
        <div className="row-info">
            <span>Region &nbsp;
                <span onClick={handleRegionModalCLicked} style={{cursor:"pointer"}}>
                    <img src={infoIcon} width={"16px"} alt="infoIcon" />
                </span>
                &nbsp;
                {visibleRegionModel && reactDom.createPortal(<RegionModal handleOnCloseButtonClicked ={handleCloseButtonModal}/>,document.getElementById("modal"))}
            </span>
            {regions.map((element, index) => 
                <span className="region-option" key={index}>
                    <input type={"radio"} name="region" checked={element ===currentRegion} onChange={()=>handleRegionOptionChange(element)} />
                    <label> {element} </label>
                </span>
            )}
        </div>
    )
}
export default InsuranceRegion;