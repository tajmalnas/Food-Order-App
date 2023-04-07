import React from 'react'
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem/MealItem';

const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Vada Pav',
      description: 'Famous fast food',
      price: 20,
    },
    {
      id: 'm2',
      name: 'Biryani',
      description: 'A special dsh!',
      price: 180,
    },
    {
      id: 'm3',
      name: 'Burger',
      description: 'Not from Mcdonalds',
      price: 35.5,
    },
    {
      id: 'm4',
      name: 'Paneer Masala',
      description: 'Healthy   and  Tasty',
      price: 120,
    },
  ];

const AvailableMeals = () => {
    const mealsList =DUMMY_MEALS.map(meal=><MealItem id={meal.id} key={meal.id} name={meal.name} description={meal.description} price={meal.price}/>)
  return (
    <section className={classes.meals}>
    <Card>
        <ul>
           {mealsList}
        </ul>
    </Card>
    </section>
  )
}

export default AvailableMeals