import React from "react"

const github_url = "https://github.com/Matevito/CV_APP"

const Header = () => {
    return(
        <nav className="navbar navbar-light bg-dark">
            <h1 className="navbar-brand text-white mx-auto">CV GENERATOR</h1>

            <div className="mr-4">
                <a className="btn btn-light mr-4"
                href={github_url} target="_blank" rel="nonreferer">Check the code</a>
            </div>
        </nav>
    )
}

export default Header