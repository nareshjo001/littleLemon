import React from 'react';
import BookingForm from './BookingForm';

// Booking page component that renders the BookingForm
const Booking = (props) => {
  return (
    <>
      <BookingForm
        availabeTimes={props.availabeTimes} // array of available times for reservation
        dispatch={props.dispatch}           // dispatch function for updating state
        submitForm={props.submitForm}       // function to handle form submission
      />
    </>
  );
};

export default Booking;