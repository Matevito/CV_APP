import React from "react"

const ExperienceData = (props) => {
    const [ocupation, set_ocupation] = React.useState("")
    const [employer, set_employer] = React.useState("")
    const [fromDate, set_fromDate] = React.useState("")
    const [toDate, set_toDate] = React.useState("")
    const [responsabilities, set_responsabilities] = React.useState("")

    const expData = {
        ocupation : ocupation,
        employer: employer,
        fromDate: fromDate,
        toDate: toDate,
        responsabilities: responsabilities,
    }
    const handle_ocupation = (event) => {
        set_ocupation(event.target.value)
    }
    const handle_employer = (event) => {
        set_employer(event.target.value)
    }
    const handle_fromDate = (event) => {
        set_fromDate(event.target.value)
    }
    const handle_toDate = (event) => {
        set_toDate(event.target.value)
    }
    const handle_respons = (event) => {
        set_responsabilities(event.target.value)
    }
    return(
        <div>
            Experience_data
        </div>
    )
}

export default ExperienceData