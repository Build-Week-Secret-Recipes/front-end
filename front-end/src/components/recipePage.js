import axios from 'axios';
import React, { useState } from 'react'

const Recipe = () =>  { 

    const initialState = {
        userId: '',
        img: '',
        recipeName: '',
        description: '',
        prepTime: '',
        cookTime: '',
    }

    const [recipe, setRecipe] = useState([])
    const [editing, setEditing] = useState(false);

    const [recipeForm, setRecipeForm] = useState({initialState})

    const handleChange = e => {
        e.preventDefault();
        const {name, value, type, checked } = e.target;
        const trueValue = type === 'checkbox' ? checked : value;
        setRecipeForm({...recipeForm, [name]:trueValue })
    }

    const toggleEdit = value => {
        setEditing(value);
    }

    const deleteRecipe = (recipeToDelete) => {
        axios
        .delete(`https://secret-recipes-backend.herokuapp.com/api/recipe/${recipeToDelete.id}`)
        .then(() => {
            setRecipe(recipe.filter(recipe => recipe.id !== recipeToDelete.id))
        })
        .catch(err => console.log("err deleting recipe: "))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios().post('https://secret-recipes-backend.herokuapp.com/api/recipes', recipeForm)
        .then(res => {
            setRecipeForm({res})
        })
    }

    // Put ingredients and steps inside return

    return (
        <div>
            
            <span className="deleteRecipe" onClick={deleteRecipe}>x</span>

            <form onSubmit={handleSubmit}>
                <label >User ID:
                    <input type="text" name='userId' onChange={handleChange} value={recipeForm.admin} />
                </label>
                <label >img:
                    <input type="text" name='recipeImg' onChange={handleChange} value={recipeForm.username} placeholder='img URL here' />
                </label>
                <label >Recipe Name:
                    <input type="text" name='recipeName' onChange={handleChange} value={recipeForm.password} placeholder='Name of recipe here' />
                </label>
                <label >Description:
                    <input type="text" name='decription' onChange={handleChange} value={recipeForm.firstname} placeholder='Description here' />
                </label>
                <label >Prep Time:
                    <input type="text" name='prepTime' onChange={handleChange} value={recipeForm.lastname} placeholder='prepTime' />
                </label>
                <label >Cook Time:
                    <input type="text" name='cookTime' onChange={handleChange} value={recipeForm.email} placeholder='cookTime' />
                </label>
                <button>Save Recipe</button>
            </form>
        </div>
    )
}

export default Recipe