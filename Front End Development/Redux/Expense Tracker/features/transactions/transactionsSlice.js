import { createSlice } from '@reduxjs/toolkit';
export const CATEGORIES = [
  "housing",
  "food",
  "transportation",
  "utilities",
  "clothing",
  "healthcare",
  "personal",
  "education",
  "entertainment",
];
const initialState = Object.fromEntries(
  CATEGORIES.map((category) => [category, []])
);

const transactionSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      const { category } = action.payload;
      state[category].push(action.payload);
    },
    deleteTransaction: (state, action) => {
      const { category, id } = action.payload;
      state[category] = state[category].filter(obj => obj.id !== id);
    }
  }
});


export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) =>
  Object.values(state.transactions).reduce((a, b) => [...a, ...b], []);

export const {addTransaction, deleteTransaction} = transactionSlice.actions;
export default transactionSlice.reducer;
