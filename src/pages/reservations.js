import BookingForm from '../components/BookingForm';
import ConfirmedBooking from '../components/ConfirmedBooking';
import { useReducer, useState } from 'react';
import { fetchAPI, submitAPI } from "../util/api";

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...fetchAPI(new Date())];

function Reservations() {
  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);
  const [responseVal, setResponseVal] = useState(false);

  const submitData = formData => {
    const response = submitAPI(formData);
    if(response) {
      setResponseVal(true);
    }
  };

  return (
    <section className="container py-16">
      <h1 className="text-primary text-6xl serif -mb-2">
        {responseVal === false ? `Let's book a table` : 'Booking Confirmed'}
      </h1>
      <h3 className="text-primary text-3xl m-0 serif">
        {responseVal === false ? `Well get back to you within 24u after your reservations` : 'Great job, we received your reservation'}
      </h3>
      <p className="py-4">
        {responseVal === false ? `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
        architecto repellat accusantium quam recusandae nihil illo
        voluptates assumenda dolores a voluptatum soluta dolorem possimus
        esse modi, quos aperiam libero magni!` : ''}
      </p>
      {responseVal === false &&
        <BookingForm
          availableTimes={availableTimes}
          dispatchOnDateChange={dispatchOnDateChange}
          submitData={submitData}
        />
      }
      {responseVal === true && <ConfirmedBooking />}
    </section>
  );
}
export default Reservations;
