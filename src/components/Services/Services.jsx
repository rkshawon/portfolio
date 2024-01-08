import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import Glasses from "../../img/glasses.png";
import humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from "./resume.pdf";

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>About Me</span>
        <span>Full Stack Web Developer</span>
        <small>
          I am full stack web developer, building web application for more than
          2 years using MERN stack technoloy. I am used to work with both
          front-end and back-end. I like to code and solve real world problem.
          <br /> <br />I have done my B.S.C in Compurer Science and Engineering
          (CSE) from National University
        </small>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* right */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTMl, CSS, Javasctipt, Reactjs, Nodejs, Express, MongoDB"}
          />
        </motion.div>

        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <Card
            emoji={humble}
            heading={"Hobby"}
            detail={"I like to code and watch anime, also like pet"}
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
