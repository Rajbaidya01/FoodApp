import React from 'react';

function NavClient() {
  return (
    <nav className="flex items-center justify-between bg-green-600 text-white px-6 py-4 shadow-md">
      {/* Left side */}
      <div className="text-2xl font-bold">
        FOOD APP FOR ORDER
      </div>

      {/* Right side links */}
      <div className="space-x-6">
        <a href="/flist" className="hover:text-green-300">FOODLIST</a>
        <a href="/sfood" className="hover:text-green-300">SEARCH FOOD</a>
        <a href="/addOrder" className="hover:text-green-300">ADD ORDER</a>
        <a href="/billing" className="hover:text-green-300">BILLING</a>
      </div>
    </nav>
  );
}

export default NavClient;
