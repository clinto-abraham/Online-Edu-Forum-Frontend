import {
    Box,
    Button,
    Card,
    CardContent,
    
  } from '@material-ui/core';
  import {CCardBody, CCardHeader, CCard } from "@coreui/react";
  
import { Search } from '../../search';
  
  const StudentManagement = (props) => (
    <>
    <CCardBody>
    <Box {...props}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end'
        }}
      >
        </Box>
        
      

      

      <Box sx={{ mt: 3 }}>
        <Card>
        <div className="lead">
        <Button
          color="primary"
          variant="contained"
          style={{ margin:"20px"}}
        >
          Update
        </Button>
        <Button
          color="secondary"
          variant="contained"
          style={{ margin:"20px"}}
        >
          Clear
        </Button>
        </div>
          <CardContent>
          <CCard>
            <CCardHeader>Update student's class records</CCardHeader>
            
            <Search />
            </CCard>
          </CardContent>
        </Card>
      </Box>
    </Box>

</CCardBody>
    
    </>
  );
  
  export default StudentManagement;
  