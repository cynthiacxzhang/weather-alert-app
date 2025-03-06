require("dotenv").config();
const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5050;

app.use(express.json());
app.use(cors());

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;
console.log("API Key:", process.env.OPENWEATHER_API_KEY);

// Route to Fetch Weather Data
app.get("/weather", async (req, res) => {
    try {
        const { lat, lon } = req.query; // Get latitude & longitude from request

        if (!lat || !lon) {
            return res.status(400).json({ error: "Latitude and longitude are required" });
        }

        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${OPENWEATHER_API_KEY}`;
        const response = await axios.get(url);

        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
