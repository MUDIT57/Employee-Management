import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEmployee, fetchEmployees } from '../actions/employeeActions';
import { useNavigate, useParams } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams();
  const employees = useSelector(state => state.employees.employees);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });

  useEffect(()=>{
     dispatch(fetchEmployees());
  },[])

  useEffect(() => {
    const existingEmployee = employees.find(emp => emp.id === parseInt(id));
    if (existingEmployee) {
      setEmployee(existingEmployee);
    }
  }, [id, employees]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateEmployee(id, employee));
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            name="firstName"
            value={employee.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Last Name</label>
          <input
            type="text"
            className="form-control"
            name="lastName"
            value={employee.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={employee.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Update</button>
      </form>
    </div>
  );
};

export default EditEmployee;