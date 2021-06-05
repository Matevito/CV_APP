import React from "react"
import PersonalData from "./data_components/PersonalData"
import ExperienceData from "./data_components/ExperienceData"
import EducationData from "./data_components/EducationData"
import uniqid from "uniqid";

const AppBody = () => {
    const [personalData, set_personalData] = React.useState({})
    const [expData, set_expData] = React.useState([])
    const [eduData, set_eduData] = React.useState([])

    const handle_PersonalData = (data) => {
        set_personalData(data)
    } 
    
    const handle_expData = (data) => {
        let new_data = expData.map(item => {
            if(item.key === data.key){
                item = data
            }
            return(item)
        })
        set_expData(new_data)
    }

    const removing_expData = (dataKey) => {
        let new_data = expData.filter(item => item.key !== dataKey)
        set_expData(new_data)
    }

    const new_expData = () => {
        let id = uniqid()
        //edit the new_object 
        let new_object ={key:id}
        set_expData(expData.concat(new_object))
    }

    const handle_eduData = (data) => {
        //todo
        
    }

    const removing_eduData = (dataKey) => {
        //todo
    }

    const new_eduData = () => {
        //TEST
        let id = uniqid()
        let new_object = {key:id}
        set_eduData(eduData.concat(new_object))
    }

    const userData = {
        p_data: personalData,
        edu_data: expData,
        exp_data: eduData,
    }
    function form_exp_data() {
        let elements = expData.map(exp_object => {
            
            return(
                <ExperienceData key={exp_object.key} id={exp_object.key}
                getData={handle_expData}
                deleteData={removing_expData}/>
            )
            }
        )
        return elements
    }

    const form_edu_data = () => {
        //Test
        let elements = eduData.map(edu_object => {
            return(
                <EducationData key={edu_object.key} id={edu_object.key}
                getData={handle_eduData}
                deleteData={removing_eduData} />
            )
        }
        )
        return elements
    }
    return (
        <div>
            <hr />
            <PersonalData getData={handle_PersonalData}/>
            <hr />
            {form_exp_data()}
            <button className="btn btn-success mx-auto"
            onClick={new_expData}>Add experience info</button>
            <hr />
            RENDER CV
        </div>
    )
}

export default AppBody