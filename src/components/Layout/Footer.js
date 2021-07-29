import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

import classes from './Footer.module.css';


const Footer = () => {

return(<div id='social'>
    <div id="foot"className={classes.footer}>

  
    <div className="social-container">
    <h3>Copyright &copy; 2020</h3>
      
    <a href="#"
    className="youtube social">
    <FontAwesomeIcon icon={faYoutube} size="2x" />
    </a>
  <a href="#/"
    className="facebook social">
    <FontAwesomeIcon icon={faFacebook} size="2x" />
  </a>
  <a href="#" className="twitter social">
    <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
    <a href="#"
    className="instagram social">
    <FontAwesomeIcon icon={faInstagram} size="2x" />
    </a>
    </div>

  </div>
  </div>
);
}

export default Footer;

