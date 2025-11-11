// app/hotels/[id]/page.js
const hotels = [
  { id: 101, name: "Hotel Sunrise", location: "Goa" },
  { id: 102, name: "Mountain View Resort", location: "Manali" },
  { id: 103, name: "Ocean Breeze Inn", location: "Kerala" },
  { id: 104, name: "Desert Dunes Hotel", location: "Rajasthan" },
  { id: 105, name: "City Central Hotel", location: "Mumbai" },
];

export default function HotelPage({ params }) {
  const hotelId = parseInt(params.id, 10);
  const hotel = hotels.find((h) => h.id === hotelId);

  if (!hotel) {
    return <h1>Hotel not found</h1>;
  }

  return (
    <main style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>{hotel.name}</h1>
      <p><strong>ID:</strong> {hotel.id}</p>
      <p><strong>Location:</strong> {hotel.location}</p>
      <a href="/hotels">&larr; Back to all hotels</a>
    </main>
  );
}
