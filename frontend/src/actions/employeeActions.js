import axios from 'axios';

export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';
export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';

const API_URL = 'http://localhost:8080/api/v1/employees';

export const fetchEmployees = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(API_URL);
      dispatch({
        type: FETCH_EMPLOYEES,
        payload: response.data
      });
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };
};

export const addEmployee = (employee) => {
  return async (dispatch) => {
    try {
      const response = await axios.post(API_URL, employee);
      dispatch({
        type: ADD_EMPLOYEE,
        payload: response.data
      });
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };
};

export const updateEmployee = (id, employee) => {
  return async (dispatch) => {
    try {
      const response = await axios.put(`${API_URL}/${id}`, employee);
      dispatch({
        type: UPDATE_EMPLOYEE,
        payload: response.data
      });
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };
};

export const deleteEmployee = (id) => {
  return async (dispatch) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: id
      });
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };
};