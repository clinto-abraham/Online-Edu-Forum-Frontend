import React from "react";
import BottomNavbar from "../bottomNavbar";
import Navbar from "../Navbar";
import DataStudents from "./datastudents";
import TotalMoneyEarned from "./moneyEarned";
import ProgressBarChart from "./progressBarChart";
import StudentAssignedCount from "./studentCount";
import TasksProgress from "./taskProgress";
import {CCardBody, CCardHeader, CCol, CFormGroup } from "@coreui/react";

function TeacherDashboard() {
  return (
    <>
      <Navbar />
      <div className="grid">
        <CCardHeader>
        <CCardBody>
          <CFormGroup row className="my-0">
            <CCol xs="3">
              <ProgressBarChart />
              
            </CCol>

            <CCol xs="3">
            <TotalMoneyEarned />
            </CCol>
            <CCol xs="3">
              <StudentAssignedCount />
            </CCol>
            <CCol xs="3">
              <TasksProgress />
            </CCol>
          </CFormGroup>
        </CCardBody>
        </CCardHeader>
      </div>
      <CCardHeader>
      <DataStudents />
      </CCardHeader>
      <BottomNavbar />
    </>
  );
}

export default TeacherDashboard;
