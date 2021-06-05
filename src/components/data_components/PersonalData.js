import React from "react"

const PersonalData = (props) => {
    const [firstName, set_firstName] = React.useState("");
    const [lastName, set_lastName] = React.useState("");
    const [role_, set_role] = React.useState("");
    const [email_, set_email] = React.useState("");
    const [phone_, set_phone] = React.useState("");
    const [description_, set_description] = React.useState("");
    
    const personalData = {
        first_name: firstName,
        last_name: lastName,
        role: role_,
        email: email_,
        phone: phone_,
        description: description_,
    }

    const handle_firstName = (event) => {
        set_firstName(event.target.value)
    }
    const handle_lastName = (event) => {
        set_lastName(event.target.value)
    }
    
    const handle_role = (event) => {
        set_role(event.target.value)
    }
    const handle_email = (event) => {
        set_email(event.target.value)
    }   
    const handle_phone = (event) => {
        set_phone(event.target.value)
    }
    const handle_description = (event) => {
        set_description(event.target.value)
    }

    const handle_PersonalData = () => {
        props.getData(personalData)
    }
    return(
        <div>
            <h4>Personal info</h4>
            <p></p>
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="First Name"
                onChange={handle_firstName}></input>
            </div>
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Last Name"
                onChange={handle_lastName}></input>
            </div>
            <hr />
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Role"
                onChange={handle_role}></input>
            </div>
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Email"
                onChange={handle_email}></input>
            </div>
            <div className="input-group flex-nowrap">
                <input type="text" className="form-control" placeholder="Phone"
                onChange={handle_phone}></input>
            </div>
            <div className="input-group flex-nonwrap">
            <textarea className="form-control" aria-label="With textarea" placeholder="Description"
            onChange={handle_description}></textarea>
            </div>
            <div className="mx-auto">
                <button className="btn btn-success mx-auto"
                onClick={handle_PersonalData}>Save personal info</button> 
            </div>
        </div>
    )
}

export default PersonalData