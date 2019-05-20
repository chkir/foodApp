import React from 'react';
import style from './recipe.module.css';


const Recipe = ({title, calories, image, url, ingredients}) => {
    return(
        <div className={style.recipe}>
            <h1>{title}</h1>
            <img class={style.image}src={image} /><br />
            <p>Aantal calorieën: {calories} per portie</p>
            <ul>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ul>
            <a href={url} target="_blank">Naar het recept</a>
        </div>
    ); 
}


export default Recipe;