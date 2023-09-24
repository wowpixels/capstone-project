import { useState } from 'react';

function BookingForm({availableTimes,setAvailableTimes}) {
    const timeList = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    const [date, setDate] = useState();
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState('Birthday');

    const displayAvailableTimes = timeList.map((time, index) =>
        <option key={index}>
            {time}
        </option>
    );

    const getIsFormValid = () => {
        return (
          date &&
          availableTimes &&
          guests &&
          occasion
        );
    };

    const clearForm = () => {
        setDate("");
        setAvailableTimes("");
        setGuests("");
        setOccasion("");
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Great, we received your reservation!");
        clearForm();
    };

    return (
      <>
        <form className="grid gap-4 max-w-md" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
                <label htmlFor="res-date">Choose date <span className='text-tertiary'>*</span></label>
                <input className="bg-primary-200 py-2 px-4 border
                border-primary rounded" type="date" id="res-date"
                value={date}
                onChange={(e) => {
                    setDate(e.target.value);
                  }}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="res-time">Choose time <span className='text-tertiary'>*</span></label>
                <select className="bg-primary-200 py-2 px-4 border
                border-primary rounded" id="res-time"
                value={availableTimes}
                onChange={(e) => {
                    setAvailableTimes(e.target.value);
                  }}
                >
                    {displayAvailableTimes}
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
                </select>
            </div>
            <button className="btn mt-4" type="submit" disabled={!getIsFormValid()}>
                Make Your Reservation
            </button>
        </form>
      </>
    );
  }

export default BookingForm;