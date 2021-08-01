import axios from 'axios';
import React, { useState } from 'react'

const Steps = () => {

    return(
        <div className="steps-container">
            <ul>Recipe Name: 
                <ol>Steps Order:
                    {}
                </ol>
                <ol>Steps Instructions:
                    {}
                </ol>
            </ul>
        </div>
    )
}

export default Steps