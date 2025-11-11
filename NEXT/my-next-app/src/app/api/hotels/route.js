// app/api/hotels/route.js
import { NextResponse } from "next/server";

  const hotels = [
    { id: 101, name: "Hotel Sunrise", location: "Goa" },
    { id: 102, name: "Mountain View Resort", location: "Manali" },
    { id: 103, name: "Ocean Breeze Inn", location: "Kerala" },
    { id: 104, name: "Desert Dunes Hotel", location: "Rajasthan" },
    { id: 105, name: "City Central Hotel", location: "Mumbai" },
  ];



export async function GET() {
  return NextResponse.json(hotels);
}

export async function POST(request) {
  const { name, location } = await request.json();

  if (!name || !location ) {
    return NextResponse.json(
      { message: "All fields (name, location, rating) are required" },
      { status: 400 }
    );
  }

  const newHotel = {
    id: hotels.length ? hotels[hotels.length - 1].id + 1 : 1,
    name,
    location,
  };

  hotels.push(newHotel);
  return NextResponse.json({ message: "Hotel added successfully", newHotel }, { status: 201 });
}
