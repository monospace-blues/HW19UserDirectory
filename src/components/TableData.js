import React, { useState, useEffect } from 'react';

function Table (props) {

  return (
        <tr key={props.key}>
          <td>{props.name}</td>
          <td>{props.hours}</td>
          <td>{props.wages}</td>
          <td>{props.hired}</td>
        </tr>   
  )
}

export default Table;