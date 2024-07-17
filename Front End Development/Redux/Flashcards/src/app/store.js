import { configureStore } from "@reduxjs/toolkit";
// import reducers
import topicsReducer from '../features/topics/topicsSlice';
import cardsReducer from '../features/cards/cardsSlice';
import quizzesReducer from '../features/quizzes/quizzesSlice';

export default configureStore({
  reducer: {
    topics: topicsReducer,
    quizzes: quizzesReducer,
    cards: cardsReducer
  },
});
