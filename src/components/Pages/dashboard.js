import React from "react";
import DataStudents from "./Page-Children/dashboard_component/datastudents";
import TotalMoneyEarned from "./Page-Children/dashboard_component/moneyEarned";
import ProgressBarChart from "./Page-Children/dashboard_component/progressBarChart";
import StudentAssignedCount from "./Page-Children/dashboard_component/studentCount";
import TasksProgress from "./Page-Children/dashboard_component/taskProgress";
import { CCardBody, CCardHeader, CCol, CFormGroup } from "@coreui/react";
import DoughnutChart from "./Page-Children/dashboard_component/DoughnutChart";
import { useHistory } from "react-router-dom";

function TeacherDashboard() {
  const user = JSON.parse(localStorage.getItem("profile"));
  const history = useHistory();

  return (
    <>
      {!user?.result?._id ? (
        history.push("/")
      ) : (
        <>
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
        </>
      )}
    </>
  );
}

export default TeacherDashboard;
