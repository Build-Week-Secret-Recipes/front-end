import axios from 'axios';
import React, { useState } from 'react'

class Ingredients extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: '',
            ingredient: '',
            ingredientsUnit: '',
        }

    }

    componentDidMount(){
        axios.get(`https://secret-recipes-backend.herokuapp.com/api/recipes/:id/ingredients`)
        .then(res => {
            this.state = res.data
        })
        .catch(err => console.log("this is an error: ",err))
    }

    render() {
        return(
            <div className='ingredients-container'>
                <ul>Recipe Name: {this.state.name}
                    <ol>ingredient:
                        {this.state.ingredient}
                    </ol>
                    <ol>how many of said ingredient:
                        {this.state.ingredientsUnit}
                    </ol>
                </ul>
            </div>
        )
    }
}

export default Ingredients