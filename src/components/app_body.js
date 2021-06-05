import React from "react"
import PersonalData from "./data_components/PersonalData"
import ExperienceData from "./data_components/ExperienceData"
import EducationData from "./data_components/EducationData"
import RenderData from "./data_components/RenderData"
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
        let new_data = eduData.map(item => {
            if(item.key === data.key){
                item = data
            }
            return(item)
        })
        set_eduData(new_data)
    }

    const removing_eduData = (dataKey) => {
        let new_data = eduData.filter(item => item.key !== dataKey)
        set_eduData(new_data)
    }

    const new_eduData = () => {
        let id = uniqid()
        //edit the new_object
        let new_object = {key:id}
        set_eduData(eduData.concat(new_object))
    }

    const userData = {
        p_data: personalData,
        edu_data: eduData,
        exp_data: expData,
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
        <div className="container-flex">
            <div className="row">
                {/*input data*/}
                <div className="cl-6">
                    <hr />
                    <PersonalData getData={handle_PersonalData}/>
                    <hr />
                    {form_exp_data()}
                    <button className="btn btn-success mx-auto"
                    onClick={new_expData}>Add experience info</button>
                    <hr />
                    {form_edu_data()}
                    <button className="btn btn-success mx-auto"
                    onClick={new_eduData}>Add education info</button>
                    <hr/>
                </div>
                {/*render data*/}
                <div className="cl-6">
                    <RenderData userData={userData} />
                </div>
            </div>
        </div>
    )
}

export default AppBody