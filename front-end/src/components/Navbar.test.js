import React from 'react';
import { render, screen} from "@testing-library/react";
import Navbar from './Navbar'

test("Renders without errors", ()=> {
    render(<Navbar/>)
})

