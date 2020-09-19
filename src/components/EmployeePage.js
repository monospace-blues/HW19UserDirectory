import React, { useState, useEffect } from 'react';
import DUMMYDATA from './DUMMYDATA.json';

function EmployeeDir() {

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [select, setSelect] = useState("name");
  
  
  
  

  useEffect(() => {
    const data = DUMMYDATA;
    let results;
    if (select === "wages"){
      results = data.filter(emp =>
        emp.wages.includes(search)
      );
    } else if (select === "name") {
      results = data.filter(emp =>
        emp.employeeName.toLowerCase().includes(search.toLowerCase())
      );
    }
      
    setSearchResults(results);
    
  }, [search])

  function handleChange (e) {
    console.log(e.target.value);
    setSearch(e.target.value);
  }

  function handleSelect (e) {
    console.log(e.target.value);
    setSelect(e.target.value);
  }
  


  return (
    <div>
      <h1>Employee Directory!!</h1>
      <form>
        <input type="text" value={search} placeholder="Search by FirstName" onChange={handleChange}/>
        <select onChange={handleSelect}>
          <option selected value="name">Name</option>
          <option value="wages">Wages</option>
        </select>

      </form>
      <div>
        {searchResults.map((employee, index) => (
          <p key={index}>{employee.employeeName} Hours: {employee.hoursWorked} Wages: {employee.wages} Hired: {employee.hiredDate}</p>
        ))}
      </div> 
    </div>
  );
}

export default EmployeeDir;