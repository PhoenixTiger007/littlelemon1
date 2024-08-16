// src/__tests__/BookingForm.test.jsx

import { render, screen } from '@testing-library/react';
import BookingForm from '../Components/BookingForm'; // Adjust the import path as necessary

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} />);
    const headingElement = screen.getByText("Reserve Your Table"); // Adjust the text to match what your component actually renders
    expect(headingElement).toBeInTheDocument();
});
