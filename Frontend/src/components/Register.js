import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [register, setRegister] = useState({
    uname: "",
    pass: "",
    nm: "",
    email: "",
    phno: ""
  });
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const addData = () => {
    axios.post("http://localhost:1005/register/add", register)
      .then((res) => {
        console.log(res.data);
        setMsg(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("SOMETHING WENT WRONG ADDING DATA");
      });
  };

  const refreshData = () => {
    setMsg("");
    setRegister({
      uname: "",
      pass: "",
      nm: "",
      email: "",
      phno: ""
    });
  };

  return (
    <div className="min-h-screen w-full flex flex-col bg-gradient-to-br from-yellow-100 via-red-100 to-orange-200 overflow-x-hidden">
      
      {/* Navbar */}
      <nav className="bg-orange-600 text-white px-8 py-4 shadow-md flex justify-between items-center">
        <h1 className="text-2xl font-bold">🍽 FOOD APP</h1>
        <div className="space-x-4">
          <button onClick={() => navigate("/")} className="hover:underline">
            Home
          </button>
          <button onClick={() => navigate("/register")} className="hover:underline">
            Register
          </button>
          <button onClick={() => navigate("/login")} className="hover:underline">
            Login
          </button>
        </div>
      </nav>

      {/* Registration Card */}
      <main className="flex-grow flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-2xl border border-orange-200">
          <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">Registration Form</h2>

          <input
            type="text"
            placeholder="Enter the Username"
            value={register.uname}
            onChange={(e) => setRegister({ ...register, uname: e.target.value })}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="password"
            placeholder="Enter the Password"
            value={register.pass}
            onChange={(e) => setRegister({ ...register, pass: e.target.value })}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Enter the Name"
            value={register.nm}
            onChange={(e) => setRegister({ ...register, nm: e.target.value })}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="email"
            placeholder="Enter the Email"
            value={register.email}
            onChange={(e) => setRegister({ ...register, email: e.target.value })}
            className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <input
            type="text"
            placeholder="Enter the Phone Number"
            value={register.phno}
            onChange={(e) => setRegister({ ...register, phno: e.target.value })}
            className="w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={addData}
              className="px-6 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition"
            >
              Register
            </button>

            <button
              onClick={refreshData}
              className="px-6 py-2 border border-gray-500 text-gray-700 rounded hover:bg-gray-500 hover:text-white transition"
            >
              Refresh
            </button>

            <button
              onClick={() => navigate("/")}
              className="px-6 py-2 border border-green-600 text-green-600 rounded hover:bg-green-600 hover:text-white transition"
            >
              Home
            </button>
          </div>

          {msg && <p className="mt-6 text-center text-red-600 font-semibold">{msg}</p>}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-orange-600 text-white text-center py-4">
        <p className="text-sm">© 2025 Food App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Register;
