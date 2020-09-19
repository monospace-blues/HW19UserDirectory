import React, { useState, useEffect } from 'react';
import TableData from './TableData';

function Table (props) {

  return (
    <div>
      <table style={{
        position: 'absolute', left: '50%', top: '35%',
        transform: 'translate(-50%, -50%)'
      }}>
        {/* table header */}
        <tr>
          <th>Name</th>
          <th>Hours</th>
          <th>Wages</th>
          <th>Hired</th>
        </tr>

        {/* table data */}
        {props.searchRes.map((employee, index) => (
        <TableData key={index} name={employee.employeeName} hours={employee.hoursWorked} wages={employee.wages} hired={employee.hiredDate}/>
        ))}
      </table>
        
    </div> 
  )
}

export default Table;