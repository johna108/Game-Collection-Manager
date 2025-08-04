import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GameProvider } from "./GameContext";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Collection from "./Collection";
import Navbar from "./Navbar";

function App() {
  return (
    <GameProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/collection" element={<Collection />} />
        </Routes>
      </Router>
    </GameProvider>
  );
}

export default App;
