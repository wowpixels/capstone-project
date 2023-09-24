import BookingForm from '../components/BookingForm';
import { useState } from 'react';
import { useReducer } from 'react';

const updateTimes = (state, action) => {
return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
}

function Reservations() {
  // use the reducer state to update the time when selecting a date
  const initializeTimes = ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
  const [state, dispatch] = useReducer(updateTimes, initializeTimes);

  // Remove this later
  const [availableTimes, setAvailableTimes] = useState();

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
      setAvailableTimes={setAvailableTimes}  />
    </section>
  );
}
export default Reservations;
