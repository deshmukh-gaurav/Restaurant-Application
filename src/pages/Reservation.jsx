
import { useState, useEffect } from "react";
import TableReservation from "../components/TableReservation";
import { getReservations, createReservation } from "../apiService";

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const fetchedReservations = await getReservations();
        setReservations(fetchedReservations);
      } catch (err) {
        console.error("Error loading reservations:", err);
        setError("Failed to load reservations.");
      } finally {
        setLoading(false);
      }
    };

    fetchReservations();
  }, []);

 
  const addReservation = async (reservation) => {
    try {
      const newReservation = await createReservation(reservation);
      setReservations((prevReservations) => [...prevReservations, newReservation]);
    } catch (err) {
      console.error("Error adding reservation:", err);
      setError("Failed to add reservation.");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="bg-zinc-900 min-h-screen text-white mx-auto p-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-3">Reserve a Table</h2>
        <TableReservation onReserve={addReservation} />

        <h3 className="text-xl font-semibold mt-8">Your Reservations</h3>
        <div className="border rounded-lg p-4">
          {reservations.length > 0 ? (
            reservations.map((reservation, index) => (
              <div key={index} className="flex justify-between py-2 border-b">
                <span>{reservation.name}</span>
                <span>{reservation.date}</span>
                <span>{reservation.time}</span>
                <span>{reservation.people} people</span>
              </div>
            ))
          ) : (
            <p>No reservations made yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Reservations;
