import React, { useState } from 'react';
import axios from 'axios';

function SearchFood() {
  let [food, setFood] = useState({
    fid: "",
    fname: "",
    price: ""
  });
  let [data, setData] = useState({
    fid: "",
    fname: "",
    price: ""
  });

  const searchData = (fid) => {
    alert(fid);
    axios.get(`http://localhost:1005/food/fetch/${fid}`)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("SOMETHING WENT WRONG FETCHING DATA");
      });
  };

  return (
    <div className="max-w-3xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Search Food</h2>

      <input
        type="text"
        placeholder="Enter the Product ID"
        value={food.fid}
        onChange={(e) => setFood({ ...food, fid: e.target.value })}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        onClick={() => searchData(food.fid)}
        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Search
      </button>

      <div className="overflow-x-auto mt-8">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-300 rounded">
          <thead className="bg-gray-800 text-white">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">Food ID</th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">Food Name</th>
              <th className="px-6 py-3 text-left text-sm font-medium uppercase">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">{data.fid}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.fname}</td>
              <td className="px-6 py-4 whitespace-nowrap">{data.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SearchFood;
