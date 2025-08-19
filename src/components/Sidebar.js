import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { List, ChevronLeft, ChevronRight, PersonFill } from "react-bootstrap-icons";

function Sidebar() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={`sidebar bg-white border-end p-3 d-flex flex-column shadow-sm position-relative ${
        isExpanded ? 'expanded' : ''
      }`}
    >
      <button
        className="sidebar-toggle-btn btn btn-sm btn-light position-absolute rounded-circle"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <ChevronLeft size={12} /> : <ChevronRight size={12} />}
      </button>

      <div className="mt-4">
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            `mb-4 text-decoration-none d-flex align-items-center ${
              isActive ? "text-primary" : "text-secondary"
            }`
          }
        >
          <img
            src="gengar.jpeg"
            alt="Profile"
            className="profile-image rounded-circle"
          />
          {isExpanded && (
            <span className="ms-3 fw-medium">Profile</span>
          )}
        </NavLink>

        <NavLink
          to="/"
          className={({ isActive }) =>
            `text-decoration-none d-flex align-items-center ${
              isActive ? "text-primary" : "text-secondary"
            }`
          }
        >
          <List size={28} />
          {isExpanded && (
            <span className="ms-3 fw-medium">My Articles</span>
          )}
        </NavLink>
      </div>
    </div>
  );
}

export default Sidebar;
