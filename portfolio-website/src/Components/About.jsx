import React from "react";
import { FaGithub, FaDownload } from "react-icons/fa";
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
            <div className="about-buttons">
              <div>
                <a href="https://github.com/Benappiahpoku">
                  GitHub
                  <FaGithub
                    style={{ fontSize: "1.2rem", marginLeft: "8px" }}
                  />{" "}
                </a>
              </div>
              <div>
                <a href="/downloads/Benjamin Appiah-Poku CV Rev06.pdf" download>
                  Download CV{" "}
                  <FaDownload
                    style={{marginLeft: "8px" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
