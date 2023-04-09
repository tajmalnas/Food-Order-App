import React, { useEffect, useState } from 'react'
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

// const DUMMY_MEALS = [
//     {
//       id: 'm1',
//       name: 'Vada Pav',
//       description: 'Famous fast food',
//       price: 20,
//     },
//     {
//       id: 'm2',
//       name: 'Biryani',
//       description: 'A special dish!',
//       price: 180,
//     },
//     {
//       id: 'm3',
//       name: 'Burger',
//       description: 'Not from Mcdonalds',
//       price: 35.5,
//     },
//     {
//       id: 'm4',
//       name: 'Paneer Masala',
//       description: 'Healthy   and  Tasty',
//       price: 120,
//     },
//   ];



const AvailableMeals = () => {

  const [meals,setMeals] =useState([])
  const [isLoading,setIsloading]=useState(true);

  const [httpError,setHttpError] = useState();

  useEffect(()=>{
    const fetchMeals=async ()=>{
      const response = await  fetch('https://food-order-ec663-default-rtdb.firebaseio.com/meals.json')

      if(!response.ok){
        throw new Error('Something Went Wrong!')
      }

      const responseData=await response.json();

      const loadedMeals=[];

      for(const key in responseData){
        loadedMeals.push({
          id:key,
          name:responseData[key].name,
          description:responseData[key].description,
          price:responseData[key].price
        })
      }
      setMeals(loadedMeals);
      setIsloading(false);
    }
    
    fetchMeals().catch((error)=>{
      setIsloading(false);
      setHttpError(error.message)
    });
    
  },[])

  if(isLoading){
    return <section className={classes.mealsLoading}>
      <p>Loading...</p>
    </section>
  }

  if(httpError){
    return <section className={classes.mealsError}>
    <p>{httpError}</p>
  </section>
  }

    const mealsList =meals.map(meal=><MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)


  return (
    <section className={classes.meals}>
    <Card>
        <ul>
           {mealsList}
        </ul>
    </Card>
    </section>
  )
}//

export default AvailableMeals