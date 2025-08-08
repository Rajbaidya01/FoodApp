import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Food() {
  return (
    <div className="flex flex-col md:flex-row min-h-screen p-6 bg-gray-50">
      {/* Sidebar Links */}
      <div className="flex flex-row md:flex-col space-x-4 md:space-x-0 md:space-y-4 bg-white p-4 rounded shadow-md w-full md:w-48">
        <Link
          to="fadd"
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          Add Food
        </Link>
        <Link
          to="fdelete"
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          Delete Food
        </Link>
        <Link
          to="fupdate"
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          Update Food
        </Link>
      </div>

      {/* Main Content */}
      <div className="flex-grow mt-6 md:mt-0 md:ml-12 bg-white p-6 rounded shadow-md text-center">
        <Outlet />
      </div>
    </div>
  );
}

export default Food;
