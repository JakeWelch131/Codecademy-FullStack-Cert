import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topics: {}
}

export const topicsSlice = createSlice({
  name: 'topics',
  initialState: initialState,
  reducers: {
    addTopic: (state, action) => {
      const { id, name, icon} = action.payload;
      state.topics[id] = {
        id: id,
        name: name,
        icon,
        quizIds: []
      };
    }
  },
  extraReducers: {
    "quizzes/addQuiz": (state, action) => {
      const { id, topicId } = action.payload;
      state.topics[topicId].quizIds.push(id);
    }
  }
});

export const topicsSelector = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
