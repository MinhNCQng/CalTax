import TextInputField from "../../InputField/TextInputField";

import { useRef } from "react";

const FamilyDependInfo = props =>{
    
    const { personalSalary,dependantSalary,numOfDepedant} = props.infoData
    
    const personalSalaryRef = useRef()
        , dependantSalaryRef = useRef()
        , numOfDepedantRef   = useRef()
    const handleFamilyDependInfoChange = ()=> {
        const newFamilyDependInfo = {
            personalSalary: personalSalaryRef.current.value ,
            dependantSalary: dependantSalaryRef.current.value ,
            numOfDepedant: numOfDepedantRef.current.value,
        }
        props.handleChangeFamilyDependInfo(newFamilyDependInfo)
    }
    return (
        <div className="margin-top-20px">
            <h1 className="group-label">Reduction based on family circumstances</h1>
            <div className="row-info">
                <TextInputField 
                    labelText={"Personal: "}
                    inputValue={personalSalary}
                    ref={personalSalaryRef}
                    handleChangeInputValue={handleFamilyDependInfoChange}
                    inputWidth={"70px"}
                    trailText={" VND"}

                />
                <TextInputField 
                    labelText={"Dependant: "}
                    inputValue={dependantSalary}
                    ref={dependantSalaryRef}
                    handleChangeInputValue={handleFamilyDependInfoChange}
                    inputWidth={"70px"}
                    trailText={" VND"}

                />
                <TextInputField 
                    labelText={"Number of dependant: "}
                    inputValue={numOfDepedant}
                    ref={numOfDepedantRef}
                    handleChangeInputValue={handleFamilyDependInfoChange}
                    inputWidth={"40px"}

                />
            </div>
        </div>
    )
}
export default FamilyDependInfo;