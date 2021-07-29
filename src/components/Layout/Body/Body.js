import sushi from '../../../assets/sushi.jpg';
//import imaa from './Body.module.css';
//import bur from '../../assets/burger.jpg';
//import {Row,Col,Container} from 'react-bootstrap';

import React from 'react';
import './Body.css';



function Body() {
    
    return(
      <div className="about">
      <div className="container">
        <div className="row">
          <div className="col-6 p-25">
            <h3>About Us</h3>
            <h1>WELCOME TO NISHARG </h1>
            <p>We imagine a world where there’s no such thing as a waste of food and all  farmers live prosperously.We are providing genuine services to all customers,do come its all yours!!
            </p>
            <div className="about__btn">
              <a href="" className="btn btn-smart">
                READ MORE
              </a>
            </div>
          </div>
          <div className="col-6">
            <div className="about__img">
              <img src={sushi} alt="Pizza" />
            </div>
          </div>
        </div>
      </div>
    </div>
    );



}


export default Body;