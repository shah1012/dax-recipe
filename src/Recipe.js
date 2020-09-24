import React from "react"
import Style from "./recipe.module.css"

const Recipe = ({title, calories, image, ingredients, url }) => {
    return(
        <div className={Style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <a href={url}>Link to instructions it works hi</a>
            <img className={Style.image} src={image} alt=""/>

        </div>
    )
}

export default Recipe