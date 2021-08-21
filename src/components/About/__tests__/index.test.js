import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import About from '..';

afterEach(cleanup);

describe('About component', () => {
    // Test the rendering of About component
    it('renders', () => {
        render(<About />);
    })

    // snapshot test
    it('macthes snapshot DOM node structure', () => {
        const { asFragment } = render(<About />);
        expect(asFragment()).toMatchSnapshot();
    })
})