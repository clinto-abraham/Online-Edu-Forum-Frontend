import Navbar from "../../Navbar";
import BottomNavbar from "../../bottomNavbar";


import React, { useState } from "react";

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CCollapse,
  CFormGroup,
  CTextarea,
  CDataTable,
  CLabel,
  CRow,
} from "@coreui/react";

const fields = ["work", "registered", "role"];

const lastMonth = [
  { id: 0, work: "Total Classes Delivered", registered: "20", role: "Online" },
  { id: 1, work: "Total Hours Delivered", registered: "180", role: "Online" },
  { id: 2, work: "Cost Per Class", registered: "200", role: "Online" },
  { id: 3, work: "Cost Per Hour", registered: "100", role: "Online" },
  { id: 4, work: "Grand Total", registered: "22000", role: "Online" },
];

const currentMonth = [
  { id: 0, work: "Total Classes Delivered", registered: "40", role: "Online" },
  { id: 1, work: "Total Hours Delivered", registered: "180", role: "Online" },
  { id: 2, work: "Cost Per Class", registered: "200", role: "Online" },
  { id: 3, work: "Cost Per Hour", registered: "100", role: "Online" },
  { id: 4, work: "Grand Total", registered: "26000", role: "Online" },
];

const PayDay = () => {
  const [collapseMulti, setCollapseMulti] = useState([false, false]);

  const toggleMulti = (type) => {
    let newCollapse = collapseMulti.slice();
    switch (type) {
      case "left":
        newCollapse[0] = !collapseMulti[0];
        break;
      case "right":
        newCollapse[1] = !collapseMulti[1];
        break;
      case "both":
        newCollapse[0] = !collapseMulti[0];
        newCollapse[1] = !collapseMulti[1];
        break;
      default:
    }
    setCollapseMulti(newCollapse);
  };

  return (
    <div>
      <Navbar />

      <div className="card-payday">
      <p>Click on the corresponding paycheck calculation for the dropdown info.</p>
        <CCard>
          <CCardHeader>Payday check</CCardHeader>
          <CCardBody>
            <p>
              <CButton
                color="primary"
                
                onClick={() => {
                  toggleMulti("left");
                }}
              >
                Last month calculation
              </CButton>{" "}
              <CButton
                color="primary"
                onClick={() => {
                  toggleMulti("right");
                }}
              >
                Current month calculation
              </CButton>{" "}
              <CButton
                color="primary"
                onClick={() => {
                  toggleMulti("both");
                }}
              >
                Compare both
              </CButton>{" "}
            </p>
            <CRow>
              <CCol>
                <CCollapse show={collapseMulti[0]}>
                  <CCard>
                    <CCardBody>
                      <CCard>
                        <CCardHeader>Table</CCardHeader>
                        <CCardBody>
                          <CDataTable
                            items={lastMonth}
                            fields={fields}
                            striped
                            
                          />
                        </CCardBody>
                      </CCard>

                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel>Description</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CTextarea
                            name="textarea-input"
                            id="textarea-input"
                            rows="9"
                            placeholder="Write additional note for providing any clarification..."
                          />
                        </CCol>
                      </CFormGroup>
                      <CButton size="sm" color="info">Approve</CButton>
                    </CCardBody>
                  </CCard>
                </CCollapse>
              </CCol>

              <CCol className="col-sm-12 col-md-6">
                <CCollapse show={collapseMulti[1]}>
                  <CCard>
                    <CCardBody>
                      <CCard>
                        <CCardHeader>Table</CCardHeader>
                        <CCardBody>
                          <CDataTable
                            items={currentMonth}
                            fields={fields}
                            striped
                          />
                        </CCardBody>
                      </CCard>

                      <CFormGroup row>
                        <CCol md="3">
                          <CLabel>Description</CLabel>
                        </CCol>
                        <CCol xs="12" md="9">
                          <CTextarea
                            name="textarea-input"
                            id="textarea-input"
                            rows="9"
                            placeholder="Write additional note for providing any clarification..."
                          />
                        </CCol>
                      </CFormGroup>

                      <CButton size="sm" color="info">Approve</CButton>

                    </CCardBody>
                  </CCard>
                </CCollapse>
              </CCol>
            </CRow>
          </CCardBody>
        </CCard>
      </div>
      <BottomNavbar />
    </div>
  );
};

export default PayDay;
