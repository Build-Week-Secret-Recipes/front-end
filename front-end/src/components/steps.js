import axios from 'axios';
import React, { useState } from 'react'

class Steps extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            recipeName: '',
            stepsOrder: '',
            stepsInstructions: '',
        }
    }


    componentDidMount(){
        axios.get(`https://secret-recipes-backend.herokuapp.com/api/recipes/:id/steps`)
        .then(res => {
            this.state = res.data
        })
        .catch(err => console.log("this is an error: ",err))

    }

    render(){
        return(
            <div className="steps-container">
                <ul>Recipe Name: {this.state.recipeName}
                    <ol>Steps Order:
                        {this.state.stepsOrder}
                    </ol>
                    <ol>Steps Instructions:
                        {this.state.stepsInstructions}
                    </ol>
                </ul>
            </div>
        )

    }
}

export default Steps