import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: {}
}

export const cardsSlice = createSlice({
  name: "cards",
  initialState: initialState,
  reducers: {
    addCard: (state, action) => {
      const {id} = action.payload;
      state.cards[id] = action.payload;
    }
  }
})

export const cardSelector = (id) => (state) => state.cards.cards[id];
export const {addCard} = cardsSlice.action;
export default cardsSlice.reducer; 
