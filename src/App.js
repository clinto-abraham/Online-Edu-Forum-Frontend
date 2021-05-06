import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import SignIn from './components/Pages/SignIn';
import TeacherDashboard from './components/Pages/dashboard';
import AccountProfileDetails from './components/Pages/Account';
import StudentUpdate from './components/Pages/studentUpdate';
import PayDay from './components/Pages/PayDay';

import Navbar from './components/App-Children/Navbar';
import BottomNavbar from './components/App-Children/bottomNavbar';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
        <Route path="/" component={SignIn} exact />
        <Route path="/dashboard" component={TeacherDashboard} exact />
        <Route path="/student-management" component={StudentUpdate} exact/>
        <Route path="/payday-control" component={PayDay} exact />
        <Route path="/update-account" component={AccountProfileDetails} exact />
        </Switch>
        <BottomNavbar />
      </Router>
    </>
  );
}

export default App;
