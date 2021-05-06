import React, { useState } from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';
import { Avatar, Button, TextField, Grid, Checkbox, Box, FormControlLabel, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import useStyles from '../Styles/makeStyles';
import { CCardBody } from '@coreui/react';
// 
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin } from '../../redux/actions/auth';

const initialState = { username: '', password: ''};
// 

export default function SignIn() {

  // 
  

  const [form, setForm] = useState({ username: '', password: ''});
  const dispatch = useDispatch();
  const history = useHistory();
    
  function handleSubmit (e) {
    e.preventDefault();
    console.log(form, history);
    dispatch(signin(form, history));
    clear();
  };

const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

function clear (){
  setForm(initialState);
}
  // 
 
  const classes = useStyles();
  
  
  return (
    <>
    <CCardBody>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="text"
            id="username"
            label="username"
            name="username"
            autoComplete="username"
            autoFocus
            value={form.username}
            onChange={handleChange}
          />
          
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            type="password"
            id="password"
            label="password"
            name="password"
            autoComplete="password"
            autoFocus
            value={form.password}
            onChange={handleChange}
          />
          <FormControlLabel
            control={<Checkbox name="remember" value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
                Forgot password?
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        
      </Box>
    </Container>
    </CCardBody>
    </>
  );
}