import React from "react";
import Bottom from "./bottom";
import Title from "./title";
import {
  AppBar,
  Container,
  Typography,
  Button,
  Box,
} from "@material-ui/core";

import TextField from "@material-ui/core/TextField";

function TeacherRegister() {
  const [value, setValue] = React.useState("John Wick");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Title />

      <form className="root" noValidate autoComplete="off">
        <AppBar position="static" color="inherit" className="appBar">
          <Container maxWidth="lg">
            <Typography variant="h2" align="center">
              {" "}
              Teacher Register
            </Typography>

            <Box component="span" display="block">
              <TextField
                id="outlined-multiline-flexible"
                label="Name Of Student"
                multiline
                rowsMax={4}
                value={value}
                onChange={handleChange}
                variant="outlined"
                className="box-teacher-1"
              />{" "}
            </Box>

            <Box component="span" display="block">
              <TextField
                id="outlined-textarea"
                label="Class"
                placeholder="Placeholder"
                multiline
                variant="outlined"
              />{" "}
            </Box>

            <Box component="span" display="block">
              <TextField
                id="outlined-multiline-static"
                label="Description"
                multiline
                rows={4}
                defaultValue="Default Value"
                variant="outlined"
              />{" "}
            </Box>

            <Box component="span" m={8}>
              <Button variant="contained" color="primary" href="#">
                Save
              </Button>
            </Box>
          </Container>
        </AppBar>
      </form>

      <Bottom />
    </>
  );
}

export default TeacherRegister;
