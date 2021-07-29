import React from "react";
import burger from '../../../assets/burger.jpg';
import sus from '../../../assets/sua.jpg';
import bowl from '../../../assets/bowl.jpg';
import piz from '../../../assets/pizza1.png';
import san from '../../../assets/san.jpg';


const Prices = () => {
  return (
    <div className="prices">
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="price">
              <div className="price__img">
                <img src={burger} alt="pizza" />
              </div>
              <h1 className="price__heading">Burger</h1>
              <p className="price__text">It is typically considered a sandwich, consisting of one or more cooked patties of ground meat, 
              usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled
              , smoked or flame broiled
              </p>
              <p className="price_rs">Rs 200</p>
            </div>
          </div>

          <div className="col-3">
            <div className="price">
              <div className="price__img">
                <img src={sus}alt="pizza" />
              </div>
              <h1 className="price__heading">Sushi</h1>
              <p className="price__text">
              Sushi is a traditiona dish  prepared  from vinegared rice, usually with some sugar and 
              salt, accompanying a variety of ingredients, such as seafood, often raw, and vegetables. 
              Styles of sushi and its presentation vary widely, but the one key ingredient is "sushi rice",
              </p>
              <p className="price_rs">Rs 200</p>
            </div>
          </div>

          <div className="col-3">
            <div className="price">
              <div className="price__img">
                <img src={bowl} alt="pizza" />
              </div>
              <h1 className="price__heading">Green Bowl</h1>
              <p className="price__text">This bowl is so light and so filling at the same time. 
              It’s full of green goodness, but all of its ingredients have high amounts of protein to keep us full throughout the day. The quinoa, chickpeas, spinach, and broccoli are responsible for making this bowl a
               protein powerhouse.
              </p>
              <p className="price_rs">Rs 150</p>
            </div>
          </div>

         

          <div className="col-3">
            <div className="price">
              <div className="price__img">
                <img src={piz} alt="pizza" />
              </div>
              <h1 className="price__heading">Pizza Margeritta</h1>
              <p className="price__text">Pizza, dish  consisting of a flattened disk of bread dough 
              topped with some combination of olive oil, oregano, tomato, olives, mozzarella or other cheese, and many
               other ingredients, baked quickly—usually, in a commercial setting.


              </p>
              <p className="price_rs">Rs 250</p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Prices;
