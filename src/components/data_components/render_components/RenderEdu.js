const RenderEducationData = (props) => {
    let data = props.data
    return (
        <div>
            <div>
                Title: {data.title}
            </div>
            <div>
                Organization: {data.organization}
            </div>
            <div>
                {data.fromDate} --- {data.toDate}
            </div>
        </div>
    )
}

export default RenderEducationData