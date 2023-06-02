/* eslint-disable no-unused-vars */
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function Graphs() {
  const data = [
    { name: 'Jan', visits: 1000 },
    { name: 'Feb', visits: 2000 },
    { name: 'Mar', visits: 1500 },
    { name: 'Apr', visits: 3000 },
    { name: 'May', visits: 2000 },
    { name: 'Jun', visits: 4000 },
    { name: 'Jul', visits: 2500 },
    { name: 'Aug', visits: 5000 },
    { name: 'Sep', visits: 3500 },
    { name: 'Oct', visits: 6000 },
    { name: 'Nov', visits: 4500 },
    { name: 'Dec', visits: 8000 },
  ];

  return (
    <div className="p-6">
      <h2 className="font-bold text-2xl mb-4 text-white">Growth Chart</h2>
      <LineChart width={800} height={400} data={data} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="visits" stroke="#8884d8" activeDot={{ r: 8 }} />
      </LineChart>
    </div>
  );
}

export default Graphs;