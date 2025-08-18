import React from "react";
import { NavLink } from "react-router-dom";
import { List } from "react-bootstrap-icons";

function Sidebar() {
  return (
    <div
      className="bg-dark text-light p-3 d-flex flex-column align-items-center shadow"
      style={{ width: "70px", minHeight: "100vh" }}
    >
      {/* Profile Picture Link */}
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
          className="rounded-circle shadow"
          style={{ width: "40px", height: "40px", objectFit: "cover" }}
        />
      </NavLink>

      {/* Articles Link */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `text-decoration-none ${isActive ? "text-primary" : "text-light"}`
        }
      >
        <List size={28} />
      </NavLink>
    </div>
  );
}

export default Sidebar;
