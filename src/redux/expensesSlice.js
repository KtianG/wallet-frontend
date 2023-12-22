import { createSlice } from '@reduxjs/toolkit';

const expensesSlice = createSlice({
  name: 'expenses',
  initialState: [],
  reducers: {
    addExpense: (state, action) => {
      // Add logic to handle adding an expense
      // For simplicity, we'll just append the new expense to the state
      state.push(action.payload);
    },
    // Add other reducers as needed
  },
});

export const { addExpense } = expensesSlice.actions;
export default expensesSlice.reducer;
