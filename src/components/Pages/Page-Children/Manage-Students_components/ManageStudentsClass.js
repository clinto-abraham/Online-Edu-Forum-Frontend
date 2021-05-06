import { Helmet } from 'react-helmet';
import { Box, Container } from '@material-ui/core';

import StudentManagement from './studentManage';
import StudentUpdate from './studentUpdate';
import { students } from './students';


const ManageStudentsClass = () => (
  <>
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
  </>
);

export default ManageStudentsClass;
