import axios from 'axios';
import React, { useState } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import BottomNavbar from '../bottomNavbar';



const Register = () => {
  const [login, setLogin] = useState({
    username: '',
    password: ''
  });

  function handleChange (e) {
    const {name, value} = e.target;
    setLogin(preLogin => {
      return { 
        ...preLogin,
        [name]: value
      }
    })
  }

  function handleClick (e) {
    e.preventDefault();
    console.log(login);
    const newTeacher = {
      teachername: login.username,
      password: login.password
    }
    axios.post('http://localhost:5000/adminPosts', newTeacher);
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>  Register Teacher</h1>
                  <p className="text-muted">Create teacher's account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>

                    <CInput name="username" value={login.username} onChange={handleChange} type="text" placeholder="Username" autoComplete="username" />
                  </CInputGroup>
                  
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>

                    <CInput name="password" value={login.password} onChange={handleChange} type="password" placeholder="Password" autoComplete="new-password" />

                  </CInputGroup>
                 
                  <CButton onClick={handleClick} color="success" block>Create Account</CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>

      <BottomNavbar />
    </div>
  )
}

export default Register
