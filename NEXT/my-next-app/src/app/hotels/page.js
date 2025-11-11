// app/page.js
export default function HomePage() {
  const hotels = [
    { id: 101, name: "Hotel Sunrise", location: "Goa" },
    { id: 102, name: "Mountain View Resort", location: "Manali" },
    { id: 103, name: "Ocean Breeze Inn", location: "Kerala" },
    { id: 104, name: "Desert Dunes Hotel", location: "Rajasthan" },
    { id: 105, name: "City Central Hotel", location: "Mumbai" },
  ];

  return (
    <main >
      <h1 style={{ padding: "10px" }}>List of Hotels</h1>
      <ul>
        {hotels.map((hotel) => (
          <li key={hotel.id} style={{ padding: "10px" }}>
            <strong>{hotel.name}</strong> (ID: {hotel.id}) <br />
          </li>
        ))}
      </ul>
    </main>
  );
}
