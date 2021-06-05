const RenderExperienceData = (props) => {
    let data = props.data
    return (
        <div>
            <div>
                {data.ocupation}
            </div>
            <div>
                {data.employer}
            </div>
            <div>
                {data.fromDate} --- {data.toDate}
            </div>
            <div>
                Responsabilities: {data.responsabilities}
            </div>
            <p></p>
        </div>
    )
}

export default RenderExperienceData