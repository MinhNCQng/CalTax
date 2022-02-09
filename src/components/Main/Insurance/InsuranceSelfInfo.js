import { Input, Space } from "antd";


const InsuranceSelfInfo = props => {


    const {selfData, handleChangeSelfInfo} = props
    const {minWage,social,health,unemployed} = selfData;

    const handleInsuranceSelfInfoChange = e =>{
        const targetId  = e.target.id
        const targetValue = e.target.value
        handleChangeSelfInfo({selfInfo:{...selfData, [targetId]: targetValue}})
    }
    return (
        <div className="row-info">
            <Space>
                <Input
                    id="minWage"
                    prefix="Minimum wage: "
                    style={{ width: "230px" }}
                    value={minWage}
                    onChange={handleInsuranceSelfInfoChange}
                    suffix="VND"
                />
                <Input
                    id="social"
                    prefix="Social: "
                    style={{ width: "100px" }}
                    
                    value={social}
                    onChange={handleInsuranceSelfInfoChange}
                    suffix=" % "
                />
                <Input
                    id="health"
                    prefix="Health: "
                    style={{ width: "110px" }}
                    value={health}
                    onChange={handleInsuranceSelfInfoChange}
                    suffix=" % "
                />
                <Input
                    id="unemployed"
                    prefix="Unemployed: "
                    style={{ width: "150px" }}
                    value={unemployed}
                    onChange={handleInsuranceSelfInfoChange}
                    suffix=" %"
                />
            </Space>

            
            
        </div>
    )
}

export default InsuranceSelfInfo