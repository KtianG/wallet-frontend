import { combineReducers } from '@reduxjs/toolkit';
import expensesReducer from './expensesSlice';

const rootReducer = combineReducers({
  expenses: expensesReducer,
  // Add other slice reducers here
});

export default rootReducer;
