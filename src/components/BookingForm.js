import { useState } from 'react';

const ErrorMessage = () => {
  return (
    <p className="absolute right-0 top-7 bg-tertiary rounded text-white px-2 font-bold uppercase text-sm">Required</p>
  );
 };

function BookingForm({ availableTimes, dispatchOnDateChange, submitData }) {
    const minDate = new Date().toISOString().split('T')[0];
    const startTime = availableTimes[0];
    const [firstName, setFirstName] = useState({
      value: '',
      isTouched: false,
    });
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState({
      value: '',
      isTouched: false,
    });
    const [date, setDate] = useState(minDate);
    const [time, setTime] = useState(startTime);
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState({
      value: 'Select',
      isTouched: false,
    });

    // handle date and time
    const handleDateChange = e => {
      setDate(e.target.value);
      dispatchOnDateChange(e.target.value);
    };

    const handleTimeChange = e => setTime(e.target.value);

    // check if all fields are filled
    const isFormValid = () => {
        return (
          firstName.isTouched && firstName.value.length > 2 &&
          phone.isTouched && phone.value.length > 2 &&
          date &&
          time &&
          guests &&
          occasion.value !== 'Select'
        );
    };


    // reset form after submit
    const clearForm = () => {
        setFirstName({
          value: '',
          isTouched: false,
        });
        setLastName('');
        setEmail('');
        setPhone({
          value: '',
          isTouched: false,
        });
        setDate('');
        setTime('');
        setGuests('');
        setOccasion({
          value: 'Select',
          isTouched: false,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        submitData({ date, time, guests, occasion, });
        clearForm();
    };

    return (
      <>
        <form
        className="grid grid-cols-1 gap-4 max-w-2xl sm:grid-cols-2"
        onSubmit={handleSubmit}
        aria-label="Booking Form"
        >
            <div className="flex flex-col gap-1 relative">
                <label htmlFor="res-date">First Name <span className='text-tertiary'>*</span></label>
                <input className={firstName.isTouched && firstName.value.length < 2 ?
                'bg-primary-200 py-2 px-4 border border-primary rounded focus:outline-tertiary border-tertiary' :
                'bg-primary-200 py-2 px-4 border border-primary rounded focus:outline-none'}
                type="text"
                id="first-name"
                placeholder='John'
                required
                aria-required="true"
                aria-label="First Name"
                value={firstName.value}
                onChange={(e) => {
                  setFirstName({ ...firstName, value: e.target.value });
                }}
                onBlur={() => {
                  setFirstName({ ...firstName, isTouched: true });
                }}
                />
                {firstName.isTouched && firstName.value.length < 2 ? (
                  <ErrorMessage />
                ) : null}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="res-date">Last Name</label>
                <input className="bg-primary-200 py-2 px-4 border
                border-primary rounded focus:outline-tertiary"
                type="text"
                id="last-name"
                placeholder='Doe'
                value={lastName}
                aria-label="Last Name"
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="res-date">Email</label>
                <input className="bg-primary-200 py-2 px-4 border
                border-primary rounded focus:outline-tertiary"
                type="text"
                id="email"
                placeholder='john.doe@email.com'
                aria-label="Your Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                />
            </div>
            <div className="flex flex-col gap-1 relative">
                <label htmlFor="res-date">Phone <span className='text-tertiary'>*</span></label>
                <input className={phone.isTouched && phone.value.length < 10 ?
                'bg-primary-200 py-2 px-4 border border-primary rounded focus:outline-tertiary border-tertiary' :
                'bg-primary-200 py-2 px-4 border border-primary rounded'}
                type="text"
                id="phone"
                placeholder='010 1234567'
                required
                aria-required="true"
                aria-label="Your Phone Number"
                value={phone.value}
                onChange={(e) => {
                  setPhone({ ...phone, value: e.target.value });
                }}
                onBlur={() => {
                  setPhone({ ...phone, isTouched: true });
                }}
                />
                {phone.isTouched && phone.value.length < 10 ? (
                  <ErrorMessage />
                ) : null}
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="res-date">Choose date <span className='text-tertiary'>*</span></label>
                <input className="bg-primary-200 py-2 px-4 border
                border-primary rounded focus:outline-tertiary"
                type="date"
                id="res-date"
                required
                aria-required="true"
                aria-label="Amount of guests"
                min={minDate}
                value={date}
                onChange={handleDateChange}
                />
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="res-time">Choose time <span className='text-tertiary'>*</span></label>
                <select className="bg-primary-200 py-2 px-4 border
                border-primary rounded focus:outline-tertiary" 
                id="res-time"
                aria-required="true"
                aria-label="Choose time"
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
                border-primary rounded focus:outline-tertiary"
                type="number"
                placeholder="1"
                min="1"
                max="10"
                id="guests"
                required
                aria-required="true"
                aria-label="Amount of guests"
                value={guests}
                onChange={(e) => {
                    setGuests(e.target.value);
                  }}
                />
            </div>
            <div className="flex flex-col gap-1 relative">
                <label htmlFor="occasion">Occasion <span className='text-tertiary'>*</span></label>
                <select className={occasion.isTouched && occasion.value === 'Select' ?
                'bg-primary-200 py-2 px-4 border border-primary rounded focus:outline-tertiary border-tertiary' :
                'bg-primary-200 py-2 px-4 border border-primary rounded'}
                id="occasion"
                required
                aria-required="true"
                aria-label="Occasion"
                value={occasion.value}
                onChange={(e) => {
                    setOccasion({ ...occasion, value: e.target.value });
                  }}
                onBlur={() => {
                  setOccasion({ ...occasion, isTouched: true });
                }}
                >
                    <option>Select</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Other</option>
                </select>
                {occasion.isTouched && occasion.value === 'Select' ? (
                  <ErrorMessage />
                ) : null}
            </div>
            <button
            className="btn mt-4"
            type="submit"
            aria-label="Send Reservation"
            disabled={!isFormValid()}>
              Make Your Reservation
            </button>
        </form>
      </>
    );
  }

export default BookingForm;