// File created using "touch src/components/'filename'"
// First time using js in awhile, take it as a learning process

import React, { useEffect, useState } from "react";

// Create weatherwidget class
const WeatherWidget = () => {

    // Member variables
    const [weather, setWeather] = useState(null);   // State to store weather data from OpenWeather API
    const [alert, setAlert] = useState(null);       // State to store alert messages (e.g., extreme weather)
    const [error, setError] = useState(null);       // State to store any error messages (e.g., location access denied)

    // Member functions
    const fetchWeather = async (lat, lon) => {
        try {
            // Call backend API and pass latlon into URL
            const response = await fetch(`http://localhost:5050/weather?lat=${lat}&lon=${lon}`);

            // Convert the response to JSON
            const data = await response.json();

            // Store the received weather data in the state
            setWeather(data);

        } catch (err) {
            // If anything goes wrong (e.g., no response from server), show error
            setError("Could not fetch weather data.");
            console.error(err);
        }
    }
};

