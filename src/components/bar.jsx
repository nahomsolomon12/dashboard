import '../App.css'
import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

export default function ApiBarGraph() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const apiKey = import.meta.env.VITE_WEATHERBIT_API_KEY;
            const res = await fetch(
                `https://api.weatherbit.io/v2.0/history/daily?city=Houston,TX&start_date=2025-10-18&end_date=2025-10-28&key=${apiKey}`
            );
            const json = await res.json();

            const formatted = json.data.map(item => ({
                date: item.datetime,       // Date
                value: Number(item.temp)   // Temperature (or any other metric)
            }));

            setData(formatted);
        }

        fetchData();
    }, []);

    return (
        <div className='bar'>
            <BarChart width={600} height={300} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
        </div>
    );
}
