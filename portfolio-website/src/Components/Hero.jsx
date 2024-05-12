import React from "react";
import { Link } from "react-scroll";
import "./Hero.css";
import heroImage from "../img/HeroImage.webp"; 


function Hero() {
  return (
    <div className="container">
      <div className="hero">
        <div className="hero-text">
          <h1>Hi, I am Ben Appiah-Poku</h1>
          <h2>Full Stack Web Developer</h2>
          <p style={{paddingTop:"20px"}} >
            I'm a seasoned website and web app developer specializing in
            crafting intuitive tools that boost productivity and well-being.
            Let's collaborate to transform your ideas into impactful solutions
            that drive success.
          </p>
          <div className="hero-buttons"></div>
          <Link to="skills" smooth={true} duration={500}>
            <button>Hire Me</button>
          </Link>
          <a href="mailto:bappiahpoku@gmail.com">
            <button>Say Hello</button>
          </a>
          <div/>  
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Hero" />
        </div>
      </div>
    </div>
  );
}

export default Hero;
