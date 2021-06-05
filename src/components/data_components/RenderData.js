import React from "react"
import RPersonalData from "./render_components/RenderPer"

const RenderData = (props) => {
    const personal_data = props.userData.p_data
    return(
        <div>
            {/*render personal data*/}
            <RPersonalData data={personal_data} />

            {/*render experience data*/}

            {/*render education data*/}
        </div>
    )
}

export default RenderData