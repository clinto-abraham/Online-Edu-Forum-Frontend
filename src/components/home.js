import React from "react";
import Bottom from "./bottom";
import Title from "./title";
import {
  AppBar,
  Container,
  Typography,
  Grow,
  Grid,
  Button,
  Box,
} from "@material-ui/core";

function Home() {
  return (
    <>
      <Title />
      <h1>Home</h1>
      <p>
        Online edu forum controls the teacher login and admin login for
        adminstrating whole student education. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit sed vulputate mi sit amet mauris commodo. Facilisis volutpat est velit egestas dui id ornare arcu. Elementum nibh tellus molestie nunc non blandit. Nunc sed blandit libero volutpat sed cras ornare. Tortor condimentum lacinia quis vel eros donec ac odio tempor. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Egestas pretium aenean pharetra magna. 
      </p>
      <Container maxWidth="sm">
        <AppBar position="static" color="inherit" className="appBar">
         <Container maxWidth="sm">
          <Grow in>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
            >
              <Typography variant="h2" align="center">
                Teacher Control
              </Typography>
              <Box component="span" m={8}>
                <Button variant="contained" color="primary" href="/teacher-register">Teacher Login</Button>
              </Box>
            </Grid>
          </Grow>
          </Container>
         
         <Container maxWidth="sm">
          <Grow in>
            <Grid
              container
              direction="row"
              justify="center"
              alignItems="center"
              xs={12}
            >
              <Typography variant="h2" align="center">
                Admin Control
              </Typography>
              <Box component="span" m={6}>
                <Button variant="contained" color="primary" href="/student-register">Admin Login</Button>
              </Box>
            </Grid>
          </Grow>
          </Container>
        </AppBar>
      </Container>
      <Bottom />
      
    </>
  );
}

export default Home;
