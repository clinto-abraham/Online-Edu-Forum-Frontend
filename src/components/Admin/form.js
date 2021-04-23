import React from "react";
import BottomNavbar  from '../bottomNavbar';
import {
  CButton,
  CCard,
  CCardBody,
  
  CCardHeader,
  CCol,
  CForm,
  CFormGroup,
  CTextarea,
  CInput,
 
  CInputCheckbox,

  CInputGroup,
  CInputGroupAppend,
  CInputGroupPrepend,

  CInputGroupText,
  CLabel,
  CSelect,
  CRow,
  
} from "@coreui/react";


const BasicForms = () => {


  return (
    <>
    <div className="form-admin">
      <CRow>
        <CCol xs="12" sm="12">
          <CCard>
            <CCardHeader>Register Student Data</CCardHeader>
            <CCardBody>
              <CFormGroup row className="my-0">
                <CCol xs="8">
                  <CLabel>Name of student</CLabel>
                  <CInput
                    id="company"
                    placeholder="Enter the full name of student"
                  />
                </CCol>
                <CCol xs="4">
                  <CLabel>Email ID</CLabel>
                  <CInput
                    id="email"
                    placeholder="Enter the email id of student"
                  />
                </CCol>
              </CFormGroup>

              <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CLabel htmlFor="roll-number"> Unique Roll Number</CLabel>
                  <CInput
                    id="roll-number"
                    placeholder="Assign roll number for future reference"
                  />
                </CCol>
                <CCol xs="4">
                  <CLabel>Age of student</CLabel>
                  <CInput id="age" placeholder="15" />
                </CCol>
                <CCol xs="4">
                  <CLabel>Class</CLabel>
                  <CInput id="class" placeholder="10" />
                </CCol>
              </CFormGroup>

              <CFormGroup>
                <CLabel htmlFor="street">Adress of student</CLabel>
                <CInput id="street" placeholder="Enter street name" />
              </CFormGroup>

              <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="city">City</CLabel>
                    <CInput id="city" placeholder="Enter name of city" />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="postal-code">Postal Code</CLabel>
                    <CInput id="postal-code" placeholder="Postal Code" />
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="country">Country</CLabel>
                    <CInput id="country" placeholder="India" />
                  </CFormGroup>
                </CCol>
              </CFormGroup>

              <CFormGroup row className="my-0">
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="appendedPrependedInput">
                      Total Payment
                    </CLabel>
                    <div className="controls">
                      <CInputGroup className="input-prepend">
                        <CInputGroupPrepend>
                          <CInputGroupText>Rs</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          id="appendedPrependedInput"
                          size="16"
                          type="text"
                        />
                        <CInputGroupAppend>
                          <CInputGroupText>.00</CInputGroupText>
                        </CInputGroupAppend>
                      </CInputGroup>
                    </div>
                  </CFormGroup>
                </CCol>
                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="appendedPrependedInput">
                      Payment received
                    </CLabel>
                    <div className="controls">
                      <CInputGroup className="input-prepend">
                        <CInputGroupPrepend>
                          <CInputGroupText>Rs</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          id="appendedPrependedInput"
                          size="16"
                          type="text"
                        />
                        <CInputGroupAppend>
                          <CInputGroupText>.00</CInputGroupText>
                        </CInputGroupAppend>
                      </CInputGroup>
                    </div>
                  </CFormGroup>
                </CCol>

                <CCol xs="4">
                  <CFormGroup>
                    <CLabel htmlFor="appendedPrependedInput">
                      Payment due
                    </CLabel>
                    <div className="controls">
                      <CInputGroup className="input-prepend">
                        <CInputGroupPrepend>
                          <CInputGroupText>Rs</CInputGroupText>
                        </CInputGroupPrepend>
                        <CInput
                          id="appendedPrependedInput"
                          size="16"
                          type="text"
                        />
                        <CInputGroupAppend>
                          <CInputGroupText>.00</CInputGroupText>
                        </CInputGroupAppend>
                      </CInputGroup>
                    </div>
                  </CFormGroup>
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol xs="8">
                  <CLabel htmlFor="textarea-input">Additional description :</CLabel>
                  <CTextarea
                    name="textarea-input"
                    id="textarea-input"
                    rows="6"
                    placeholder="Content..."
                  />
                </CCol>
                <CCol xs="4">
                  
                    
                      <CLabel>Select package</CLabel>
                  
                    <CCol>
                      <CFormGroup variant="checkbox" className="checkbox">
                        <CInputCheckbox
                          id="checkbox1"
                          name="checkbox1"
                          value="option1"
                        />
                        <CLabel
                          variant="checkbox"
                          className="form-check-label"
                          htmlFor="checkbox1"
                        >
                          Listening
                        </CLabel>
                      </CFormGroup>

                      <CFormGroup variant="checkbox" className="checkbox">
                        <CInputCheckbox
                          id="checkbox2"
                          name="checkbox2"
                          value="option2"
                        />
                        <CLabel
                          variant="checkbox"
                          className="form-check-label"
                          htmlFor="checkbox2"
                        >
                          Reading
                        </CLabel>
                      </CFormGroup>
                      
                      <CFormGroup variant="checkbox" className="checkbox">
                        <CInputCheckbox
                          id="checkbox3"
                          name="checkbox3"
                          value="option3"
                        />
                        <CLabel
                          variant="checkbox"
                          className="form-check-label"
                          htmlFor="checkbox3"
                        >
                          Writing
                        </CLabel>
                      </CFormGroup>
                      <CFormGroup variant="checkbox" className="checkbox">
                        <CInputCheckbox
                          id="checkbox4"
                          name="checkbox4"
                          value="option4"
                        />
                        <CLabel
                          variant="checkbox"
                          className="form-check-label"
                          htmlFor="checkbox4"
                        >
                          Speaking
                        </CLabel>
                      </CFormGroup>
                    </CCol>
                  
                </CCol>
              </CFormGroup>

              <CFormGroup row>
                <CCol xs="4">
                  <CLabel htmlFor="date-input">Date of admission</CLabel>
                  <CInput
                    type="date"
                    id="date-input"
                    name="date-input"
                    placeholder="date"
                  />
                </CCol>

                <CCol xs="4">        
                  <CLabel>Course duration</CLabel>
                  <CInputGroup className="input-prepend" >
                  <CInput id="class" placeholder="6" /> 
                  <CInputGroupAppend>
                      <CInputGroupText>Months</CInputGroupText>
                  </CInputGroupAppend>    
                  </CInputGroup>
                </CCol>

                <CCol xs="4">
                  <CLabel htmlFor="disabled-input">Disabled Input</CLabel>
                  <CInput
                    id="disabled-input"
                    name="disabled-input"
                    placeholder="Disabled"
                    disabled
                  />
                </CCol>
              </CFormGroup>
              

              <CFormGroup row>
                <CCol xs="4">
                  <CLabel htmlFor="select">Select mode of study</CLabel>
                  <CSelect custom name="select" id="select">
                    <option value="0">Please select</option>
                    <option value="1">Online Course </option>
                    <option value="2">Offline Course </option>
                    <option value="3">Online + Offline Course</option>
                  </CSelect>
                </CCol>

                <CCol xs="8">
                  <CLabel>Select payment methods</CLabel>
                  <CCol>
                  <CFormGroup variant="custom-checkbox" inline>
                  <CInputCheckbox
                      custom
                      id="inline-checkbox1"
                      name="inline-checkbox1"
                      value="option2"
                    />
                    <CLabel
                      variant="custom-checkbox"
                      htmlFor="inline-checkbox1"
                    >
                      IMPS
                    </CLabel>
                  </CFormGroup>


                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox
                      custom
                      id="inline-checkbox2"
                      name="inline-checkbox2"
                      value="option2"
                    />
                    <CLabel
                      variant="custom-checkbox"
                      htmlFor="inline-checkbox2"
                    >
                      NEFT
                    </CLabel>
                  </CFormGroup>

                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox
                      custom
                      id="inline-checkbox2"
                      name="inline-checkbox2"
                      value="option2"
                    />
                    <CLabel
                      variant="custom-checkbox"
                      htmlFor="inline-checkbox2"
                    >
                      Google Pay
                    </CLabel>
                  </CFormGroup>

                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox
                      custom
                      id="inline-checkbox2"
                      name="inline-checkbox2"
                      value="option2"
                    />
                    <CLabel
                      variant="custom-checkbox"
                      htmlFor="inline-checkbox2"
                    >
                      PhonePe 
                    </CLabel>
                  </CFormGroup>

                  <CFormGroup variant="custom-checkbox" inline>
                    <CInputCheckbox
                      custom
                      id="inline-checkbox3"
                      name="inline-checkbox3"
                      value="option3"
                    />
                    <CLabel
                      variant="custom-checkbox"
                      htmlFor="inline-checkbox3"
                    >
                      CASH
                    </CLabel>
                  </CFormGroup>
                  </CCol>

                </CCol>
              </CFormGroup>

              <CRow>
                <CCol xs="12">
                  <CCard>
                    <CCardBody>
                      <CForm className="form-horizontal">
                        <div className="form-actions">
                          <CButton
                            className="save"
                            type="submit"
                            color="primary"
                          >
                            Save changes
                          </CButton>
                          <CButton className="save" color="secondary">
                            Cancel
                          </CButton>
                        </div>
                      </CForm>
                    </CCardBody>
                  </CCard>
                </CCol>
              </CRow>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>

      
    </div>
    <BottomNavbar />
    </>
  );
};

export default BasicForms;
