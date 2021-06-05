const RenderExperienceData = (props) => {
    let exp_data = props.data
    return (
        <div>
            <div>
                {data.ocupation}
            </div>
            <div>
                {data.employer}
            </div>
            <div>
                {data.fromDate} - {data.toDate}
            </div>
            <div>
                Responsabilities: {data.responsabilities}
            </div>
        </div>
    )
}

export default RenderExperienceData