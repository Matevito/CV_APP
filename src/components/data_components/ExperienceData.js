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

    const save_data = () => {
        props.getData(expData)
    }
    return(
        <div>
            <p></p>
            <h4>Experience data</h4>
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Ocupation"
                onChange={handle_ocupation}></input>
            </div>
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Employer"
                onChange={handle_employer}></input>
            </div>


            {/*todo: here goes the handle date input logic*/}

            
            <div className="input-group flex-nonwrap">
            <textarea className="form-control" aria-label="With textarea" placeholder="Responsabilities"
            onChange={handle_respons}></textarea>
            </div>
            <div className="row">
                    <button className="btn btn-success" onClick={save_data}>Save</button> 
                    <button className="btn btn-warning">Delete</button>
            </div>
        </div>
    )
}

export default ExperienceData