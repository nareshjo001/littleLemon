import React, { useState } from 'react';

const BookingForm = ({ availabeTimes = { availabeTimes: [] }, dispatch = () => {}, submitForm = () => {} }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guest, setGuest] = useState('');
  const [occasion, setOccasion] = useState('Birthday');

  // Handle date change and dispatch to parent
  const handleChange = (value) => {
    const newDate = new Date(value);
    setDate(value);
    dispatch({ type: 'update', date: newDate });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, time, guest: Number(guest), occasion });
  };

  const isDataEntered = date && time && Number(guest) > 0 && occasion;

  return (
    <header>
      <p style={{textAlign:"center", fontSize:"40px", fontWeight:"500", color:"#F4CE14"}}>
        Book Your Table Now!
      </p>
      <section>
        <form onSubmit={handleSubmit}>
          <fieldset>
            {/* Date Input */}
            <div>
              <label htmlFor="book-date">Choose Date:</label>
              <input
                id="book-date"
                type="date"
                value={date}
                onChange={(e) => handleChange(e.target.value)}
                required
                aria-required="true"
              />
            </div>

            {/* Time Input */}
            <div>
              <label htmlFor="book-time">Choose Time:</label>
              <select
                id="book-time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                required
                aria-required="true"
              >
                <option value="">Select a time</option>
                {availabeTimes?.availabeTimes?.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>

            {/* Guest Count Input */}
            <div>
              <label htmlFor="book-guests">Number of Guests:</label>
              <input
                id="book-guests"
                type="number"
                min="1"
                value={guest}
                onChange={(e) => setGuest(e.target.value)}
                required
                aria-required="true"
              />
            </div>

            {/* Occasion Input */}
            <div>
              <label htmlFor="book-occasion">Occasion:</label>
              <select
                id="book-occasion"
                value={occasion}
                onChange={(e) => setOccasion(e.target.value)}
                required
                aria-required="true"
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
              </select>
            </div>

            {/* Submit Button */}
            <div className="btnReceive">
              <input
                type="submit"
                value="Make Your Reservation"
                disabled={!isDataEntered}
                aria-label="Make reservation for selected date, time, guests, and occasion"
              />
            </div>
          </fieldset>
        </form>
      </section>
    </header>
  );
};

export default BookingForm;