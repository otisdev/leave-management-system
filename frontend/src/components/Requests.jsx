import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { publicRequest } from '../request';
import { useEffect, useState } from 'react';
import "../components/table.scss"


const Requests = () => {

const [leave, setLeave] = useState([])

useEffect(() => {

  const getLeave = async () => {
    try{
      const rows = await publicRequest.get("/request")
      setLeave(rows.data)
    }catch(e){
      console.log(e);
    }
  }
  getLeave();

},[] )



  return (
    <TableContainer component={Paper} className='table'>
    <div class="wrapper">
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Leave Days</TableCell>
          <TableCell align="right">Leave Type</TableCell>
          <TableCell align="right">Start&nbsp;</TableCell>
          <TableCell align="right">End&nbsp;</TableCell>
          <TableCell align="right">Status&nbsp;</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {leave.map((employee) => (
          <TableRow
            key={employee._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {employee.employee_name} {employee.employee_lastname}
            </TableCell>
            <TableCell align="right">{employee.leave_days}</TableCell>
            <TableCell align="right">{employee.leave_type}</TableCell>
            <TableCell align="right">{employee.leave_start}</TableCell>
            <TableCell align="right">{employee.leave_end}</TableCell>
            <TableCell align="right">{employee.Status}</TableCell>

          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  </TableContainer> 
 )
}


export default Requests