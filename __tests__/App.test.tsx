import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react'; 

import App from '../src/App';

test("App", () => {
    render(<App/>);
    expect(screen.getByRole("heading", { name: "Rsbuild with React"}))}
);