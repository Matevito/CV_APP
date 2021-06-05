import React from "react"
import RPersonalData from "./render_components/RenderPer"
import RExperienceData from "./render_components/RenderExp"

const RenderData = (props) => {
    const personal_data = props.userData.p_data

    const exp_objects = () => {
        const experience_data = props.userData.exp_data
        console.log(experience_data)
        let exp_elements = experience_data.map(experience => 
            <div>
                <hr />
                <RExperienceData data={experience}/>
            </div>)
        return exp_elements
    }

    return(
        <div>
            {/*render personal data*/}
            <RPersonalData data={personal_data} />
            <hr />
            <h5>Experience</h5>
            {/*render experience data*/}
            {exp_objects()}

            {/*render education data*/}
        </div>
    )
}

export default RenderData