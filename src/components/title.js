import React from "react";
import {Link} from "react-router-dom";

function Title() {
  return (
    <>
      <div className="collapsible-menu">
        <input type="checkbox" id="menu" />
        <label for="menu" className="titleAdmin">☰ Online Edu Forum</label>
        <div className="menu-content">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/student-register">Student Register</Link>
            </li>
            <li>
              <Link to="/teacher-register">Teacher Register</Link>
            </li>
            <li>
              <Link to="/teacher-assign">Teacher Assigning</Link>
            </li>
            <li>
              <Link to="/payday-control">Payday Controls</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Title;
