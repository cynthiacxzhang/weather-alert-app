const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5050;

// Middleware
app.use(express.json());
app.use(cors());

// Test Route
app.get("/", (req, res) => {
    res.send("Backend is working!");
});

// Start Server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});


