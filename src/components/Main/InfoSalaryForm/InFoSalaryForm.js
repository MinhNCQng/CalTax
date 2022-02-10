import { Form } from "antd";
import CalcFunction from "../Calc/CalcFunction";
import CalcResult from "../Calc/CalcResult";
import FamilyDependInfo from "../FamilyDependInfo/FamilyDependInfo";
import IncomeInfo from "../IncomeInfo/IncomeInfo";
import InsuranceInfo from "../Insurance/InsuranceInfo";

import "./InFoSalaryForm.css";



const InfoSalaryForm = (props) => {
  const { salaryInfo, handleSetExplanation , setSalaryInfo} = props;
  
  const [form] = Form.useForm()
  const onFormChange = ()=>{
    setSalaryInfo(form.getFieldsValue())
  }
  return (
    <div className="salary-info">
      <Form form={form} layout="inline" onChange={onFormChange} initialValues={salaryInfo}>
        <IncomeInfo
         
        />
        <InsuranceInfo
          infoData={salaryInfo.insurance}
        />
        <FamilyDependInfo
         
        />

        <CalcFunction
          infoData={salaryInfo}
          handleSetExplanation = {handleSetExplanation}
        />
      </Form>
    </div>
  );
};

export default InfoSalaryForm;
