import React from "react";
import AvailableMeal from "./AvailableMeals";
import MealSummary from "./MealSummary";
import Body from "../Layout/Body/Body";
import Shop from "../Layout/Body/Shop";
import Items from "../Layout/Body/Items";
import Clients from "../Layout/Body/Client";
function Meals(){
return(
    <React.Fragment>
        
        <Body></Body>
        <Shop></Shop>
        <Items></Items>
        <MealSummary></MealSummary>
        <AvailableMeal></AvailableMeal>
        <Clients></Clients>

    </React.Fragment>
);

}

export default Meals;