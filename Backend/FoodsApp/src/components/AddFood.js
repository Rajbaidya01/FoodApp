import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

function AddFood() {
  let [food, setFood] = useState({
    fid: "",
    fname: "",
    price: ""
  });
  let [msg, setMsg] = useState("");

  const addData = () => {
    axios.post("http://localhost:1005/food/add", food)
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
    setFood({
      fid: "",
      fname: "",
      price: ""
    });
  };

  return (
    <div className="max-w-xl mx-auto mt-12 p-6 bg-white rounded-lg shadow-md">
      <Nav />
      <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Add Food</h2>
      
      <input
        type="text"
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter the Food ID"
        value={food.fid}
        onChange={(event) => setFood({ ...food, fid: event.target.value })}
      />

      <input
        type="text"
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter the Food Name"
        value={food.fname}
        onChange={(event) => setFood({ ...food, fname: event.target.value })}
      />

      <input
        type="text"
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
        placeholder="Enter the Food Price"
        value={food.price}
        onChange={(event) => setFood({ ...food, price: event.target.value })}
      />

      <div className="flex justify-center space-x-4">
        <button
          onClick={addData}
          className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        >
          Add
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

export default AddFood;
