import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders the App component', () => {
  render(<App />);
  // Add your test assertions here
});
test('renders the DigitalTimer component when selected from the menu', () => {
    const { getByText, queryByText } = render(<App />);
    
    // Open the menu and select Digital Timer
    fireEvent.click(getByText('☰'));
    fireEvent.click(getByText('Digital Timer'));

    // Check if DigitalTimer is visible
    expect(queryByText(/Times up!/)).toBeInTheDocument();

    // Check if AnalogClock is not visible
    expect(queryByText(/minutes and seconds/)).not.toBeInTheDocument();
});

test('renders the AnalogClock component when selected from the menu', () => {
    const { getByText, queryByText } = render(<App />);
    
    // Open the menu and select Analog Timer
    fireEvent.click(getByText('☰'));
    fireEvent.click(getByText('Analog Timer'));

    // Check if AnalogClock is visible
    expect(queryByText(/minutes and seconds/)).toBeInTheDocument();

    // Check if DigitalTimer is not visible
    expect(queryByText(/Times up!/)).not.toBeInTheDocument();
});

test('Abort button is visible when DigitalTimer is selected', () => {
    const { getByText } = render(<App />);
    
    // Open the menu and select Digital Timer
    fireEvent.click(getByText('☰'));
    fireEvent.click(getByText('Digital Timer'));

    // Check if Abort button is visible
    expect(getByText('Abort Timer')).toBeInTheDocument();
});

test('Abort button is visible when AnalogClock is selected', () => {
    const { getByText } = render(<App />);
    
    // Open the menu and select Analog Timer
    fireEvent.click(getByText('☰'));
    fireEvent.click(getByText('Analog Timer'));

    // Check if Abort button is visible
    expect(getByText('Abort Timer')).toBeInTheDocument();
});