import React from 'react';
import { render, screen} from "@testing-library/react";
import Login from './login'

test("Renders without errors", ()=> {
    render(<Login/>)
})