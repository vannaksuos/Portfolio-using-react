import React from "react";


function Projects() {
    return (
    <div>
         <div id="project1" className="card" style={{width: '20rem'}}>
    <img src="https://images.beano.com/store/7236922d3a5f1bd14429d100961bea556fd8d882929b829daa6bc6618a48?auto=compress%2Cformat&dpr=2.625&w=390" className="card-img-top" alt="emoji making silly faces" />
    <div className="card-body">
      <h5 className="card-title">Group Project 1</h5>
      <div className="card-text"><strong> Github URL</strong></div>
      <div className="card-text">https://github.com/mfomin93/Giph-Joke-Generator
      </div>
      <div className="card-text"><strong>Deployed Github URL</strong></div>
      <div className="card-text">https://mfomin93.github.io/Giph-Joke-Generator/
      </div>
      <a href="https://mfomin93.github.io/Giph-Joke-Generator/" target="_blank" className="btn btn-primary">Check it out</a>
    </div>
  </div>
  <br />
  <div id="project2" className="card" style={{width: '20rem'}}>
    <img src="https://www.thej.org/clientuploads/Volunteer/Volunteer_Buttons_Volunteer_Opportunities.png" className="card-img-top" alt="multiple hands" />
    <div className="card-body">
      <h5 className="card-title">Group Project 2</h5>
      <div className="card-text"><strong> Github URL</strong></div>
      <div className="card-text">https://github.com/AJFree458/Project-2</div>
      <div className="card-text"><strong> Deployed Heroku URL click below</strong></div>
      <div className="card-text" />
      <a href="https://dry-cove-71806.herokuapp.com/?id=5eb9c5c2c8480900179c96ea" target="_blank" className="btn btn-primary">Check it out</a>
    </div>
    </div>


    <div className="container">
    <div id="smallCards" className="card" style={{width: '12rem'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTKwiBXmgyuQzltGhFJVsXH2eS39KupKbtJ1UddhKmIq0KmUOoP" className="card-img-top" alt="Day planner image" />
      <div className="card-body">
        <h5 className="card-title">Day Planner</h5>
        <div className="card-text"> Example Homework</div>
        <check href="https://vannaksuos.github.io/Planner/" target="_blank" className="btn btn-primary">Check it out
        </check></div>
    </div>
    <div id="smallCards" className="card" style={{width: '12rem'}}>
      <img src="https://i.pcmag.com/imagery/articles/04Uac9ZA9dH1zEKUiIv0nOu-7.fit_scale.size_2698x1517.v1569489914.jpg" className="card-img-top" alt="Password Generator image" />
      <div className="card-body">
        <h5 className="card-title">Password Generator</h5>
        <div className="card-text">Example Homework</div>
        <a href="https://vannaksuos.github.io/Password-Generator/" target="_blank" className="btn btn-primary">Check it out</a>
      </div>
    </div>
    <div id="smallCards" className="card" style={{width: '12rem'}}>
      <img src="https://www.freepnglogos.com/uploads/burger-png/burger-png-burgerfuel-burgers-fries-nutrition-9.png" className="card-img-top" alt="3 burgers" />
      <div className="card-body">
        <h5 className="card-title">Devour Burgers</h5>
        <div className="card-text">Example Homework</div>
        <a href="https://vannak-burger.herokuapp.com/" target="_blank" className="btn btn-primary">Check it out</a>
      </div>
    </div>
    <div id="smallCards" className="card" style={{width: '12rem'}}>
      <img src="https://i.dailymail.co.uk/1s/2020/03/16/05/26016004-0-image-a-14_1584338040654.jpg" className="card-img-top" alt="workout" />
      <div className="card-body">
        <h5 className="card-title">Workout Tracker</h5>
        <div className="card-text">Example Homework </div>
        <a href="https://dry-cove-71806.herokuapp.com/?id=5eb9c5c2c8480900179c96ea" target="_blank" className="btn btn-primary">Check it out</a>
      </div>
    </div>
  </div>
 
    </div>
    )
  }

  export default Projects;