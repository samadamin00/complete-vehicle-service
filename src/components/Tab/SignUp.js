import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Card, CardContent, Tab, Tabs, Container, Grid, FormControl, Select, MenuItem, Alert } from '@mui/material';
import { styled } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import logo from '../../assets/img/logo.svg';
import axios from 'axios';
import Upload from './Upload';
import { useNavigate } from 'react-router-dom';
import './SignUP.css';

// Define custom styles using styled-components from MUI
const CustomSelect = styled(Select)(({ theme }) => ({
    paddingTop: '10px',
    borderRadius: '4px',
    '&:focus': {
        backgroundColor: '#e0e0e0',
    },
}));

const CustomMenuItem = styled(MenuItem)(({ theme }) => ({
    padding: '10px',
    '&:hover': {
        backgroundColor: 'var(--orange)',
    },
}));
const RegisterForm = styled('form')({
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    position: 'relative',
    maxWidth: '500px',
    margin: '0 auto',
});

const RegisterCard = styled(Card)({
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

const customStyles = {
    control: (provided, state) => ({
        ...provided,
        borderColor: state.isFocused ? "var(--orange)" : "var(--orange)",
        "&:hover": {
            borderColor: state.isFocused ? "var(--orange)" : "var(--orange)",
        },
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isFocused ? "var(--orange)" : "white",
        color: state.isFocused ? "black" : "inherit",
    }),
};

export default function SignUP() {
    const homeNavigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [avatar, setAvatar] = useState('');
    const [userType, setUserType] = useState('user');
    const [mechanicName, setMechanicName] = useState('');
    const [mechanicCnic, setMechanicCnic] = useState('');
    const [mechanicPhoneNumber, setMechanicPhoneNumber] = useState('');
    const [mechanicService, setMechanicService] = useState('');
    const [mechanicPassword, setMechanicPassword] = useState('');
    const [mechanicAvatar, setmechanicAvatar] = useState('');
    const [mechanicUtilityImage, setMechanicUtilityImage] = useState('');
    const [mechanicLocation, setMechanicLocation] = useState('');
    const [alertMessage, setAlertMessage] = useState('');
    const [alertSeverity, setAlertSeverity] = useState('success');
    const [showAlert, setShowAlert] = useState(false);
    const handlePasswordVisibilityToggle = () => {
        setShowPassword(!showPassword);
    };
    const handleChange = (e) => {
        if (e.target.name === 'avatar') {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(e.target.files[0]);
            fileReader.onload = () => {
                console.log('success');
                setAvatar(fileReader.result);
            };
        } else if (e.target.name === 'mechanicAvatar') {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(e.target.files[0]);
            fileReader.onload = () => {
                console.log('success');
                setmechanicAvatar(fileReader.result);
            };
        } else if (e.target.name === 'mechanicbill') {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(e.target.files[0]);
            fileReader.onload = () => {
                console.log('success');
                setMechanicUtilityImage(fileReader.result);
            };
        } else {
            setAvatar('error', e);
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/auth/userregister', {
                userName: name,
                email: email,
                phoneNumber: phoneNumber,
                password: password,
                avatar: avatar
            });
            setAlertMessage('Registration successful!');
            setAlertSeverity('success');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
                homeNavigate('/');
            }, 2000);
            if (response && response.data) {
                console.log('Registration successful:', response.data);
            }
        } catch (error) {
            setAlertMessage('Registration failed. Please try again.');
            setAlertSeverity('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            console.error('Registration error:', error);
        }

        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Phone Number:', phoneNumber);
        console.log('Password:', password);
        console.log('Avatar:', avatar);
    };

    const mechanicHandleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/auth/mechanicregister', {
                CNIC: mechanicCnic,
                name: mechanicName,
                phoneNumber: mechanicPhoneNumber,
                location: mechanicLocation,
                service: mechanicService,
                password: mechanicPassword,
                avatar: mechanicAvatar,
                utilityImage: mechanicUtilityImage
            });
            setAlertMessage('Registration successful!');
            setAlertSeverity('success');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
                homeNavigate('/');
            }, 2000);
            if (response && response.data) {
                console.log('Registration successful:', response.data);
            }
        } catch (error) {
            setAlertMessage('Registration failed. Please try again.');
            setAlertSeverity('error');
            setShowAlert(true);
            setTimeout(() => {
                setShowAlert(false);
            }, 2000);
            console.error('Registration error:', error);
        }

        console.log('Name:', mechanicName);
        console.log('Phone Number:', mechanicPhoneNumber);
        console.log('Password:', mechanicPhoneNumber);
        console.log('mechanicAvatar:', mechanicAvatar);
        console.log('mechanicAvatar:', mechanicUtilityImage);

    };

    const handleLocationChange = (e) => {
        setMechanicLocation(e.target.value);
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
            <section>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <Container maxWidth={'lg'}>
                        <Grid pt={20} pb={15} container >
                            <RegisterCard>
                                <CardContent >
                                    <LogoImage src={logo} alt="Logo" />
                                    <Typography variant="h5" align="center" gutterBottom>
                                        Sign Up
                                    </Typography>
                                    <Tabs
                                        value={userType}
                                        onChange={(event, newValue) => setUserType(newValue)}
                                        variant="fullWidth"
                                        indicatorColor="primary"
                                        textColor="primary"
                                        aria-label="user type tabs"
                                    >
                                        <Tab className='act' sx={{ color: 'black', fontSize: '1.6rem', bottom: '3px' }} label="User" value="user" />
                                        <Tab className='act' sx={{ color: 'black', fontSize: '1.6rem', bottom: '3px' }} label="Mechanic" value="mechanic" />
                                    </Tabs>
                                    {userType === 'user' && (
                                        <RegisterForm sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                                            <Box sx={{ position: 'relative', paddingTop: '10px' }}>
                                                <Upload onClick={handleChange}/>
                                            </Box>
                                            <TextField
                                                label="Name"
                                                variant="outlined"
                                                fullWidth
                                                onChange={(e) => setName(e.target.value)}
                                            />
                                            <TextField
                                                label="Email"
                                                variant="outlined"
                                                fullWidth
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                            />
                                            <TextField
                                                label="Phone Number"
                                                variant="outlined"
                                                fullWidth
                                                value={phoneNumber}
                                                onChange={(e) => setPhoneNumber(e.target.value)}
                                            />
                                            <Grid sx={{ width: '100%' }} style={{ position: 'relative' }}>
                                                <TextField
                                                    label="Password"
                                                    type={showPassword ? 'text' : 'password'}
                                                    variant="outlined"
                                                    fullWidth
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                />
                                                <EyeButton onClick={handlePasswordVisibilityToggle} size="small">
                                                    {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                                                </EyeButton>
                                            </Grid>

                                            <Button onClick={handleSubmit} disableRipple={true} sx={{
                                                backgroundColor: 'var(--orange)',
                                                "&:hover": {
                                                    bgcolor: "var(--orange)",
                                                },
                                            }} className='btn btn-orange' type="submit" variant="contained" color="primary" fullWidth>
                                                Sign Up
                                            </Button>
                                        </RegisterForm>

                                    )}
                                    {userType === 'mechanic' && (
                                        <RegisterForm sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }} onSubmit={handleSubmit}>
                                            <Box sx={{ position: 'relative', paddingTop: '10px' }}>
                                                <Upload />
                                            </Box>

                                            <TextField
                                                label="Name"
                                                variant="outlined"
                                                fullWidth
                                                value={mechanicName}
                                                onChange={(e) => setMechanicName(e.target.value)}

                                            />
                                            <FormControl fullWidth>
                                                <CustomSelect
                                                    value={mechanicLocation}
                                                    onChange={handleLocationChange}
                                                    displayEmpty
                                                >
                                                    <CustomMenuItem disabled value="District">
                                                        District
                                                    </CustomMenuItem>
                                                    <CustomMenuItem value="Karachi South">Karachi South</CustomMenuItem>
                                                    <CustomMenuItem value="Karachi East">Karachi East</CustomMenuItem>
                                                    <CustomMenuItem value="Karachi West">Karachi West</CustomMenuItem>
                                                    <CustomMenuItem value="Karachi Central">Karachi Central</CustomMenuItem>
                                                    <CustomMenuItem value="Karachi North">Karachi North</CustomMenuItem>
                                                    <CustomMenuItem value="Korangi">Korangi</CustomMenuItem>
                                                </CustomSelect>
                                            </FormControl>
                                            <TextField
                                                label="Service Name"
                                                variant="outlined"
                                                fullWidth
                                                onChange={(e) => setMechanicService(e.target.value)}
                                            />
                                            <TextField
                                                label="Phone Number"
                                                variant="outlined"
                                                fullWidth
                                                value={mechanicPhoneNumber}
                                                onChange={(e) => setMechanicPhoneNumber(e.target.value)}
                                            />

                                            <TextField
                                                label="CNIC"
                                                variant="outlined"
                                                fullWidth
                                                value={mechanicCnic}
                                                onChange={(e) => setMechanicCnic(e.target.value)}

                                            />

                                            <Grid sx={{ width: '100%' }} style={{ position: 'relative' }}>
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
                                            </Grid>
                                            <Button onClick={mechanicHandleSubmit} disableRipple={true} sx={{
                                                backgroundColor: 'var(--orange)',
                                                "&:hover": {
                                                    bgcolor: "var(--orange)",
                                                },
                                            }} className='btn btn-orange' type="submit" variant="contained" color="primary" fullWidth>
                                                Sign Up
                                            </Button>
                                        </RegisterForm>
                                    )}

                                </CardContent>
                            </RegisterCard>
                        </Grid>
                    </Container>
                </Box >
            </section>
        </>
    );
}
