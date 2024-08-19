import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} />);
    const headingElement = screen.getByText("Reserve Your Table");
    expect(headingElement).toBeInTheDocument();
});

// Tests for HTML5 Validation Attributes
describe('BookingForm HTML5 Validation', () => {
  test('Name input should have required attribute', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);
    const nameInput = screen.getByLabelText(/Name/i);
    expect(nameInput).toBeRequired();
  });

  test('Phone number input should have required and pattern attributes', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);
    const phoneInput = screen.getByLabelText(/Phone Number/i);
    expect(phoneInput).toBeRequired();
    expect(phoneInput).toHaveAttribute('pattern', '[0-9]{10}');
  });

  test('Email input should have required attribute', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);
    const emailInput = screen.getByLabelText(/Email Address/i);
    expect(emailInput).toBeRequired();
  });

  test('Date input should have required attribute', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);
    const dateInput = screen.getByLabelText(/Choose date/i);
    expect(dateInput).toBeRequired();
  });

  test('Guests input should have required, min, and max attributes', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);
    const guestsInput = screen.getByLabelText(/Number of guests/i);
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute('min', '1');
    expect(guestsInput).toHaveAttribute('max', '10');
  });

  test('Occasion input should have required attribute', () => {
    render(<BookingForm availableTimes={[]} dispatch={jest.fn()} submitForm={jest.fn()} />);
    const occasionInput = screen.getByLabelText(/Occasion/i);
    expect(occasionInput).toBeRequired();
  });
});

// Tests for JavaScript Validation Functions
describe('BookingForm JavaScript Validation', () => {
  test('Should show alert when no time is selected', () => {
    const mockSubmitForm = jest.fn();
    global
