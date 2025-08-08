import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

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

      {/* Main Content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4 py-6">
        <h2 className="text-4xl font-bold text-blue-700 mb-6 text-center">FOOD APP SYSTEM</h2>

        <img
          src="https://img.freepik.com/premium-photo/restaurant-food-restaurant-menu-photos-menu_830198-777.jpg?semt=ais_hybrid"
          alt="Delicious food"
          className="w-[90%] max-w-md rounded-xl shadow-2xl border border-orange-300"
        />

        <div className="flex flex-wrap justify-center gap-6 mt-10">
          <button
            onClick={() => navigate("/register")}
            className="px-8 py-3 border border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-600 hover:text-white transition-all duration-300"
          >
            REGISTER
          </button>

          <button
            onClick={() => navigate("/login")}
            className="px-8 py-3 border border-gray-700 text-gray-700 font-semibold rounded-lg hover:bg-gray-700 hover:text-white transition-all duration-300"
          >
            LOGIN
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-orange-600 text-white text-center py-4">
        <p className="text-sm">© 2025 Food App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
