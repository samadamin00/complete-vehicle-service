import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent,Tabs, Tab, Alert } from '@mui/material';
import { styled } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from '../../assets/img/logo.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios

const LoginForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  position: 'relative',
  maxWidth: '500px',
  margin: '0 auto',
  padding: '3rem 0rem'
});

const LoginCard = styled(Card)({
  width: '400px',
  margin: '0 auto',
});

const LogoImage = styled('img')({
  width: '50px',
  display: 'block',
  margin: '0 auto 20px',
});

const EyeButton = styled(Button)({
  position: 'absolute',
  right: '10px',
  top: '50%',
  transform: 'translateY(-50%)',
});

const CustomTypography = styled(Typography)({
  marginTop: '15px',
});

export default function Login() {
  const homeNavigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [userType, setUserType] = useState('user');
  const [useremail, setUserEmail] = useState('');
  const [userpassword, setUserPassword] = useState('');
  const [mechanicPhoneNumber, setMechanicPhoneNumber] = useState('');
  const [mechanicPassword, setMechanicPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [alertSeverity, setAlertSeverity] = useState('success');
  const [showAlert, setShowAlert] = useState(false);

  const handlePasswordVisibilityToggle = () => {
    setShowPassword(!showPassword);
  };

  const userHandleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/auth/userlogin', {
        email: useremail,
        password: userpassword
      });
      console.log(response.data);
      localStorage.setItem('token', response.data.token);

      setAlertMessage('Login successful!');
      setAlertSeverity('success');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        homeNavigate('/');
      }, 2000);
    } catch (error) {
      setAlertMessage('Login failed. Please try again.');
      setAlertSeverity('error');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  const mechanicHandleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/auth/mechaniclogin', {
        phoneNumber: mechanicPhoneNumber,
        password: mechanicPassword
      });
      console.log(response.data);
      localStorage.setItem('token', response.data.token);

      setAlertMessage('Login successful!');
      setAlertSeverity('success');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
        homeNavigate('/');
      }, 2000);
    } catch (error) {
      setAlertMessage('Login failed. Please try again.');
      setAlertSeverity('error');
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  return (
    <>
      {showAlert && (
        <Alert
          variant="filled"
          severity={alertSeverity}
          sx={{
            position: 'fixed',
            top: '50px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 1200,
            margin: '20px 0',
          }}
        >
          {alertMessage}
        </Alert>
      )}

      <Box sx={{ margin: '60px 0px', display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <LoginCard>
          <CardContent>
            <LogoImage src={logo} alt="Logo" />
            <Typography variant="h5" align="center" gutterBottom>
              Login
            </Typography>
            <Tabs
              value={userType}
              onChange={(event, newValue) => setUserType(newValue)}
              variant="fullWidth"
              indicatorColor="primary"
              textColor="primary"
              aria-label="user type tabs"
            >
              <Tab className='act' sx={{ color: 'black', fontSize: '1.6rem', bottom: '5px' }} label="User" value="user" />
              <Tab className='act' sx={{ color: 'black', fontSize: '1.6rem', bottom: '5px' }} label="Mechanic" value="mechanic" />
            </Tabs>

            {userType === 'user' && (
              <LoginForm onSubmit={userHandleSubmit}>
                <TextField
                  label="Email"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  value={useremail}
                  onChange={(e) => setUserEmail(e.target.value)}
                />
                <div style={{ position: 'relative' }}>
                  <TextField
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    fullWidth
                    value={userpassword}
                    onChange={(e) => setUserPassword(e.target.value)}
                  />
                  <EyeButton onClick={handlePasswordVisibilityToggle} size="small">
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </EyeButton>
                </div>
                
                <Button sx={{
                  backgroundColor: 'var(--orange)',
                  "&:hover": {
                    bgcolor: "var(--orange)",
                  },
                }} type="submit" className='btn btn-orange' variant="contained" fullWidth>
                  Log in
                </Button>
              </LoginForm>
            )}
            {userType === 'mechanic' && (
              <LoginForm onSubmit={mechanicHandleSubmit}>
                <TextField
                  label="Mechanic Phone Number"
                  variant="outlined"
                  fullWidth
                  autoFocus
                  type="number"
                  value={mechanicPhoneNumber}
                  onChange={(e) => setMechanicPhoneNumber(e.target.value)}
                />
                <div style={{ position: 'relative' }}>
                  <TextField
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    fullWidth
                    value={mechanicPassword}
                    onChange={(e) => setMechanicPassword(e.target.value)}
                  />
                  <EyeButton onClick={handlePasswordVisibilityToggle} size="small">
                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </EyeButton>
                </div>
                
                <Button sx={{
                  backgroundColor: 'var(--orange)',
                  "&:hover": {
                    bgcolor: "var(--orange)",
                  },
                }} type="submit" className='btn btn-orange' variant="contained" fullWidth>
                  Log in
                </Button>
              </LoginForm>
            )}
            <CustomTypography align="center" variant="body2">
              Don't have an account? <Link to={'/Signup'}>Register</Link>
            </CustomTypography>
          </CardContent>
        </LoginCard>
      </Box>
    </>
  );
}
