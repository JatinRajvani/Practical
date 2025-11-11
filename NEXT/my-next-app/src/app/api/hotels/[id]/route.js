import { NextResponse } from "next/server";


const hotels = [
  { id: 101, name: "Hotel Sunrise", location: "Goa" },
  { id: 102, name: "Mountain View Resort", location: "Manali" },
  { id: 103, name: "Ocean Breeze Inn", location: "Kerala" },
  { id: 104, name: "Desert Dunes Hotel", location: "Rajasthan" },
  { id: 105, name: "City Central Hotel", location: "Mumbai" },
];


export async function GET(request, { params }) {
  const resolvedParams = await params; // 
  const hotelId = parseInt(resolvedParams.id);
  console.log("Fetching hotel with ID:", hotelId);

  const hotel = hotels.find((h) => h.id === hotelId);

  if (!hotel) {
    return NextResponse.json({ message: "Hotel not found" }, { status: 404 });
  }

  return NextResponse.json(hotel);
}


export async function DELETE(request, { params }) {
  const resolvedParams = await params; // 
  const hotelId = parseInt(resolvedParams.id);

  const index = hotels.findIndex((h) => h.id === hotelId);

  if (index === -1) {
    return NextResponse.json({ message: "Hotel not found" }, { status: 404 });
  }

  const deletedHotel = hotels.splice(index, 1);

  return NextResponse.json({
    message: "Hotel deleted successfully",
    deletedHotel,
  });
}
