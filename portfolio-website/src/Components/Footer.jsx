import React from "react";
import {
  FaTwitter,
  FaGithub,
  // FaInstagram,
  // FaLinkedin,
  // FaPinterest,
  // FaFacebook,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="columns">
        <div className="column">
          <h3>Contact Us</h3>
          <p>
            Email:{" "}
            <a href="mailto:bappiahpoku@gmail.com">bappiahpoku@gmail.com</a>
          </p>
          <p>
            Phone: <a href="tel:+233244314463">+233 244314463</a>
          </p>
        </div>
        <div className="column">
          <h3>Follow Us</h3>
          {/* <a href="#b">
            <FaFacebook />
          </a> */}
          <a href="https://twitter.com/bappiahpoku">
            <FaTwitter style={{ fontSize: "1.5rem" }} />
          </a>
          {/* <a href="#b">
            <FaInstagram />
          </a> */}
          {/* <a href="#b">
            <FaLinkedin />
          </a> */}
          <a href="https://github.com/Benappiahpoku">
            <FaGithub style={{ fontSize: "1.5rem" }} />
          </a>
          {/* <a href="#b">
            <FaPinterest />
          </a> */}
        </div>
      </div>
      <div className="copyright">
        <p>© {year} All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
