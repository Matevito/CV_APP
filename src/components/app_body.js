import React from "react"
import PersonalData from "./data_components/PersonalData"

const AppBody = () => {
    const [personalData, set_personalData] = React.useState({})

    const handle_PersonalData = (data) => {
        set_personalData(data)
    } 
    const [expData, set_expData] = React.useState([])

    const userData = {
        p_data: personalData,
        edu_data: expData,
        exp_data: [],
    }
    return (
        <div>
            <hr />
            <PersonalData getData={handle_PersonalData}/>
            <hr />
            RENDER CV
        </div>
    )
}

export default AppBody