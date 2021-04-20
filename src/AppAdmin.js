import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Form  from './components/form';
import Home from './components/home';
import TeacherRegister from './components/teacherRegister';
import TeacherAssigning from './components/teacherAssign';
import PaydayControls from './components/paydayControl';
import Contacts from './components/contacts';
import SignIn from './components/SignIn';


function AppAdmin() {
  return (
    <>
      <Router>
      
        <Route path="/" component={Home} exact />
        <Route path="/sign-in" component={SignIn} />
        <Route path="/student-register" component={Form} />
        <Route path="/teacher-register" component={TeacherRegister} />
        <Route path="/teacher-assign" component={TeacherAssigning} />
        <Route path="/payday-control" component={PaydayControls} />
        <Route path="/contacts" component={Contacts} />
        
        
      </Router>
    </>
  );
}

export default AppAdmin;
