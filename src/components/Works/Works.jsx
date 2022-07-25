import React, { useContext } from "react";
import "./Works.css";
// import Upwork from "../../img/Upwork.png";
// import Fiverr from "../../img/fiverr.png";
// import Amazon from "../../img/amazon.png";
// import Shopify from "../../img/Shopify.png";
// import Facebook from "../../img/Facebook.png";
import PostgreSQL from "../../img/postgresql.png";
import ReactPng from "../../img/react.png";
import Go from "../../img/go.png";
import NodeJs from "../../img/nodejs.png";
import Firebase from "../../img/firebase.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import { Link } from 'react-scroll'
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
          <span style={{ color: darkMode ? "white" : "" }}>
            Tech that I recently learn
          </span>
          <span>Language / Framework</span>
          <span>
            These are Tech that recently I learn by myself
            <br />
            Lately I've been intrigued learning more and more about Golang
            <br />
            Also There is another programming language I learned in the past such as
            <br />
            PHP, JAVA, C, Android Studio, Unity, etc...
          </span>
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
            <img src={ReactPng} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={NodeJs} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Go} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={Firebase} alt="" />
          </div>
          <div className="w-secCircle">
            <img src={PostgreSQL} alt="" />
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
