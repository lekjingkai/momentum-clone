import React from "react";
import "../styles/Header.css";
//import testimage from "./assets/nature.jpg";
import testimage from "../assets/pexels-palu-malerba-2426546.jpg";
import Clock from './Clock'
import MainTitle from './MainTitle'
import MainFocus from './MainFocus'
import Quote from './Quote'
import Bottom from './Bottom'
import Top from './Top'

//Photo by Palu Malerba from Pexels
//https://www.pexels.com/@palumalerba?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels
//https://www.pexels.com/photo/green-leafed-plants-inside-greenhouse-2426546/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels
const Header = () => {
  const handleSectionClick = () => {
    document.getElementById("explore").scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div>
      <div className="gradient"></div>
      <div
        className="image2"
        style={{ backgroundImage: `url(${testimage})` }}
      ></div>
      <Top></Top>
      <div className="headerContainer">
        {/* <h1 className="header mainHeader">Explore Singapore</h1>
        <h2 className="header subHeader">Experience the Little Red Dot </h2>
        <p className="header headerText">
        A small dynamic, urban city full of culture, just waiting to be explored.
        </p>
        <button onClick={handleSectionClick} className="header-btn">Get Started</button> */}
              <Clock/>

      </div>
      <div className="headerContainer middleContent">
      <MainTitle></MainTitle>
<MainFocus></MainFocus>
      </div>

      <Bottom></Bottom>
    </div>
  );
};

export default Header;
