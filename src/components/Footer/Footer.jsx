import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>fransimanuel99@gmail.com</span>
        <p>Hello, just for disclaimer. this site created using reactjs and I learned it watching <a href="https://www.youtube.com/watch?v=CKAn5dCK6RE" target="_blank" rel="noopener">ZAINKEEPSCODE</a> youtube channel, pls check that video if you interested in</p>
        <div className="f-icons">
          <a href="https://github.com/fransImanuel" target="_blank" rel="noopener">
            <Gitub color="white" size={"3rem"} />
          </a>
          <a href="https://www.linkedin.com/in/frans-imanuel-567154190/" target="_blank" rel="noopener">
            <LinkedIn color="white" size={"3rem"} />
          </a>
          <a href="https://www.instagram.com/ima.nuelf/?hl=en" target="_blank" rel="noopener">
            <Insta color="white" size={"3rem"} />
          </a>
        </div>
      </div>

    </div>
  );
};

export default Footer;
