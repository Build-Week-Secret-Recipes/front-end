import React from 'react';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import mockFetchShow from '../../api/fetchShow';
jest.mock('../../api/fetchShow');


// App Runs
test('app runs' , () => {
    render (<App />)
});



// Can Create a New Account 

test ('create new account' , () => {

});
// Can Sucessfully Login
test (' Can Log In ' , () => {

});

// Can add a new recipe 
test ('Can Make New Recipe' , () => {

});


// Can Search for new Recipes 
test ('Can Search for Recipes' , () => {

});