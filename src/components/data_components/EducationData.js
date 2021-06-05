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
            <p></p>
            <h4>Education</h4>
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Title"
                onChange={handle_title}></input>
            </div>

            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Organization"
                onChange={handle_organization}></input>
            </div>

            {/* dates elements*/}
            <div className="input-group flex-nowrap">
            <span className="input-group-text">From: </span>
                <input type="date" className="form-control" onChange={handle_fromDate}></input>
            </div>
            <div className="input-group flex-nonwrap">
                <span className="input-group-text">To: </span>
                <input type="date" className="form-control" onChange={handle_toDate}></input>
            </div>

            {/*save and delete btns*/}
            <div className="container-flex">
                <div className="row">
                        <button type="button" className="btn btn-success btn-sm" onClick={save_data}>Save</button> 
                        <button type="button" className="btn btn-danger btn-sm" onClick={delete_data}>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default EducationData