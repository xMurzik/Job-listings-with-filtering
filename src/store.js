import { configureStore } from '@reduxjs/toolkit';
import { listReducer } from './components/ElemWorkPlace/listSlice';

export const store = configureStore({
  reducer: {
    listWork: listReducer,
    // listSkill: skillReducer,
  },
});
