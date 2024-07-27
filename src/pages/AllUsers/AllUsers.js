import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';

function AllUsers() {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
let token = localStorage.getItem('token');
  const fetchData = async () => {
    try {
      const response = await axios.get('https://mechanic-system-backend-bano-qabil-mern.vercel.app/api/admin/userprofile',{
        headers:{
          Authorization: token
        }
      });
       console.log(response.data)
      setRows(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><Typography color='black' variant='h6'>Users Name</Typography></TableCell>
              <TableCell><Typography color='black' variant='h6'>Phone no</Typography></TableCell>
              <TableCell><Typography color='black' variant='h6'>Avatar</Typography></TableCell>
              <TableCell><Typography color='black' variant='h6'>Email</Typography></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.userName}
                </TableCell>
                <TableCell>{row.phoneNumber}</TableCell>
                <TableCell><img className='image' src={row.avatar} alt="" /></TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.select}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default AllUsers;
