import React from "react";

function Home() {
    return(
        <div>
    <div>
        <h1 id="about" className="display-4"><strong>Vannak Suos</strong></h1>
        <img src="https://avatars3.githubusercontent.com/u/59664686?s=460&u=dd46eebb2a32b618da32ea885f8c578984804b9c&v=4" className="responsive" alt="Profile Image" id="profilePic" />
        <br />
<div id="personal" className="card text-white bg-primary mb-1" style={{maxWidth: '40rem'}}>
    <div className="card-header">Personal Info</div>
        <div className="card-body">
            <p className="card-text">Current Studies: Web Development Full Stack (front end &amp; back end)</p>
            <p className="card-text">Current School: UNCC Continuation School</p>
            <p className="card-text">Projected Graduation Date: July 11th, 2020</p>
            <p className="card-text">Location: Charlotte, NC</p>
            <p className="card-text">Phone#: 781-913-3012</p>
            <p className="card-text"><a href="mailto:vannaksuos@gmail.com" target="_blank" className="btn btn-primary">
                <img src="https://cdn2.iconfinder.com/data/icons/social-icons-circular-color/512/gmail-512.png" style={{width: '40px', height: '40px'}} />Email</a></p>
            <p className="card-text">
            <a href="https://github.com/vannaksuos" target="_blank" className="btn btn-primary">
                <img src="https://github.githubassets.com/images/modules/open_graph/github-mark.png" style={{width: '30px', height: '30px'}} />GitHub</a></p>
            <p className="card-text">
            <a href="https://www.linkedin.com/in/vannak-suos-a9050056/" target="_blank" className="btn btn-primary">
                <img src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-1/1024/linkedin-512.png" style={{width: '30px', height: '30px'}} />LinkedIn</a></p>
        </div>
        </div>
        <br />
<div id="skills" className="card text-white bg-primary mb-1" style={{maxWidth: '40rem'}}>
    <div className="card-header">Entry Level Skills</div>
        <div className="card-body">
            <p className="card-text"><span className="badge badge-info">Html/Css</span>
            <span className="badge badge-secondary">Javascript</span>
            <span className="badge badge-success">Json</span>
            <span className="badge badge-warning">Jquery</span>
            <span className="badge badge-danger">Ajax</span>
            <span className="badge badge-secondary">Real Time Cloud Database via Firebase</span>
            <span className="badge badge-danger">MySQL</span>
            <span className="badge badge-warning">Sequelize</span>
            <span className="badge badge-secondary">GitHub</span>
            <span className="badge badge-light">Git</span>
            <span className="badge badge-success">JawsDB</span>
            <span className="badge badge-danger">Heroku</span>
            <span className="badge badge-warning">bootstrap</span>
            <span className="badge badge-info">API</span>
            <span className="badge badge-light">NodeJs</span>
            <span className="badge badge-secondary">express</span>
            <span className="badge badge-danger">MVC</span>
            <span className="badge badge-info">MongoDB</span>
            <span className="badge badge-warning">Mongoose</span>
            <span className="badge badge-light">Templating Engines</span>
            <span className="badge badge-secondary">Sessions</span>
            <span className="badge badge-danger">Writing Test</span>
            <span className="badge badge-warning">Creating APIs</span>
            <span className="badge badge-success">User Authentication</span>
            <span className="badge badge-secondary">Travis ci</span>
            <span className="badge badge-success">React.js</span>

            </p>
    </div>
        </div>
    <div id="strength" className="card text-white bg-primary mb-2" style={{maxWidth: '40rem'}}>
        <div className="card-header">Strengths</div>
        <div className="card-body">
            <p className="card-text"><span className="badge badge-info">Ability to Learn through Trial and Error</span>
            <span className="badge badge-secondary">Creative Thinking</span>
            <span className="badge badge-success">Discipline and Determination</span>
            <span className="badge badge-danger">Analytical Thinking</span>
            <span className="badge badge-warning">Communication Skills</span>
            <span className="badge badge-info">Dedication and Enthusiasm</span>
            <span className="badge badge-light">Interpersonal Skills and Respectfulness</span>
            <span className="badge badge-dark">Efficient</span></p>
            <span className="badge badge-secondary">Flexibility and Adaptability</span>
            <span className="badge badge-success">Ability to Learn Programs and Processes</span>
            <span className="badge badge-danger">Detail-Oriented</span>
            <span className="badge badge-warning">Confidentiality</span>
            <span className="badge badge-info">Willingness to Take on Responsibility</span>
            <span className="badge badge-light">Devotion to Deadlines</span>
        </div>
        </div>
    <div id="hobbies" className="card text-white bg-primary mb-2" style={{maxWidth: '120rem'}}>
        <div className="card-header">Hobbies</div>
        <div className="card-body">
            <p className="card-text">I spend a lot of time on the computer, always trying to learn new things daily. I love
            looking at other people website and learning their techniques in designing. On days I take breaks from
            learning to code, I enjoy a relaxing day of fishing, its something new to me. I just picked it up not to
            long ago. Its one of the few things you can enjoy during this Covid- 19 lock down. I also enjoy playing
            Xbox one, when ever I need to just take a break from the computer.</p>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSkCigRyRXQIxgLZPkTn-AnWz2xSvsoyHK-N7fgzWTumMQgDoc&usqp=CAU" style={{width:"100px", height:"100px", margin:"20px"}}  />
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQx9ZfmhLc1g3lbwFl-wfXm2OP7dJZCWeRYAL0BIsQ1Di4-CK_A&usqp=CAU" style={{width:"100px", height:"100px", margin:"20px"}} />
            <img src="https://i.ytimg.com/vi/0E44DClsX5Q/maxresdefault.jpg" style={{width:"100px", height:"100px", margin:"20px"}}/>
        </div>
        </div>
        </div>
        </div>
    )
    }
export default Home;