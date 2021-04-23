import React from "react";
import {Link} from "react-router-dom";
import {
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  UserPlus as UserPlusIcon,
  
} from 'react-feather';
import { Typography, ListItem } from '@material-ui/core';

function Navbar() {
  return (
    <>
      <div className="collapsible-menu">
        <input type="checkbox" id="menu" />
        <label for="menu" className="titleAdmin"><Typography>☰ Organization</Typography> </label>
        <div className="menu-content">
          <ul>
            <li>
              <Link to="/dashboard" className="link" > <ListItem><BarChartIcon className="icon" />Dashboard </ListItem></Link>
            </li>
            <li>
            <Link to="/student-management" className="link" > <ListItem><UserPlusIcon className="icon" />Students Management</ListItem></Link>
            </li>
            
            
            <li>
              <Link to="/payday-control" className="link"> <ListItem>Payday Controls</ListItem></Link>
            </li>
            <li>
              <Link to="/update-account" className="link" > <ListItem><SettingsIcon/> Account Settings</ListItem></Link>
            </li>
            
            <li><Link to="/" className="link"><ListItem> <LockIcon className="icon" /> Logout</ListItem></Link></li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default Navbar;
