import BookingForm from '../components/BookingForm';
import { useReducer } from 'react';
import { fetchAPI, submitAPI } from "../util/api";

const updateTimes = (availableTimes, date) => {
  const response = fetchAPI(new Date(date));
  return (response.length !== 0) ? response : availableTimes;
};

const initializeTimes = initialAvailableTimes => [...initialAvailableTimes, ...fetchAPI(new Date())];

function Reservations() {
  const [availableTimes, dispatchOnDateChange] = useReducer(updateTimes, [], initializeTimes);

  const submitData = formData => {
    const response = submitAPI(formData);
    console.log('The booking was submitted:', response)
  };

  return (
    <section className="container py-16">
      <h1 className="text-primary text-6xl serif -mb-2">
        Let's book a table
      </h1>
      <h3 className="text-primary text-3xl m-0 serif">
        Well get back to you within 24u after your reservations
      </h3>
      <p className="py-4">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque
        architecto repellat accusantium quam recusandae nihil illo
        voluptates assumenda dolores a voluptatum soluta dolorem possimus
        esse modi, quos aperiam libero magni!
      </p>
      <BookingForm
        availableTimes={availableTimes}
        dispatchOnDateChange={dispatchOnDateChange}
        submitData={submitData}
      />
    </section>
  );
}
export default Reservations;
