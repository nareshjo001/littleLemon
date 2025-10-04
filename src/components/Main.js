import React, { useReducer } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Header from './Header';
import Booking from './Booking';
import ConfirmedBooking from './ConfirmedBooking';

// Generates deterministic random numbers based on a seed (demo purpose)
const seedRandom = function(seed) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function() {
    return (s = (s * a) % m) / m;
  };
};

// Generate available times for a given date
const fetchAPI = function(date) {
  if (!(date instanceof Date)) return [];
  const result = [];
  const random = seedRandom(date.getDate());
  for (let i = 17; i <= 23; i++) {
    result.push(random() < 0.5 ? i + ':00' : i + ':30');
  }
  return result;
};

// Reducer for updating available times
function updateTimes(state, action) {
  if (action.type === 'update') {
    if (!(action.date instanceof Date)) return state;
    return { availabeTimes: fetchAPI(action.date) };
  }
  return state;
}

const Main = () => {
  const initialState = { availabeTimes: fetchAPI(new Date()) };
  const [state, dispatch] = useReducer(updateTimes, initialState);
  const navigate = useNavigate();

  // Handle form submission and navigate to confirmation page
  const submitForm = (formData) => {
    console.log('Form submitted:', formData);
    navigate('/confirmed');
  };

  return (
    <main>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route
          path="/booking"
          element={
            <Booking
              availabeTimes={state}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </main>
  );
};

export default Main;