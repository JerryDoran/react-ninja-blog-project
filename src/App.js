import React from "react";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}
