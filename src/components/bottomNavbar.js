import React from "react";
import { Search } from "./search";

import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Link from "@material-ui/core/Link";
import { CRow, CCol } from "@coreui/react";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" style={{textAlign:"center"}} >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Name of Organization or Link of Official Site
      </Link>{"  @"}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: "auto",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[200]
        : theme.palette.grey[800],
  },
}));

function BottomNavbar() {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <CRow>
        
          
            <CCol xs="3">
              <Search />
            </CCol>
            <CCol xs="6">
            
              <Container maxWidth="sm">
                <Typography variant="body2" color="textSecondary" style={{textAlign:"center"}}>
                Contact:{"+91-"}{'9876543210 / '} Telephone: {"02836-987654"}
                </Typography>
                <Typography variant="body2" color="textSecondary" style={{textAlign:"center"}}> Email id: onlineschool@gmail.com
                </Typography>
                <Copyright />

                <Typography variant="body2" color="textSecondary" style={{textAlign:"center"}} >Created By Top Of Cliff Developers </Typography>
              </Container>
              
            
            </CCol>
          
        
      </CRow>
      </footer>
  );
}

export default BottomNavbar;
