import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import "./Contact.css";
import Title from "./Title";

function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact">
      <div>
        <Title ptext="Contact" h2text="Do you have any questions?" />
      </div>
      <div className="columns">
        <div className="column">
          <form action="https://formspree.io/f/xayrkevn" method="POST">
            <div className="row">
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={form.firstName}
                onChange={handleChange}
              />
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={form.lastName}
                onChange={handleChange}
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
            />
            <textarea
              name="description"
              placeholder="Description"
              value={form.description}
              onChange={handleChange}
            ></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
        <div className="column">
          <h2
            style={{
              fontSize: "3.2rem",
              color: "#ce2952",
              textAlign: "center",
            }}
          >
            Get in touch
          </h2>
          <div
            className="row-move"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="row"
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <FaEnvelope style={{ fontSize: "2.0rem", marginRight: "10px" }} />
              <span>bappiahpoku@gmail.com</span>
            </div>
            <div
              className="row"
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <FaPhone style={{ fontSize: "2.0rem", marginRight: "10px" }} />
              <span>+233 244314463</span>
            </div>
            <div
              className="row"
              style={{
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "10px",
              }}
            >
              <FaMapMarkerAlt
                style={{ fontSize: "2.0rem", marginRight: "10px" }}
              />
              <span>Accra- Ghana</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
