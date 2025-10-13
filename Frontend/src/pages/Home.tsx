import { Link } from "react-router-dom";

const Home = () => {
  const rooms = [
    { id: 1, name: "Phòng Deluxe", price: 500000 },
    { id: 2, name: "Phòng VIP", price: 1000000 },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Danh sách phòng</h1>
      <div className="grid grid-cols-2 gap-4">
        {rooms.map((room) => (
          <div key={room.id} className="p-4 border rounded">
            <h2>{room.name}</h2>
            <p>Giá: {room.price.toLocaleString()} VND</p>
            <Link to={`/room/${room.id}`} className="text-blue-500 underline">
              Xem chi tiết
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
