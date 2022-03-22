import React from "react";
import "./style.css";

// const About = ({ languages, socials, tools }) => {
const About = ({ socials }) => {
  return (
    <div className="about-wrapper">
      <div className="about-left">
        <div className="about-left-top">
          <h4>More about RaQyah</h4>
          {/* <p>
            <span role="img" aria-label="from">
              🌏
            </span>{" "}
            From: Elmahala-Elkoubra city , Gharbia , Egypt
          </p> */}
          <p>
            <span role="img" aria-label="live">
              🌏
            </span>{" "}
            Location: Riyad city , Saudi Arabia
          </p>
          <p>
            <span role="img" aria-label="email">
              📨
            </span>{" "}
            Email: info@raqyahsteel.com
          </p>
          {/* <p>
            <span role="img" aria-label="languages">
              🎓
            </span>{" "}
            Languages: Arabic, English , Franch
          </p> */}
          {/* <p>
            <span role="img" aria-label="education">
              📕
            </span>{" "}
            Education: BSc degree in Social Service , Faculty of Social Service,
            Mansoura University
          </p> */}
          <p>
            <span role="img" aria-label="experience">
              📕
            </span>{" "}
            Experience: We Have experience in lifecycle of (Metal Deccoration)
          </p>
          <hr />
        </div>

        <div className="about-left-bot">
          <h3>Find RaQyah on social media </h3>
          <div className="about-left-bot__socials-icons">
            {socials.map((social) => {
              return (
                <a
                  key={social.id}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={social.link}
                >
                  <img
                    align="left"
                    alt={social.alt}
                    width="50px"
                    src={social.src}
                  />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div className="about-right">
        <h4>Top Expertise</h4>
        <p> 
          interested in Metal Decoration, We have experience in lifecycle of
          Metal Deccoration:{" "}
          <a target="__blank" rel="noopener noreferrer" href="/resume.pdf">
            Download Résumé
          </a>{" "}
        </p>
        <div className="about-right__skills">
          <div className="about-right__skills-languages">
            <p> Experience : </p>
            {languages.map((language) => {
              return (
                <img
                  key={language.id}
                  align="left"
                  alt={language.alt}
                  width="26px"
                  src={language.src}
                />
              );
            })}
          </div>
          <div className="about-right__skills-tools">
            <p>Tools : </p>
            {tools.map((tool) => {
              return (
                <img
                  key={tool.id}
                  align="left"
                  alt={tool.alt}
                  width="26px"
                  src={tool.src}
                />
              );
            })}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default About;
