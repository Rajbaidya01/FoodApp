import React from 'react';

function Nav() {
  return (
    <nav className="flex items-center justify-between bg-blue-600 text-white px-6 py-4 shadow-md">
      {/* Left part */}
      <div className="text-2xl font-bold">
        MY FOOD
      </div>

      {/* Right part */}
      <div className="space-x-6">
        <a href="/food" className="hover:text-gray-300">FOOD</a>
        <a href="/flist" className="hover:text-gray-300">FOODLIST</a>
        <a href="/sfood" className="hover:text-gray-300">SEARCH FOOD</a>
        <a href="/pcus" className="hover:text-gray-300">CONTACT US</a>
      </div>
    </nav>
  );
}

export default Nav;
