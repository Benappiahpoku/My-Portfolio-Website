import React from "react";
import heroImage from "../img/HeroImage.webp";
import "./About.css";
import Title from "./Title";

function AboutMe() {
  return (
    <div className="container">
      <div>
        <Title ptext="About Me" h2text="My Story" />
        <div className="row">
          <div className="column">
            <img src={heroImage} alt="Hero" />
          </div>
          <div className="column">
            <h3>Code Architect, Problem Solver</h3>
            <p>
              I've had a passion for computers and coding since childhood,
              sparked by my dad's gift of a Commodore 64. Hours flew by as I
              tinkered and learned basic languages, igniting a lifelong love for
              programming. From dabbling in website creation to embracing
              React's modular approach, my journey in computing has been rich
              and rewarding. Now, I devote my time to crafting innovative apps
              and exploring how technology can address African challenges with
              homegrown solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
