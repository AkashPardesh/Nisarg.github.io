import Card from '../UI/Card';
import MealItem from '../Meals/HandleMeals/MealItem';
import classes from './AvailableMeals.module.css';
import { useEffect,useState } from 'react';



const AvailableMeals = () => {
  const [meals,setMeals] = useState([]);
  const [isloading, setloding] = useState(true);
  const [httperror, sethttpError] = useState();
   useEffect(()=>{
     const fetchData =async()=>{
       const response = await fetch("https://thefood-f6eff-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json");
       const responseData = await response.json();
       console.log(responseData);

       if(!response.ok){
         throw new Error("Something went wrong!");
       }
        const loadData = [];
        for(const key in responseData){
          loadData.push({
            id:key,
            name:responseData[key].name,
            description : responseData[key].description,
            price:responseData[key].price,
          });
        }
        setMeals(loadData);
        setloding(false);
     };
      fetchData().catch(error=>{
        setloding(false);
        sethttpError(error.message);
      });
   },[])

   if(isloading){
     return <section className={classes.check}>
       <h1>Loading.....</h1>
     </section>
   }
   if(httperror){
     return<section className={classes.errora}>
       <h1>{httperror}</h1>
     </section>
   }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (<div id="unique">
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
    </div>
  );
};

export default AvailableMeals;