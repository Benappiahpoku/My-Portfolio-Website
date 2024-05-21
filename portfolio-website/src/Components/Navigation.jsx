import { useState } from "react";
import { Link, animateScroll as scroll} from "react-scroll";
import { FaPhone } from "react-icons/fa";
import "./Navigation.css";

import logo from "../img/logo.png";

function Navigation() {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };

  const removeActive = () => {
    setIsActive(false);
  };

  return (
    <div>
      <nav>
        <div className="navbar">
          <div className="navLogo">
            <button
              style={{
                cursor: "pointer",
                border: "none",
                background: "none",
                padding: "0",
                margin: "0",
                outline: "none",
              }}
              onClick={() => scroll.scrollToTop({ duration: 1000 })}
              className="logo"
            >
              <img src={logo} alt="logo" />
            </button>
          </div>
          <div className="menu-items">
            <ul className={`navMenu ${isActive ? "active" : ""}`}>
              <li onClick={removeActive}>
                <Link
                  to="portfolio"
                  smooth={true}
                  duration={1000}
                  className="navLink"
                  spy={true}
                  activeClass="active"
                >
                  Portfolio
                </Link>
              </li>
              <li onClick={removeActive}>
                <Link
                  to="skills"
                  smooth={true}
                  duration={1000}
                  className="navLink"
                  spy={true}
                  activeClass="active"
                >
                  Skills
                </Link>
              </li>
              <li onClick={removeActive}>
                <Link
                  to="about"
                  smooth={true}
                  duration={1000}
                  className="navLink"
                  spy={true}
                  activeClass="active"
                >
                  About
                </Link>
              </li>
              <li onClick={removeActive}>
                <Link
                  to="testimonials"
                  smooth={true}
                  duration={1000}
                  className="navLink"
                  spy={true}
                  activeClass="active"
                >
                  Testimonials
                </Link>
              </li>
              <li onClick={removeActive}>
                <a href="tel:+233244314463" className="navLink">
                  <FaPhone style={{}} />
                </a>
              </li>
            </ul>
            <div
              className={`hamburger ${isActive ? "active" : ""}`}
              onClick={toggleActiveClass}
            >
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
