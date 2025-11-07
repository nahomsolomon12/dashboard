import '../App.css'
import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function ApiLineGraph() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const apiKey = import.meta.env.VITE_WEATHERBIT_API_KEY;
      const res = await fetch(
        `https://api.weatherbit.io/v2.0/history/daily?city=Houston,TX&start_date=2025-10-18&end_date=2025-10-28&key=${apiKey}`
      );
      const json = await res.json();

      // Check the shape: json.data is the array
      const formatted = json.data.map(item => ({
        date: item.datetime,     // or item.date
        value: Number(item.temp) // choose the field you want
      }));

      setData(formatted);
    }

    fetchData();
  }, []);

  return (
    <div className='line'>
      <LineChart width={600} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </div>
  );
}
