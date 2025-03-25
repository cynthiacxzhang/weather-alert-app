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

            // === Simple weather alert logic ===

            // If the temperature is above 30°C, set a heat alert
            if (data.main?.temp > 30) {
                setAlert("⚠️ Warning: It's very hot outside. Stay hydrated!");

                // If the weather condition is Thunderstorm, set a storm alert
            } else if (data.weather[0]?.main === "Thunderstorm") {
                setAlert("⚠️ Thunderstorm Alert! Avoid outdoor activities.");

                // Otherwise, clear any previous alerts
            } else {
                setAlert(null);
            }

        } catch (err) {
            // If anything goes wrong (e.g., no response from server), show error
            setError("Could not fetch weather data.");
            console.error(err);
        }
    }
};


// Widget component styling
const styles = {
    card: {
        padding: "20px",               // Space inside the card
        margin: "20px auto",           // Space outside + center horizontally
        maxWidth: "400px",             // Maximum width
        background: "#f0f4f8",         // Light background color
        borderRadius: "12px",          // Rounded corners
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)", // Soft shadow
        fontFamily: "sans-serif",      // Clean font
        textAlign: "center"            // Centered text
    }
};




// Last step: explort component so it can be used in App.js
export default WeatherWidget;