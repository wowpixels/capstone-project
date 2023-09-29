import { useState } from 'react';

function BookingForm({ availableTimes, dispatchOnDateChange, submitData }) {
    const minDate = new Date().toISOString().split('T')[0];
    const startTime = availableTimes[0];
    const [date, setDate] = useState(minDate);
    const [time, setTime] = useState(startTime);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('');

    // handle date and time
    const handleDateChange = e => {
      setDate(e.target.value);
      dispatchOnDateChange(e.target.value);
    };

    const handleTimeChange = e => setTime(e.target.value);

    // check if all fields are filled
    const isFormValid = () => {
        return (
          date &&
          time &&
          guests &&
          occasion
        );
    };

    // reset form after submit
    const clearForm = () => {
        setDate("");
        setTime("");
        setGuests("");
        setOccasion("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitData({ date, time, guests, occasion, });
        clearForm();
    };

    return (
      <>
        <form className="grid gap-4 max-w-md" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
                <label htmlFor="res-date">Choose date <span className='text-tertiary'>*</span></label>
                <input className="bg-primary-200 py-2 px-4 border
                border-primary rounded" type="date" id="res-date"
                min={minDate}
                value={date}
                onChange={handleDateChange}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="res-time">Choose time <span className='text-tertiary'>*</span></label>
                <select className="bg-primary-200 py-2 px-4 border
                border-primary rounded" id="res-time"
                value={time}
                required={true}
                onChange={handleTimeChange}
                >
                    {availableTimes.map(times =>
                      <option data-testid="booking-time-option" key={times}>
                        {times}
                      </option>
                    )}
                </select>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="guests">Number of guests <span className='text-tertiary'>*</span></label>
                <input className="bg-primary-200 py-2 px-4 border
                border-primary rounded" type="number" placeholder="1"
                min="1" max="10" id="guests"
                value={guests}
                onChange={(e) => {
                    setGuests(e.target.value);
                  }}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="occasion">Occasion <span className='text-tertiary'>*</span></label>
                <select className="bg-primary-200 py-2 px-4 border
                border-primary rounded" id="occasion"
                value={occasion}
                onChange={(e) => {
                    setOccasion(e.target.value);
                  }}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
            </div>
            <button className="btn mt-4" type="submit" disabled={!isFormValid()}>
                Make Your Reservation
            </button>
        </form>
      </>
    );
  }

export default BookingForm;