import { render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test('renders learn react link', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText("Make Your Reservation");
  expect(headingElement).toBeInTheDocument();
});
