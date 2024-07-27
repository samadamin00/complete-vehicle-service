import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { Box, Typography } from '@mui/material';


function AllMechanics() {
  const [mechanics, setMechanics] = useState([]);
  let token = localStorage.getItem('token');
  console.log(token)
  useEffect(() => {
    let AllMechanic = async () => {
      try {
        let response = await axios.get('https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/admin/mechanicprofile', {
          headers: {
            'Authorization': `${token}`
          }
        })
        console.log(response.data)
        setMechanics(response.data);
      }
      catch (err) {
        console.log('error', err)
      }
    }
    AllMechanic()
  }, [])


  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><Typography color='black' variant='h6'>ID</Typography></TableCell>
              <TableCell><Typography color='black' variant='h6'>Mechanic Name</Typography></TableCell>
              <TableCell><Typography color='black' variant='h6'>Avatar</Typography></TableCell>
              <TableCell><Typography color='black' variant='h6'>CNIC</Typography></TableCell>
              <TableCell><Typography color='black' variant='h6'>Phone No</Typography></TableCell>
              <TableCell><Typography color='black' variant='h6'>Location</Typography></TableCell>
              <TableCell><Typography color='black' variant='h6'>service</Typography></TableCell>
              <TableCell><Typography color='black' variant='h6'>utilityImage</Typography></TableCell>
              <TableCell><Typography color='black' variant='h6'>Verification</Typography></TableCell>
              <TableCell><Typography color='black' variant='h6'>serviceVerification</Typography></TableCell>
              <TableCell><Typography color='black' variant='h6'>__v</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {mechanics.map((mechanic, id) => (
              <TableRow key={id}>
                <TableCell>{mechanic._id}</TableCell>
                <TableCell component="th" scope="row">{mechanic.name}</TableCell>
                <TableCell component="th" scope="row"><img className='image' src={mechanic.avatar} alt={mechanic.name}/></TableCell>
                <TableCell>{mechanic.CNIC}</TableCell>
                <TableCell>{mechanic.phoneNumber}</TableCell>
                <TableCell>{mechanic.location}</TableCell>
                <TableCell>{mechanic.service}</TableCell>
                <TableCell><img className='image' src={mechanic.utilityImage} alt={mechanic.name} /></TableCell>
                <TableCell>{mechanic.verificationx}</TableCell>
                <TableCell>{mechanic.serviceVerification}</TableCell>
                <TableCell>{mechanic.__v}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AllMechanics;
