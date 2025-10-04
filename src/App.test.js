import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './components/BookingForm';

test("Booking Heading is rendered and form inputs work", () => {
  const mockProps = {
    availabeTimes: { availabeTimes: ["17:00", "18:00"] },
    dispatch: jest.fn(),
    submitForm: jest.fn()
  };

  render(<BookingForm {...mockProps} />);

  // Check heading
  const heading = screen.getByText("Book Your Table Now!");
  expect(heading).toBeInTheDocument();

  // Interact with date input
  const dateInput = screen.getByLabelText("Choose Date:");
  fireEvent.change(dateInput, { target: { value: "2025-10-05" } });
  expect(dateInput.value).toBe("2025-10-05");

  // Interact with time dropdown
  const timeSelect = screen.getByLabelText("Choose Time:");
  fireEvent.change(timeSelect, { target: { value: "17:00" } });
  expect(timeSelect.value).toBe("17:00");

  // Interact with guests input
  const guestInput = screen.getByLabelText("Number of Guests:");
  fireEvent.change(guestInput, { target: { value: "4" } });
  expect(guestInput.value).toBe("4");

  // Interact with occasion select
  const occasionSelect = screen.getByLabelText("Occasion:");
  fireEvent.change(occasionSelect, { target: { value: "Anniversary" } });
  expect(occasionSelect.value).toBe("Anniversary");

  // Submit form using aria-label
  const submitBtn = screen.getByLabelText("On Click");
  fireEvent.click(submitBtn);

  // Ensure submitForm mock was called with correct data
  expect(mockProps.submitForm).toHaveBeenCalledWith({
    date: "2025-10-05",
    time: "17:00",
    guest: "4",
    occasion: "Anniversary"
  });
});