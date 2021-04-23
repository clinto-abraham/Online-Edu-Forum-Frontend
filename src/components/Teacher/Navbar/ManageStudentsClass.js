import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';

import StudentManagement from './studentManage';
import StudentUpdate from './studentUpdate';
import { students } from './students';
import BottomNavbar from '../../bottomNavbar';

import Navbar from '../../Navbar';


const ManageStudentsClass = () => (
  <>
    <Navbar />
    <Helmet>
      <title>Customers | Material Kit</title>
    </Helmet>
    <Box
      sx={{
        backgroundColor: 'background.default',
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <StudentManagement />
        <Box sx={{ pt: 3 }}>
          <StudentUpdate customers={students} />
        </Box>
      </Container>
    </Box>
    <BottomNavbar />
  </>
);

export default ManageStudentsClass;
