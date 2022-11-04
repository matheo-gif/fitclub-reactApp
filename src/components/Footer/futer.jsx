import React from 'react';
import './Footer.css';
import Github from "../../assets/github.png";
import Instagram from "../../assets/instagram.png";
import LinkedIn from "../../assets/linkedin.png";
import Logo from "../../assets/logo.png";

export const Futer = () => {
  return (
    <div className='Footer-container'>
        <hr/>
        <div className="Footer">
          <div className="social-links">
        <img src={Github} alt="" />
        <img src={Instagram} alt="" />
        <img src={LinkedIn} alt="" />
        </div>
        <div className="logo">
            <img src={Logo} alt="" />
        </div>
        <div className="blur blur-footer-1"></div>
        <div className="blur blur-footer-2"></div>
        </div>
        
    </div>
  )
}
export default Futer;
