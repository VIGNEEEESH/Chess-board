import React from "react"; // Import React library to use JSX and React features
import logo from "./logo.svg"; // Import logo.svg if needed for future use (currently unused)
import "./App.css"; // Import the CSS file for styling the App component
import Home from "./Pages/Home"; // Import the Home component which will be rendered in the App

function App() {
  return (
    <div className="App">
      {/* Render the Home component */}
      <Home />
    </div>
  );
}

export default App; // Export the App component as the default export
