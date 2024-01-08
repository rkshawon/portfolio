import React, { useContext } from "react";
import "./Works.css";
import Upwork from "../../img/Upwork.png";
import Fiverr from "../../img/fiverr.png";
import Amazon from "../../img/amazon.png";
import Shopify from "../../img/Shopify.png";
import Facebook from "../../img/Facebook.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const Works = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  return (
    <div className="works" id="works">
      {/* left side */}
      <div className="w-left">
        <div className="awesome">
          {/* dark Mode */}
          <span style={{ color: darkMode ? "white" : "" }}>Technology</span>
          <span> & Skill</span>

          <div class="skill">
            <div class="forntend">
              <h2>Frontend</h2>
              <h5>Html</h5>
              <h5>CSS</h5>
              <h5>Tailwind CSS</h5>
              <h5>Javascrpt</h5>
              <h5>Typescrpt</h5>
              <h5>ReactJs</h5>
              <h5>NextJs</h5>
              <h5>Redux</h5>
              <h5>Metarial UI</h5>
              <h5>Ant Design Icon</h5>
            </div>
            <div class="backend">
              <h2>Backend</h2>
              <h5>NodeJs</h5>
              <h5>Express</h5>
              <h5>Mongodb</h5>
              <h5>Sequelize</h5>
              <h5>prismaORM</h5>
              <h5>PostgreSQL</h5>
              <h5>JWT</h5>
              <h5>SocketIO</h5>
              <h5>Firebase</h5>
              <h5>Postman</h5>
            </div>
          </div>

          <Link to="contact" smooth={true} spy={true}>
            <button className="button s-button">Hire Me</button>
          </Link>
          <div
            className="blur s-blur1"
            style={{ background: "#ABF1FF94" }}
          ></div>
        </div>

        {/* right side */}
      </div>
      <div className="w-right">
        <motion.div
          initial={{ rotate: 45 }}
          whileInView={{ rotate: 0 }}
          viewport={{ margin: "-40px" }}
          transition={{ duration: 3.5, type: "spring" }}
          className="w-mainCircle"
        >
          <div className="w-secCircle">
            <img src={Upwork} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="" />
          </div>{" "}
          <div className="w-secCircle">
            <img src={Shopify} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="" />
          </div>
        </motion.div>
        {/* background Circles */}
        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
