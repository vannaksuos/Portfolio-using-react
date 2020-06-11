import React from "react"

function Project(props) {
    return(
        <div id="project1" className="card" style={{width: '20rem'}}>
            <img src={props.img} className="card-img-top" alt="multiple hands" />
            <div className="card-body">
            <h5 className="card-title">{props.title} </h5>
            <div className="card-text"><strong> Github URL</strong></div>
    <div className="card-text">{props.github}</div>
            <div className="card-text"><strong> Deployed Heroku URL click below</strong></div>
            <div className="card-text" />
            <a href={props.heroku} target="_blank" className="btn btn-primary">Check it out</a>
    </div>
    </div>
    )
}
export default Project;