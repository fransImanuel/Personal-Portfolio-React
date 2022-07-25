import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import waz from "../../img/waz.png";
import thesis from "../../img/thesis.png";
import valorantdom from "../../img/valorantdom.png";
import talky from "../../img/talky.png";
// import Sidebar from "../../img/sidebar.png";
// import Ecommerce from "../../img/ecommerce.png";
// import HOC from "../../img/hoc.png";
// import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{ color: darkMode ? 'white' : '' }}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <a href="https://skripsi-saw-guitar-2022-fe.herokuapp.com/" target="_blank" rel="noopener">
            <img src={thesis} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://whack-a-zombie-baf7e.web.app/" target="_blank" rel="noopener">
            <img src={waz} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://play.google.com/store/apps/details?id=com.talky.chattingapp" target="_blank" rel="noopener">
            <img src={talky} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <a href="https://fransimanuel.github.io/WBJ30-D1-Valorant.github.io/" target="_blank" rel="noopener">
            <img src={valorantdom} alt="" />
          </a>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
