import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import TopNavbar from "./components/Navbar";
import Articles from "./pages/Articles";
import Profile from "./pages/Profile";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="d-flex">
        <Sidebar />
        <div className="flex-grow-1 bg-dark text-light min-vh-100">
          <TopNavbar />
          <div className="p-4">
            <Routes>
              <Route path="/" element={<Articles />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
