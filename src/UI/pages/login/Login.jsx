import * as React from 'react';
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from './LoginStyles';

export default function Login() {
  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      username: data.get('username'),
      password: data.get('password'),
    });
    navigate('/dashboard');
  };

  return (
    // <ThemeProvider theme={theme}>
      <Grid container>
        <CssBaseline />
        <Grid
          item container
          xs={false}
          lg={5}
          xl={4}
          sx={styles.leftPane}
          >
            {/* <div className={classes.leftPane}> */}
              <Grid item xl={12} lg={12} sx={styles.leftPaneTopImg} />
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={styles.leftPaneBg} />
              <Grid item sx={styles.leftPaneText}>
                <span>Iquartic SmartLens</span>
              </Grid>
              <Grid item lg={11} sx={styles.leftPaneSubText}>
                  <span>Ex est magna in velit dolor adipisicing. Voluptate laboris anim laboris est laborum ullamco minim mollit. </span>
              </Grid>
              <Grid item xl={12} lg={12} md={12} sm={12} xs={12} sx={styles.leftPaneBottomImg} />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={7} xl={8} square>
          <Box
            sx={styles.rightPane}
          >
            <Typography variant='h4'>
              Sign in
            </Typography>
            <Typography component="h4">
              Welcome back to iQuartic Smart Lens!
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 10, maxWidth: '432px' }}>
              <span style={{fontSize:'16px'}}>Username</span>
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                id="username"
                name="username"
                autoComplete="username"
                autoFocus
              />
              <span style={{fontSize:'16px'}}>Password</span>
              <TextField
                margin="normal"
                variant="outlined"
                required
                fullWidth
                name="password"
                placeholder="8 + characters"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <Button variant='text' sx={styles.resetPassword}>Reset Password</Button>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={styles.loginButton}
              >
                Login
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    // </ThemeProvider>
  );
}