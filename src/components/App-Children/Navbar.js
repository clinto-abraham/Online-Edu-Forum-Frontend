import {
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
} from "react-feather";
//
import React, { useState, useEffect } from "react";

import { Link, useHistory, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import decode from "jwt-decode";
import * as actionType from "../../redux/constants/actionTypes";

function Navbar() {
  //

  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  function logout() {
    dispatch({ type: actionType.LOGOUT });

    history.push("/");

    setUser(null);
  }

  useEffect(() => {
    const token = user?.token;

    if (token) {
      const decodedToken = decode(token);

      if (decodedToken.exp * 1000 < new Date().getTime()) {
        logout();
        history.push("/");
      }
    }

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  //
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
            <span onClick={logout} className="text-muted link">
              <LockIcon className="icon" /> Logout
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
