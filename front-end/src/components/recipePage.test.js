import React from 'react';
import { render, screen} from "@testing-library/react";
import recipePage from './recipePage'

test("Renders without errors", ()=> {
    render(<recipePage/>)
})

