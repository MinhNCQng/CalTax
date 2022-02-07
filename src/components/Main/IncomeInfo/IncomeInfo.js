import {  useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { incomeDataActions } from "../../../store/redux-store";
import TextInputField from "../../InputField/TextInputField";

const IncomeInfo = props => {

    const incomeData = useSelector(storeState => storeState.income);
    const dispatch = useDispatch()


    const vndSalaryRef = useRef()
    const usdSalaryRef = useRef()
    const exchangeUSDToVNDRef = useRef()
    const handleIncomInfoChange = (event) => {
        const newInfo = {
            vndSalary: vndSalaryRef.current.value,
            usdSalary:usdSalaryRef.current.value,
            exchangeUSDToVND: exchangeUSDToVNDRef.current.value
        }
        dispatch(incomeDataActions.updateIncomInfo(newInfo))
    }
    return (
        <div className="margin-top-20px">
            <h1 className="group-label">Income</h1>
            <div className="row-info">
                <TextInputField 
                    ref={vndSalaryRef} 
                    labelText={"VND: "} 
                    inputWidth={"100px"} 
                    inputValue={incomeData.vndSalary} 
                    handleChangeInputValue={handleIncomInfoChange}/>
                <TextInputField 
                    ref={usdSalaryRef} labelText={"USD: "} 
                    inputWidth={"60px"} 
                    inputValue={incomeData.usdSalary} 
                    handleChangeInputValue={handleIncomInfoChange}/>
                <TextInputField 
                    ref={exchangeUSDToVNDRef} 
                    labelText={"Exchange rate: 1 USD = "} 
                    inputWidth={"60px"} 
                    inputValue={incomeData.exchangeUSDToVND} 
                    handleChangeInputValue={handleIncomInfoChange}
                    trailText={" VND"}/>
            </div>
        </div>
    )
}

export default IncomeInfo;