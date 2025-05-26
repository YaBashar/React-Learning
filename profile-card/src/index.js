import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const skills = [ 
  {
    name: "Typescript",
    color: "blue",
    level: "beginner"
  }, 

  {
    name: "Javascript",
    color: "green",
    level: "intermediate"
  },

  {
    name: "Python",
    color: "orange",
    level: "beginner"
  }
]

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className = "avatar" src = "main.jpeg" alt = "avatar"></img>
}

function Intro() {
  return (
    <div>
      <h1>Mubashir Hussain</h1>
      <p>Hi I am second year computer science student at UNSW.</p>
    </div>
  )

}

function SkillList() {
  return (
    <div className='skill-list'>
      {skills.map((skill) =>(
        <Skill skill = {skill.name} color = {skill.color} level = {skill.level} />
      ))}
    </div>
  );
}

function Skill({name, level, color}) {
  return (
    <div className='skill' style = {{backgroundColor: color}}> 
      <span>{name}</span>
      <span>{level === 'beginner' && "👶"}</span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
