import React from "react";
import { Link } from "react-router-dom";
import {
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
} from "react-feather";


function NavbarAdmin() {
  return (
    <>
      <div className="pos-f-t">
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="bg-dark p-4">
            <h4 className="text-white">Organization Name</h4>
            <span className="text-muted">
              <Link
                to="/online-edu-forum/backend/random-serial-no/dashboard-admin"
                className="link"
              >
                <BarChartIcon className="icon" />
                Dashboard
              </Link>
            </span>
            <span className="text-muted">
              <Link
                to="/online-edu-forum/backend/random-serial-no/dashboard-admin/register-student"
                className="link"
              >
                Register Student
              </Link>
            </span>

            <span className="text-muted">
              <Link
                to="/online-edu-forum/backend/random-serial-no/dashboard-admin/students-info"
                className="link"
              >
                Student Info
              </Link>
            </span>
            <span className="text-muted">
              <Link
                to="/online-edu-forum/backend/random-serial-no/dashboard-admin/register-teacher"
                className="link"
              >
               
                Register Teacher
              </Link>
            </span>
            <span className="text-muted">
              <Link
                to="/online-edu-forum/backend/random-serial-no/dashboard-admin/assign-teachers"
                className="link"
              >
                Assign Teacher
              </Link>
            </span>
            <span className="text-muted">
              <Link
                to="/online-edu-forum/backend/random-serial-no/dashboard-admin/salary-track"
                className="link"
              >
                Salary Track
              </Link>
            </span>
            <span className="text-muted">
              <Link
                to="/online-edu-forum/backend/random-serial-no/dashboard-admin/update-account"
                className="link"
              >
                <SettingsIcon /> Account Settings
              </Link>
            </span>
            <span className="text-muted">
              <Link
                to="/online-edu-forum/backend/random-serial-no/dashboard-admin/admin-sign-in"
                className="link"
              >
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
export default NavbarAdmin;
