import { createSlice } from '@reduxjs/toolkit';

const initialState = {quizzes: {}};

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: initialState,
  reducers: {
    addQuiz: (state, action) => {
      const {id, name, topicId, cardIds} = action.payload;
      state.quizzes[id] = {
        id: id,
        topicId: id,
        name: name,
        cardIds: cardIds
      }
    })
  }
})

export const quizSelector = (state) => state.quizzes.quizzes;
export const {addQuiz} = quizzesSlice.actions;
export default quizzesSlice.reducer;
