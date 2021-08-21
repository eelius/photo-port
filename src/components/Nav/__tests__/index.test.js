import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import Nav from '..';

afterEach(cleanup);

describe('Nav Component', () => {
    it('renders', () => {
        render(<Nav />);
    })

    it('snapshot match', () => {
        const { asFragment } = render(<Nav />);
        expect(asFragment()).toMatchSnapshot();
    })
})

describe('emoji visible', () => {
    it('insert emoji in h2', () => {
        const { getByLabelText } = render(<Nav />);
        expect(getByLabelText('camera')).toHaveTextContent('📸')
    })
})

describe('links visible', () => {
    it('text present in links', () => {
        const { getByTestId } = render(<Nav />);
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');
    })
})