import DetailExplanationTable from "./DetailExplanationTable.js/DetailExplanationTable"

import InfoSalaryForm from "./InfoSalaryForm/InFoSalaryForm"

import "./Main.css"


const Main = props => {
    return (
        <main className="main-container">
            <div className="main-wrapper ">
                <InfoSalaryForm/>
                <DetailExplanationTable/>
            </div>
        </main>
    )
}

export default Main