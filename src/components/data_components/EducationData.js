import React from "react"

const EducationData = (props) => {
    //code goes here
    const [title, set_title] = React.useState("");
    const [organization, set_organization] = React.useState("");
    const [fromDate, set_fromDate] = React.useState("");
    const [toDate, set_toDate] = React.useState("");

    const eduData = {
        key: props.id,

        title: title,
        organization: organization,
        fromDate: fromDate,
        toDate: toDate,
    }
    const handle_title = (event) => {
        set_title(event.target.value)
    }
    const handle_organization = (event) => {
        set_organization(event.target.value)
    }
    const handle_fromDate = (event) => {
        set_fromDate(event.target.value)
    }
    const handle_toDate = (event) => {
        set_toDate(event.target.value)
    }

    const save_data = () => {
        props.getData(eduData)
    }
    const delete_data = () => {
        props.deleteData(eduData.key)
    }
    return (
        <div>
            
        </div>
    )
}

export default EducationData