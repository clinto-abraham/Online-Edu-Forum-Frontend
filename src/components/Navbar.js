import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
} from "react-feather";

function Navbar() {
  return (
    <>
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Organization Name</h4>
            <span className="text-muted">
              <Link to="/dashboard" className="link">
                <BarChartIcon className="icon" />
                Dashboard
              </Link>
            </span>
            <span className="text-muted">
              <Link to="/student-management" className="link">
                Students Management
              </Link>
            </span>

            <span className="text-muted">
              <Link to="/payday-control" className="link">
                Payday Controls
              </Link>
            </span>
            <span className="text-muted">
              <Link to="/update-account" className="link">
                <SettingsIcon /> Account Settings
              </Link>
            </span>
            <span className="text-muted">
              <Link to="/" className="link">
                <LockIcon className="icon" /> Logout
              </Link>
            </span>
          </div>
        </div>
        <nav className="navbar navbar-dark bg-dark">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarToggleExternalContent"
            aria-controls="navbarToggleExternalContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
