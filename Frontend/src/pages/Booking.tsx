import React from "react";
import { Link } from "react-router-dom";

const Booking: React.FC = () => {
  // Giả dữ liệu phòng tạm thời
  const rooms = [
    { id: 1, name: "Phòng Deluxe", price: 1200000, image: "https://via.placeholder.com/250" },
    { id: 2, name: "Phòng Standard", price: 800000, image: "https://via.placeholder.com/250" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Danh sách phòng</h2>
      <div style={{ display: "flex", gap: "20px" }}>
        {rooms.map((room) => (
          <div key={room.id} style={{ border: "1px solid #ccc", padding: "10px", width: "250px" }}>
            <img src={room.image} alt={room.name} style={{ width: "100%" }} />
            <h3>{room.name}</h3>
            <p>Giá: {room.price.toLocaleString()} VND</p>
            <Link to={`/room/${room.id}`}>Xem chi tiết</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Booking;
