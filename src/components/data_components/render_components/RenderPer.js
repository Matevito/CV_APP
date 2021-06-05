
const RenderPersonalData = (props) => {
    let p_data = props.data
    console.log(p_data)
    return(
        <div>
            <div>
                name: {p_data.first_name} {p_data.last_name}
            </div>
            <div>
                role: {p_data.role}
            </div>
            <div>
                email: {p_data.email}
            </div>
            <div>
                phone: {p_data.phone}
            </div>
            <div>
                About me:
                <span>{p_data.description}</span>
            </div>
        </div>
    )
}

export default RenderPersonalData