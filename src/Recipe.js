import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title, calories, image, url, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <p>Aantal calorieën: {calories}</p>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <img class={style.image}src={image} /><br />
            <a href={url}>Naar het recept!</a>
        </div>
    ); 
}


export default Recipe;