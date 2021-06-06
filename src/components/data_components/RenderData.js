import React from "react"
import RPersonalData from "./render_components/RenderPer"
import RExperienceData from "./render_components/RenderExp"
import ReducationData from "./render_components/RenderEdu"

const RenderData = (props) => {
    const personal_data = props.userData.p_data

    const exp_objects = () => {
        const experience_data = props.userData.exp_data
        let exp_elements = experience_data.map(experience => 
            <div>
                <hr />
                <RExperienceData data={experience}/>
            </div>)
        return exp_elements
    }

    const edu_objects = () => {
        const education_data = props.userData.edu_data
        let edu_elements = education_data.map(education =>
            <div>
                <hr /> 
                <ReducationData data={education} />
            </div>)
        return edu_elements
    }

    return(
        <div>
            {/*render personal data*/}
            <RPersonalData data={personal_data} />
            <hr />

            <h5>Experience</h5>
            {/*render experience data*/}
            {exp_objects()}
            <hr />

            <h5>Education</h5>
            {/*render education data*/}
            {edu_objects()}
            <hr/>
        </div>
    )
}

export default RenderData