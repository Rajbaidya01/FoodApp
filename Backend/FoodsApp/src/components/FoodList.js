import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FoodList() {
  let [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1005/food/fetch")
      .then((res) => {
        console.log(res.data);
        setUser(res.data);
      })
      .catch((error) => {
        console.log(error);
        alert("SOMETHING WENT WRONG ON FETCHING DATA");
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-semibold text-blue-600 text-center mb-6">Food Details</h2>

      {user.length > 0 ? (
        <div className="max-w-4xl mx-auto overflow-x-auto bg-white rounded shadow-md">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase">Food ID</th>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase">Food Name</th>
                <th className="px-6 py-3 text-left text-sm font-medium uppercase">Price</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {user.map((element, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                  <td className="px-6 py-4 whitespace-nowrap">{element.fid}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{element.fname}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{element.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-center text-red-600 font-semibold mt-8">No Data Found</h2>
      )}
    </div>
  );
}

export default FoodList;
