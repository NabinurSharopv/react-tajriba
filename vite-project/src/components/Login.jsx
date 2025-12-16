import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError("Iltimos, email va parolni kiriting");
      return;
    }

    // Simulate authentication (replace with real auth later)
    setError("");
    localStorage.setItem("user", JSON.stringify({ email }));
    navigate("/");
  };

  return (
    <div className="max-w-md m-auto mt-20 p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold mb-4">Kirish</h1>
      {error && <div className="text-red-600 mb-3">{error}</div>}

      <form onSubmit={handleSubmit} className="flex flex-col gap-3">
        <label className="text-sm font-medium">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="you@example.com"
        />

        <label className="text-sm font-medium">Parol</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border rounded"
          placeholder="Parolingizni kiriting"
        />

        <div className="flex items-center justify-between mt-2">
          <div>
            <input id="remember" type="checkbox" className="mr-2" />
            <label htmlFor="remember" className="text-sm">Eslab qolish</label>
          </div>
        </div>

        <button className="w-full mt-4 bg-[#46A358] text-white p-2 rounded" type="submit">
          Kirish
        </button>
      </form>
    </div>
  );
};

export default Login;
