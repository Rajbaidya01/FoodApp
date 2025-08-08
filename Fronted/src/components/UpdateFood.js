import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

function UpdateFood() {
  let [food, setFood] = useState({
    fid: "",
    fname: "",
    price: ""
  });
  let [msg, setMsg] = useState("");

  const updateData = (fid) => {
    alert(fid);
    axios.put(`http://localhost:1005/food/update/${fid}`, food)
      .then((res) => {
        console.log(res.data);
        setMsg(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("SOMETHING WENT WRONG WITH UPDATING DATA");
      });
  };

  const refreshData = () => {
    setMsg("");
    setFood({
      fid: "",
      fname: "",
      price: "",
    });
  };

  return (
    <div className="max-w-4xl mx-auto mt-16 p-8 bg-white rounded-lg shadow-md">
      <Nav />
      <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Update Food</h2>

      <input
        type="text"
        placeholder="Enter the Product Id"
        value={food.fid}
        onChange={(e) => setFood({ ...food, fid: e.target.value })}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        placeholder="Enter the Product Name"
        value={food.fname}
        onChange={(e) => setFood({ ...food, fname: e.target.value })}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        type="text"
        placeholder="Enter the Product Price"
        value={food.price}
        onChange={(e) => setFood({ ...food, price: e.target.value })}
        className="w-full mb-6 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex justify-center space-x-6">
        <button
          onClick={() => updateData(food.fid)}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Update
        </button>

        <button
          onClick={refreshData}
          className="px-6 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 transition"
        >
          Refresh
        </button>
      </div>

      {msg && <h2 className="mt-6 text-center text-red-600 font-semibold">{msg}</h2>}
    </div>
  );
}

export default UpdateFood;
