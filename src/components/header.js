import React from "react"

const github_url = "https://github.com/Matevito/CV_APP"

const Header = () => {
    return(
        <nav className="navbar navbar-light bg-dark">
            <div className="container-flex mx-auto">
                <div className="row">
                    <h1 className="navbar-brand text-white mx-auto">CV GENERATOR</h1>
                </div>
                <div className="row">
                    <a className="btn btn-light mx-auto" 
                    href={github_url} 
                    target="_blank" rel="nonreferer">Check the code</a>
                </div>
            </div>
        </nav>
    )
}

export default Header