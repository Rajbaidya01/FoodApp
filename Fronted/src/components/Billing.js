import React, { useState, useEffect } from 'react';
import axios from 'axios';
import NavClient from './NavClient';

function Billing() {
  let [user, setUser] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:1005/order/billing")
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
    <div className="min-h-screen bg-gray-50">
      <NavClient />
      <h2 className="text-3xl font-semibold text-blue-600 text-center mt-8 mb-6">Food Billing</h2>

      {user.length > 0 ? (
        <div className="max-w-6xl mx-auto overflow-x-auto px-4">
          <table className="min-w-full bg-white rounded shadow-md">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-5 text-left">ORDER ID</th>
                <th className="py-3 px-5 text-left">ORDER DATE</th>
                <th className="py-3 px-5 text-left">FOOD ID</th>
                <th className="py-3 px-5 text-left">FOOD NAME</th>
                <th className="py-3 px-5 text-left">QUANTITY ORDERED</th>
                <th className="py-3 px-5 text-left">PRICE</th>
                <th className="py-3 px-5 text-left">TOTAL COST</th>
                <th className="py-3 px-5 text-left">USERNAME</th>
              </tr>
            </thead>
            <tbody>
              {user.map((element, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}
                >
                  <td className="py-2 px-5">{element[0]}</td>
                  <td className="py-2 px-5">{element[1]}</td>
                  <td className="py-2 px-5">{element[2]}</td>
                  <td className="py-2 px-5">{element[3]}</td>
                  <td className="py-2 px-5">{element[4]}</td>
                  <td className="py-2 px-5">{element[5]}</td>
                  <td className="py-2 px-5">{element[6]}</td>
                  <td className="py-2 px-5">{element[7]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h2 className="text-center text-red-600 mt-8 font-semibold">No Data Found</h2>
      )}
    </div>
  );
}

export default Billing;
