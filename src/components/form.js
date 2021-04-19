import React from "react";
import Bottom from "./bottom";
import Title from "./title";
import {
  AppBar,
  Container,
  Grid,
  Button,
  Box,
  Typography,
  
} from "@material-ui/core";

import TextField from "@material-ui/core/TextField";

function Form() {
  const price = 100;

  const [value, setValue] = React.useState("");
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <Title />
      
      <Typography variant="h3" align="center"> Student Registration Forum</Typography>
      <form className="root" noValidate autoComplete="off">
        <AppBar position="static" color="inherit" className="appBar">
          <Container maxWidth="sm">
            <div className="box-admin">
              <Grid>
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
                    display="inline"
                  />
                </Box>
                <Box component="span" display="block">
                  <TextField
                    id="outlined-textarea"
                    label="Address"
                    placeholder="Placeholder"
                    multiline
                    variant="outlined"
                    display="block"
                  />
                </Box>
                <Box component="span" display="block">
                  <TextField
                    id="outlined-multiline-static"
                    label="Description"
                    multiline
                    rows={4}
                    defaultValue="Default Value"
                    variant="outlined"
                    display="inline-block"
                  />
                </Box>

                <Box component="span" display="block">
                  <TextField
                    id="outlined-multiline-static"
                    label="Phone Number"
                    multiline
                    rowsMax={4}
                    
                    variant="outlined"
                    type="number"
                    InputProps={{
                      inputProps: {
                        max: 12,
                        min: 10,
                      },
                    }}
                  />
                </Box>

                <TextField
                  id="outlined-multiline-flexible"
                  label="Select Course:"
                  multiline
                  rowsMax={4}
                  onChange={handleChange}
                  variant="outlined"
                  className="box-teacher-1"
                  display="inline"
                />
                <label>
                  <label className="courseSelect">
                    Reading <input className="checkboxPrice" type="checkbox" />{" "}
                    <p className="priceTag">Rs. {price}</p>
                  </label>
                  <label className="courseSelect">
                    Writing
                    <input className="checkboxPrice" type="checkbox" />{" "}
                    <p className="priceTag">Rs. {price}</p>
                  </label>
                  <label className="courseSelect">
                    Listening
                    <input className="checkboxPrice" type="checkbox" />{" "}
                    <p className="priceTag">Rs. {price}</p>
                  </label>
                  <label className="courseSelect">
                    Speaking
                    <input className="checkboxPrice" type="checkbox" />{" "}
                    <p className="priceTag">Rs. {price}</p>
                  </label>
                </label>
                <Button variant="contained" color="primary" href="#">
                  Save
                </Button>
              </Grid>
            </div>
          </Container>
        </AppBar>
      </form>
     
      <Bottom />
    </>
  );
}
export default Form;
