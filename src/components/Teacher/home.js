import React from "react";
import BottomNavbar from "../bottomNavbar";
import Navbar from "../Navbar";
import DataStudents from "./datastudents";
import TotalMoneyEarned from "./moneyEarned";
import ProgressBarChart from "./progressBarChart";
import StudentAssignedCount from "./studentCount";
import TasksProgress from "./taskProgress";
import {CCardBody, CCardHeader, CCol, CFormGroup} from "@coreui/react";
import DoughnutChart from "./DoughnutChart";

function TeacherDashboard() {
  return (
    <>
      <Navbar />
      <div className="grid">
        <CCardHeader>
        <CCardBody>

          <CFormGroup row className="my-0 padding-grid">
            
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 padding-grid">
              <DoughnutChart />
            </div>
           
            
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 padding-grid">
              <TasksProgress />
            </div>
            
          </CFormGroup>

          <CFormGroup row className="my-12 padding-grid">
            <CCol xs="12">
              <ProgressBarChart /> 
            </CCol>
          </CFormGroup>


          <CFormGroup row className="my-0">
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 padding-grid">
          
            <TotalMoneyEarned />
            
            </div>
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 padding-grid">
            
              <StudentAssignedCount />
            
            </div>
          </CFormGroup>

          
          
        </CCardBody>
        </CCardHeader>
      </div>
      <div className="grid">
      <CCardHeader>
      <DataStudents />
      </CCardHeader>
      </div>
      <BottomNavbar />
    </>
  );
}

export default TeacherDashboard;
