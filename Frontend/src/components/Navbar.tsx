import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user");

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between p-4 bg-gray-100">
      <Link to="/" className="font-bold text-lg">My Hotel</Link>
      <div className="flex gap-4">
        <Link to="/">Trang chủ</Link>
        <Link to="/booking">Đặt phòng</Link>
        {user ? (
          <button onClick={handleLogout}>Đăng xuất</button>
        ) : (
          <Link to="/login">Đăng nhập</Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
