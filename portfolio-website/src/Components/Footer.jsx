import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPinterest,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="footer">
      <div className="columns">
        <div className="column">
          <h3>Contact Us</h3>
          <p>Email: hello@benappiahpoku.io</p>
          <p>Phone: +233 244314463</p>
        </div>
        <div className="column">
          <h3>Follow Us</h3>
          <a href="#b">
            <FaFacebook />
          </a>
          <a href="#b">
            <FaTwitter />
          </a>
          <a href="#b">
            <FaInstagram />
          </a>
          <a href="#b">
            <FaLinkedin />
          </a>
          <a href="#b">
            <FaGithub />
          </a>
          <a href="#b">
            <FaPinterest />
          </a>
        </div>
      </div>
      <div className="copyright">
        <p>© {year} All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
