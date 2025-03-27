// Import React and your custom WeatherWidget component
import React from "react";
import WeatherWidget from "./components/WeatherWidget"; // make sure the path matches where you saved it

// Main App component that renders the WeatherWidget
function App() {
  return (
    <div>
      <WeatherWidget />
    </div>
  );
}

export default App;
