import React,{useState} from "react";

import classes from './Header.module.css';
import image from '../../assets/photo.jpg';
import HeaderCartButton from "./HeaderCartButton";
import {Link} from 'react-scroll';




function Header(props){
  const [nav,setnav] = useState(false);

  const changeBackground = ()=>{
    if(window.scrollY >= 50){
      setnav(true);
    }
    else{
      setnav(false);
    }

  }
  window.addEventListener('scroll',changeBackground);

    return(<div id="head">
        <React.Fragment>
            <header className={classes.header}>
               <h1>Nisarg</h1>

               <div className="navbar__text">
       
        
       <ul className="navbar__ul">
         <li>
           <Link to="head">Home</Link>
         </li>
         <li>
           <Link to="unique" smooth={true}>Menu</Link>
        
         </li>
       
        
         <li>
           <Link to="social">Social Handle</Link>
         </li>
       </ul>
     </div>
    
    
                     <HeaderCartButton onClick={props.onShowCart}></HeaderCartButton>
            </header>
            <div className={classes['main-image']}>
                <img src={image} alt="The table with delicious meals"></img>
            </div>
        </React.Fragment>
        </div>

    );


}


export default Header;