import { NavLink } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="nav">
      <div className="nav-container">
        <h1 className="nav-title">🎨 Preference Dashboard</h1>
        <div className="nav-buttons">
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `nav-button ${isActive ? "active" : ""}`
            }
          >
            ⚙️ Settings
          </NavLink>
          <NavLink
            to="/preview"
            className={({ isActive }) =>
              `nav-button ${isActive ? "active" : ""}`
            }
          >
            👁️ Preview
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
