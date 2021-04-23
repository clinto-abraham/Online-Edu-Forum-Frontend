import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Form  from './components/Admin/form';
import TeacherRegister from './components/Admin/teacherRegister';

import SignIn from './components/SignIn';

import Admin from './components/Admin/Admin';
import TeacherDashboard from './components/Teacher/home';
import AccountProfileDetails from './components/Teacher/Navbar/Account';
import ManageStudentsClass from './components/Teacher/Navbar/ManageStudentsClass';
import PayDay from './components/Teacher/Navbar/PayDay';


function App() {
  return (
    <>
      <Router>
        <Switch>
        <Route path="/" component={SignIn} exact />
        <Route path="/dashboard" component={TeacherDashboard} exact />
        <Route path="/student-management" component={ManageStudentsClass} exact/>
        <Route path="/payday-control" component={PayDay} exact />
        <Route path="/update-account" component={AccountProfileDetails} exact />

        <Route path="/online-edu-forum/backend/dashboard-admin/sign-in" component={Admin} exact />
        <Route path="/online-edu-forum/backend/dashboard-admin/register-student" component={Form} exact />
        <Route path="/online-edu-forum/backend/dashboard-admin/register-teacher" component={TeacherRegister} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
