// src/components/Grid.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addRow } from '../features/dataSlice';
import Button from './Button';

const Table = ({ data }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [age, setAge] = useState();
  const [salary, setSalary] = useState();

  //Update a grid when adding a row without server call/ api refresh 
  const handleAddRow = (e) => {
    e.preventDefault()
    if(!name || !age || !salary) {
      return
    } else {
      dispatch(addRow({
        id: data?.length + 1,
        employee_name: name,
        employee_age: age,
        employee_salary: salary,
      }));
    }
    setName('')
    setAge('')
    setSalary('')
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" required value={name} placeholder='eg: zayn' onChange={(e) => setName(e.target.value)} />
        </div>

        <div>
          <label htmlFor="age">Age</label>
          <input type="number" required value={age} placeholder='eg: 18' onChange={(e) => setAge(e.target.value)} />
        </div>

        <div>
          <label htmlFor="salary">Salary</label>
          <input type='number' required value={salary} placeholder='eg: 21000' onChange={(e) => setSalary(e.target.value)} />
        </div>

        <Button handleClick={handleAddRow} />
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.employee_name}</td>
              <td>{row.employee_age}</td>
              <td>{row.employee_salary}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
