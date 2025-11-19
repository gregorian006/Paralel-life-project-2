import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  // Jika sudah login → tidak boleh buka halaman login
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) navigate("/ai");
  }, [navigate]);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setErrorMsg("Email dan password wajib diisi.");
      return;
    }

    // Simpan ke localStorage
    const userData = {
      email,
      loginTime: new Date().toISOString(),
    };

    localStorage.setItem("user", JSON.stringify(userData));

    // Redirect
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0f0c29] px-6">
      <div className="bg-white/10 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-xl border border-white/10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center mb-6 text-white">
          Selamat Datang Kembali
        </h1>

        <p className="text-center text-gray-300 mb-8">
          Masuk untuk melanjutkan eksplorasi kehidupan paralel Anda.
        </p>

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="text-gray-300 text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full mt-1 px-4 py-3 bg-white/5 text-white rounded-xl 
                border border-white/10 focus:border-purple-500 focus:ring-2 
                focus:ring-purple-600 outline-none transition"
              placeholder="contoh@email.com"
            />
          </div>

          <div>
            <label className="text-gray-300 text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-3 bg-white/5 text-white rounded-xl 
                border border-white/10 focus:border-purple-500 focus:ring-2 
                focus:ring-purple-600 outline-none transition"
              placeholder="••••••••"
            />
          </div>

          {errorMsg && (
            <p className="text-red-400 text-sm text-center">{errorMsg}</p>
          )}

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-500 text-white 
            font-semibold rounded-xl shadow-lg hover:from-purple-700 hover:to-pink-600 
            transition transform hover:scale-[1.02]"
          >
            Login
          </button>

          <p className="text-center text-gray-400 text-sm mt-3">
            Belum punya akun?{" "}
            <span
              onClick={() => navigate("/register")}
              className="text-purple-400 font-semibold cursor-pointer hover:underline"
            >
              Daftar
            </span>
          </p>

        </form>
      </div>
    </div>
  );
}

export default Login;
