import React from 'react';
import { render } from '@testing-library/react-native';

import App from './App';

it('check if exist hello world text', () => {
    const { getByText } = render(<App/>);

    const text = getByText('hello world!');

    expect(text).toBeTruthy();
})