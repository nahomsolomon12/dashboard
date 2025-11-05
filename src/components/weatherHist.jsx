import React, { useEffect, useState } from "react";
import '../App.css'

function Dashboard() {
    const [weatherData, setWeatherData] = useState([]);
    const [error, setError] = useState(null);
    const [search, setSearch] = useState(""); // For search input
    const [filterTemp, setFilterTemp] = useState(""); // For filtering by min temperature

    useEffect(() => {
        const apiKey = import.meta.env.VITE_WEATHERBIT_API_KEY;
        const url = `https://api.weatherbit.io/v2.0/history/daily?city=Houston,TX&start_date=2025-10-18&end_date=2025-10-28&key=${apiKey}`;

        fetch(url)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                // Weatherbit returns an object with a "data" array
                setWeatherData(data.data || []);
            })
            .catch((err) => {
                console.error("Error fetching weather:", err);
                setError(err.message);
            });
    }, []);

    if (error) {
        return <p style={{ color: "red" }}>Error: {error}</p>;
    }

    const filteredData = weatherData
        .filter((day) => day.datetime.includes(search)) // simple search by date
        .filter((day) =>
            filterTemp ? day.min_temp >= parseFloat(filterTemp) : true
        ); // filter by min temp if provided

    return (
        <div style={{ padding: "20px" }}>

            {/* Search and Filter Controls */}
            <div style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Search by date (YYYY-MM-DD)"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    style={{ marginRight: "10px", padding: "5px" }}
                />
                <input
                    type="number"
                    placeholder="Filter by min temp (°C)"
                    value={filterTemp}
                    onChange={(e) => setFilterTemp(e.target.value)}
                    style={{ padding: "5px" }}
                />
            </div>

            {/* Weather Table */}
            <table style={{ width: "400px", borderCollapse: "collapse" }}>
                <thead>
                    <tr style={{ backgroundColor: "#31313189" }}>
                        <th>Date</th>
                        <th>Average Temp (°C)</th>
                        <th>Max Temp (°C)</th>
                        <th>Min Temp (°C)</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.slice(0, 10).map((day, index) => (
                        <tr key={index} style={{ borderBottom: "1px solid #ddd" }}>
                            <td style={{ padding: "8px" }}>{day.datetime}</td>
                            <td style={{ padding: "8px" }}>{day.temp}</td>
                            <td style={{ padding: "8px" }}>{day.max_temp}</td>
                            <td style={{ padding: "8px" }}>{day.min_temp}</td>
                            <td style={{ padding: "8px" }}>🔗</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Dashboard;
