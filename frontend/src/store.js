import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import employeeReducer from './reducers/employeeReducer';

const rootReducer = combineReducers({
  employees: employeeReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;