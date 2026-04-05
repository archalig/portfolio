import React from "react";
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { SiKaggle } from "react-icons/si";
import "./Home.css";

const Home = () => {
  return (
    <section className="hero-container">

      <h1 className="hero-name">
        ARCHIE ALIGSAO
      </h1>

      <h2 className="hero-typing">
        <Typewriter
          options={{
            strings: [
              "Part-Time Statistician",
              "Data Analyst",
              "Full-Time Learner"
            ],
            autoStart: true,
            loop: true,
          }}
        />
      </h2>

      {/* ICON BUTTONS */}
      <div className="hero-buttons">
        <a href="https://www.linkedin.com/in/archiealigsao/" target="_blank" rel="noreferrer">
          <div className="hero-icon"><FaLinkedin /></div>
        </a>

        <a href="https://www.kaggle.com/aaachiii" target="_blank" rel="noreferrer">
          <div className="hero-icon"><SiKaggle /></div>
        </a>

        <a href="https://github.com/archalig" target="_blank" rel="noreferrer">
          <div className="hero-icon"><FaGithub /></div>
        </a>
      </div>

      {/* CONTACT CTA */}
      <div className="hero-contact">
        <a href="mailto:archie.a.aligsao@gmail.com">
          <button className="contact-btn">
            <FaEnvelope style={{ marginRight: "8px" }} />
            Contact Me
          </button>
        </a>
      </div>

    </section>
  );
};

export default Home;