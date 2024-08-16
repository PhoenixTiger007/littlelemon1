import { render, screen } from '@testing-library/react';
import React from 'react';

test('renders a simple component', () => {
    render(<div>Hello, World!</div>);
    expect(screen.getByText('Hello, World!')).toBeInTheDocument();
});
