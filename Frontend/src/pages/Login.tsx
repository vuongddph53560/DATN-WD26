import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email === "admin@gmail.com" && password === "123456") {
      localStorage.setItem("user", JSON.stringify({ email }));
      alert("Đăng nhập thành công!");
      navigate("/");
    } else {
      alert("Sai thông tin đăng nhập!");
    }
  };

  return (
    <div className="p-6 flex flex-col gap-3 max-w-sm mx-auto">
      <h1 className="text-xl font-bold text-center">Đăng nhập</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border p-2 rounded"
      />
      <input
        type="password"
        placeholder="Mật khẩu"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="border p-2 rounded"
      />
      <button onClick={handleLogin} className="bg-blue-500 text-white py-2 rounded">
        Đăng nhập
      </button>
    </div>
  );
};

export default Login;
