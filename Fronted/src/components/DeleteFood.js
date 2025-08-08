import React, { useState } from 'react';
import axios from 'axios';
import Nav from './Nav';

function DeleteFood() {
  let [food, setFood] = useState({
    fid: "",
    fname: "",
    price: ""
  });
  let [msg, setMsg] = useState("");

  const deleteData = (fid) => {
    alert(fid);
    axios.delete(`http://localhost:1005/food/del/${fid}`)
      .then((res) => {
        console.log(res.data);
        setMsg(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("SOMETHING WENT WRONG DELETING DATA");
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
      <h2 className="text-3xl font-semibold text-blue-600 mb-6 text-center">Delete Product</h2>

      <input
        type="text"
        placeholder="Enter the Food ID"
        value={food.fid}
        onChange={(event) => setFood({ ...food, fid: event.target.value })}
        className="w-full mb-4 px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <div className="flex justify-center space-x-4">
        <button
          onClick={() => deleteData(food.fid)}
          className="px-6 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition"
        >
          Delete
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

export default DeleteFood;
