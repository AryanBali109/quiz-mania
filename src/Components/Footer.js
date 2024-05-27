import React from "react";

// imorting icons
import Linkedinicon from '../assets/LinkedIcon.png'
import instagramicon from '../assets/InstagramIcon.png'
import twittericon from '../assets/TwitterIcon.png'
function Footer() {
  return (
    <footer>
      <div className="footer-box-1">
        <h1 id="footer-heading">Aryan <span id="heading-span">Bali</span></h1>
        <p className="footer-para">Front-end-developer</p>
      </div>
      <div className="footer-box-2">
        <a target="_blank"  href="http://www.linkedin.com/in/aryanbali109">
          <img src={Linkedinicon} alt="error" className="iconimage" />
        </a>
        <a target="_blank"  href="https://www.instagram.com/aryan_bali_109/">
          <img src={instagramicon} alt="error" className="iconimage" />
        </a>
        <a target="_blank" href="https://twitter.com/aryan_bali_109">
          <img src={twittericon} alt="error" className="iconimage" />
        </a>
      </div>
      <div className="footer-box-1">
        <p className="footer-para">@Copyright.All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
