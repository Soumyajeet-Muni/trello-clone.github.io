import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import star from "../img/star.png";
import Ae_Circle_Logo from "../img/Ae_Circle_Logo.png";
import people from "../img//people.png";
import plus from "../img//plus.png";
import thunder from "../img//thunder.png";

function Header() {
  return (
    <>  <nav className="navbar">
      <div>
      <span className="logo">&nbsp;&nbsp;&nbsp;FE-ASSIGNMENT &nbsp;&nbsp;</span>|&nbsp;
    <span className="wv"><img src={star} alt="star" className="ram" />&nbsp;</span>|&nbsp; 
    <span className="wv">&nbsp;<img src={people} alt="star" className="ram" />Workspace visible&nbsp;&nbsp;&nbsp;&nbsp;</span> 
    <span className="bl">|&nbsp;</span>
    <span className="bd">&nbsp;Board&nbsp;</span> |
      </div>
 
    <ul className="nav-links">
      <div className="menu">
        <li><Link className='wv' to="/">Power-Ups</Link>&nbsp;|</li>
        <li><Link className='wv' to="/"><img src={thunder} alt="star" className="ram" />Automation</Link>&nbsp;|</li>
        <li><Link className='wv' to="/">Filter</Link>&nbsp;|</li>
        <li><Link className='a' to="/"><img src={Ae_Circle_Logo} alt="star" className="ram" />&nbsp;|</Link></li>
        <li><Link className='bd' to="/"><img src={plus} alt="star" className="ram" />Share</Link>&nbsp;|</li>
        <li><Link className='amu' to="/">...</Link></li>
      </div>
    </ul>
  </nav></>
  );
}

export default Header;
