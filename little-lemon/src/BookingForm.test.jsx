import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    // Render the BookingForm component
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} />);
    
    // Get the heading element by its text
    const headingElement = screen.getByText("Reserve Your Table");
    
    // Assert that the heading is in the document
    expect(headingElement).toBeInTheDocument();
});
