import React from "react";
import { FaStar } from "react-icons/fa";
import "./Testimonials.css";
import Title from "./Title";
import Jerry from "../img/jerry.jpg";
import Daniel from "../img/daniel.jpg";

function Testimonials() {
  return (
    <div className="testimonials">
      <Title ptext="Testimonials" h2text="What Our Clients Say" />
      <div className="row">
        <TestimonialCard
          companyName="Naachiaa Construction Company"
          testimonialText="Working with Benjamin on our nature construction project was a fantastic experience. He listened attentively and delivered precisely what we envisioned for our website. His effectiveness and dedication truly stood out, making the collaboration seamless and enjoyable. I highly recommend him for any web development endeavors."
          reviewerName="Daniel Adjei"
          iconSrc={Daniel}
          rating={4}
        />
        <TestimonialCard
          companyName="JDA PM Ltd."
          testimonialText="Benjamin came highly recommended by another client, and from our very first conversation, I knew I had found the right person for the job. He grasped my vision effortlessly and demonstrated the expertise and dedication needed to bring it to life. Benjamin is undoubtedly a attentive developer who delivers exactly what you need."
          reviewerName="Jerry Donkor"
          iconSrc={Jerry}
          rating={4}
        />
      </div>
    </div>
  );
}

function TestimonialCard({
  companyName,
  testimonialText,
  reviewerName,
  iconSrc,
  rating,
}) {
  const stars = Array(5)
    .fill()
    .map((_, i) => (
      <FaStar key={i} style={{ color: i < rating ? "gold" : "gray" }} />
    ));

  return (
    <div className="card">
      <div className="card-body">
        <div className="rating">{stars}</div>
        <h3>{companyName}</h3>
        <p>{testimonialText}</p>
      </div>
      <div className="card-footer">
        <span>{reviewerName}</span>
        <img src={iconSrc} alt="Icon" />
      </div>
    </div>
  );
}

export default Testimonials;
