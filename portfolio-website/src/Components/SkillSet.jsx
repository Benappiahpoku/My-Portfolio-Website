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
          />
          <Skill
            skillName="CSS"
            Icon={FaCss3Alt}
            skillLevel="Expert"
            color="#264de4"
          />
          <Skill
            skillName="JavaScript"
            Icon={FaJs}
            skillLevel="Intermediate"
            color="#EDBA36"
          />
          <Skill
            skillName="React"
            Icon={FaReact}
            skillLevel="Beginner"
            color="#6D8DCB"
          />
        </div>
        <div className="row">
          <Skill
            skillName="Node"
            Icon={FaNodeJs}
            skillLevel="Intermediate"
            color="#68A063"
          />
          <Skill
            skillName="Express"
            Icon={FaServer}
            skillLevel="Beginner"
            color="#444343"
          />
          <Skill
            skillName="MongoDB"
            Icon={FaDatabase}
            skillLevel="Beginner"
            color="#00674A"
          />
          <Skill
            skillName="Git"
            Icon={FaGitAlt}
            skillLevel="Expert"
            color="#F1502F"
          />
        </div>
      </div>
    </div>
  );
}

function Skill({ skillName, Icon, skillLevel, color }) {
  return (
    <div className="column">
      <div className="skill">
        <Icon className="icon" style={{ color: color }} />
        <div className="text" style={{ color: color }}>
          <h4>{skillName}</h4>
          <p>
            {skillLevel} <br></br> {skillName}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SkillSet;
