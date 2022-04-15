import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "../requests/table.scss"
import moment from 'moment'


const Requests = ({leave}) => {
  return (
    <TableContainer component={Paper} className="table" >
    <div class="wrapper">
    <Table aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Name</TableCell>
          <TableCell align="right">Leave Days</TableCell>
          <TableCell align="right">Leave Type</TableCell>
          <TableCell align="right">Start&nbsp;</TableCell>
          <TableCell align="right">End&nbsp;</TableCell>
          <TableCell align="right">Reason&nbsp;</TableCell>
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
            <TableCell align="right">{moment(employee.leave_start).format('LL')}</TableCell>
            <TableCell align="right">{moment(employee.leave_end).format('LL')}</TableCell>
            <TableCell align="right">{employee.reason}</TableCell>
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