import React, { useState, useEffect } from 'react';
import DUMMYDATA from './DUMMYDATA.json';
import Table from './Table';

function EmployeeDir() {

  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [select, setSelect] = useState("name");
  
  // any changes to the input field causes this useEffect to update our table
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

  // listening events
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
      {/* Form Input */}
      <form>
        <input type="text" value={search} placeholder="Search by " onChange={handleChange}/>
        <select onChange={handleSelect}>
          <option selected value="name">Name</option>
          <option value="wages">Wages</option>
        </select>
      </form>

      {/* Displaying the Table */}  
      <Table searchRes={searchResults}/>

    </div>
  );
}

export default EmployeeDir;