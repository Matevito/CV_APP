
const RenderPersonalData = (props) => {
    let p_data = props.data
    return(
        <div>
            <h4>Personal Data</h4>
            <hr></hr>
            <div>
                Name: {p_data.first_name} {p_data.last_name}
            </div>
            <div>
                Nole: {p_data.role}
            </div>
            <div>
                Email: {p_data.email}
            </div>
            <div>
                Phone: {p_data.phone}
            </div>
            <div>
                About me:
                <span>{p_data.description}</span>
            </div>
        </div>
    )
}

export default RenderPersonalData