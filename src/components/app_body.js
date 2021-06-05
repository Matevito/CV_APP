import React from "react"
import PersonalData from "./data_components/PersonalData"
import ExperienceData from "./data_components/ExperienceData"
import uniqid from "uniqid";

const AppBody = () => {
    const [personalData, set_personalData] = React.useState({})

    const handle_PersonalData = (data) => {
        set_personalData(data)
    } 
    const [expData, set_expData] = React.useState([])
    
    const handle_expData = (data) => {
        set_expData(data)
    }

    const new_expData = () => {
        //add an object to expdata--with the id
        let id = uniqid()
        let new_object ={key:id}
        set_expData(expData.concat(new_object))
    }
    const userData = {
        p_data: personalData,
        edu_data: expData,
        exp_data: [],
    }
    function form_exp_data() {
        let elements = expData.map(event => <ExperienceData key={uniqid()} />)
        return elements
    }
    return (
        <div>
            <hr />
            <PersonalData getData={handle_PersonalData}/>
            <hr />
            {form_exp_data()}
            <button className="btn btn-success mx-auto">Add experience info</button>
            <hr />
            RENDER CV
        </div>
    )
}

export default AppBody