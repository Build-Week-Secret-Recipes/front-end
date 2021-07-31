import React from 'react';
import './Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline', 'btn--test'];

const SIZES = ['btn--medium', 'btn--large'];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0];

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};

// //“scripts”: {
//     “server”: “nodemon index.js”,
//     “start”: “node index.js”,
//     “migrate”: “knex migrate:latest”,
//     “seed”: “knex seed:run”,
//     “test”: “cross-env DB_ENV=testing jest --watchAll --verbose --runInBand”
//   }


/*
        "image": null,
        "recipe_name": "Spaghetti",
        "description": "Don't toucha my Spaghet",
        "prep_time": "15 minutes",
        "cook_time": "15 minutes" 
*/