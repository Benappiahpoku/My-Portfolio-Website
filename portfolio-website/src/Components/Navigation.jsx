import React, { useState } from "react";
import "./Navigation.css"; // Import CSS for styling



//images
import logo from "../img/logo.png"; // adjust the path as needed


//icons
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaBars, FaTimes } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="navigation">
        <div className="navigation__logo">
          <img src={logo} alt="logo" />
        </div>
        <div className={`navigation__menu ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="navigation__dropdown">
              <a href=" ">Explore</a>
              <ul className="navigation__submenu">
                <li>
                  <a href="#testimonials">Testimonials</a>
                </li>
                <li>
                  <a href="#blog">Blog</a>
                </li>
                <li>
                  <a href="#skills">Skills</a>
                </li>
                <li>
                  <a href="#clients">Clients</a>
                </li>
              </ul>
            </li>
            <li>
              <button href="#contact">
                Let's Chat{" "}
                <IoChatbubbleEllipsesOutline style={{ fontWeight: "bold" }} />
              </button>
            </li>
          </ul>
        </div>
        <div className="navigation__toggle" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
