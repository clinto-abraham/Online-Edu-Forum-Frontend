import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Form  from './components/Admin/form';
import TeacherRegister from './components/Admin/teacherRegister';

import SignIn from './components/SignIn';

import TeacherDashboard from './components/Teacher/home';
import AccountProfileDetails from './components/Teacher/Navbar/Account';
import ManageStudentsClass from './components/Teacher/Navbar/ManageStudentsClass';
import PayDay from './components/Teacher/Navbar/PayDay';
import TeacherAssigning from './components/Admin/teacherAssign';
import AdminSignIn from './components/Admin/AdminSignIn';
import DashBoardAdmin from './components/Admin/Admin';
import StudentInfo from './components/Admin/StudentInfo';
import SalaryTrack from './components/Admin/SalaryTrack';
import AccountSettingsAdmin from './components/Admin/AccountSettingsAdmin';


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

        <Route path="/online-edu-forum/backend/random-serial-no/admin-sign-in" component={AdminSignIn} exact />
        <Route path="/online-edu-forum/backend/random-serial-no/dashboard-admin" component={DashBoardAdmin} exact />
        <Route path="/online-edu-forum/backend/random-serial-no/dashboard-admin/register-student" component={Form} exact />
        <Route path="/online-edu-forum/backend/random-serial-no/dashboard-admin/students-info" component={StudentInfo} exact />
        <Route path="/online-edu-forum/backend/random-serial-no/dashboard-admin/register-teacher" component={TeacherRegister} exact />
        <Route path="/online-edu-forum/backend/random-serial-no/dashboard-admin/assign-teachers" component={TeacherAssigning} exact />
        <Route path="/online-edu-forum/backend/random-serial-no/dashboard-admin/salary-track" component={SalaryTrack} exact />
        <Route path="/online-edu-forum/backend/random-serial-no/dashboard-admin/update-account" component={AccountSettingsAdmin} exact />
        <Route path="/online-edu-forum/backend/random-serial-no/dashboard-admin/admin-sign-in" component={AdminSignIn} exact />
        </Switch>
      </Router>
    </>
  );
}

export default App;
