import React from "react";
import { NavLink } from "react-router-dom";
import { List } from "react-bootstrap-icons";

function Sidebar() {
  return (
    <div
      className="bg-white border-end p-3 d-flex flex-column align-items-center shadow-sm"
      style={{ width: "80px", minHeight: "100vh" }}
    >
      {/* Profile Picture */}
      <NavLink
        to="/profile"
        className={({ isActive }) =>
          `mb-4 text-decoration-none ${
            isActive ? "border border-primary rounded-circle" : ""
          }`
        }
      >
        <img
          src="gengar.jpeg"
          alt="Profile"
          className="rounded-circle"
          style={{ width: "45px", height: "45px", objectFit: "cover" }}
        />
      </NavLink>

      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-decoration-none ${isActive ? "text-primary" : "text-secondary"}`
        }
      >
        <List size={28} />
      </NavLink>
    </div>
  );
}

export default Sidebar;
