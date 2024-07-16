import React from "react";
import "./css/styles.css"
import headerPicture from "../static/pictures/header/headerPicture.png"



const Header = () => {
    
   
  return (
    <div id="header">
        <div id="picHeader">
            <img src={headerPicture} alt="logo"></img>
        </div>
        <div id="textHeader">
          <div id="textHeaderFirstText">
            PRVaaaaÁ HRA S PÍSMENKAMI A ČÍSLMAMI
          </div>
        </div>  
    </div>
)
}

export default Header
