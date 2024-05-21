import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaServer,
  FaDatabase,
  FaGitAlt,
} from "react-icons/fa";
import "./SkillSet.css";
import Title from "./Title";

function SkillSet() {
  return (
    <div className="container">
      <div className="skillset">
        <Title ptext="Skills" h2text="My Tech Stack" />
        <p>Here are some of the technologies I have worked with:</p>
        <div className="row">
          <Skill
            skillName="HTML"
            Icon={FaHtml5}
            skillLevel="Expert"
            color="#e34c26"
            skillYears="15 years"
          />
          <Skill
            skillName="CSS"
            Icon={FaCss3Alt}
            skillLevel="Expert"
            color="#264de4"
            skillYears="15 years"
          />
          <Skill
            skillName="JavaScript"
            Icon={FaJs}
            skillLevel="Intermediate"
            color="#EDBA36"
            skillYears="10 years"
          />
          <Skill
            skillName="React"
            Icon={FaReact}
            skillLevel="Intermediate"
            color="#6D8DCB"
            skillYears="5 years"
          />
        </div>
        <div className="row">
          <Skill
            skillName="Node"
            Icon={FaNodeJs}
            skillLevel="Intermediate"
            color="#68A063"
            skillYears="5 years"
          />
          <Skill
            skillName="Express"
            Icon={FaServer}
            skillLevel="Beginner"
            color="#444343"
            skillYears="4 years"
          />
          <Skill
            skillName="MongoDB"
            Icon={FaDatabase}
            skillLevel="Beginner"
            color="#00674A"
            skillYears="3 years"
          />
          <Skill
            skillName="Git"
            Icon={FaGitAlt}
            skillLevel="Expert"
            color="#F1502F"
            skillYears="15 years"
          />
        </div>
      </div>
    </div>
  );
}

function Skill({ skillName, Icon, skillLevel, skillYears,color }) {
  return (
    <div className="column">
      <div className="skill">
        <Icon className="icon" style={{ color: color }} />
        <div className="text" style={{ color: color }}>
          <h4 style={{ lineHeight: "1.5rem" }}>{skillName}</h4>
          <span style={{ lineHeight: "1.5rem" }}>
            {skillLevel} <br></br>
            {skillYears}
          </span>
        </div>
      </div>
    </div>
  );
}

export default SkillSet;
