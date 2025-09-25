// TableReservation.jsx
import { useState } from 'react';

const TableReservation = ({ onReserve }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [people, setPeople] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create a reservation object
    const reservation = {
      name,
      date,
      time,
      people,
    };

    // Call the onReserve function to add the reservation
    onReserve(reservation);

    // Reset form fields
    setName('');
    setDate('');
    setTime('');
    setPeople(1);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border bg-zinc-800 p-2 rounded w-full"
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        className="border bg-zinc-800  p-2 rounded w-full"
        required
      />
      <input
        type="time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="border bg-zinc-800  p-2 rounded w-full"
        required
      />
      <input
        type="number"
        value={people}
        onChange={(e) => setPeople(e.target.value)}
        min="1"
        placeholder="Number of People"
        className="border bg-zinc-800  p-2 rounded w-full"
        required
      />
      <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">Reserve Table</button>
    </form>
  );
};

export default TableReservation;
