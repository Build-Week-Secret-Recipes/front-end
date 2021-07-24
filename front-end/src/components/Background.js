import React from 'react';
import '../App.css';
import { Button } from './Button';
import './Background.css';

function MainSection() {
  return (
    <div className='hero-container'>
      
      <h1>Secret Family Recipes</h1>
      <p></p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          GET STARTED
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          View Recipes <i className='far fa-play-circle' />
        </Button>
      </div>
    </div>
  );
}

export default MainSection;
