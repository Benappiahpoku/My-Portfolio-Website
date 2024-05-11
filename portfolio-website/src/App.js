// This is the main file of the project. It contains the navigation, hero, portfolio, skillset, about, testimonials, contact and footer components.

import React from "react";
import "./reset.css";
import "./App.css";
import Hero from "./Components/Hero";
import Navigation from "./Components/Navigation";
import Portfolio from "./Components/Portfolio";
import SkillSet from "./Components/SkillSet";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
// import icon from './img/icon.png'; // adjust the path as needed

function App() {
  return (
    <>
      <div>
        <section id="home">
          {/* Navigation */}
          <Navigation />
        </section>
        <div>
          <header>
            {/* Hero */}
            <Hero />
          </header>

          {/* Main section */}
          <main className="container">
            {/* Portfolio */}
            <section id="portfolio">
              <Portfolio />
            </section>
            {/* Skills Set */}
            <section id="skills">
              <SkillSet />
            </section>

            {/* About */}
            <section id="about">
              <About />
            </section>
            {/* Testimonials */}
            <section id="testimonials">
              <Testimonials />
            </section>

            {/* Contact */}
            <section id="contact">
              <Contact />
            </section>
          </main>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}

export default App;
