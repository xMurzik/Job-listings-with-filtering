import { createSlice } from '@reduxjs/toolkit';
import data from '../../data.json';

export const listSlice = createSlice({
  name: '@@list',
  initialState: {
    listSkills: [],
    listVac: [],
  },
  reducers: {
    loadList: (state, action) => {
      state.listVac = [...action.payload];
    },
    loadNewSkill: (state, action) => {
      state.listSkills.push(action.payload);
      const newArr = data.filter((elem) => {
        const listSkills = [...elem.languages, elem.role, elem.level];
        return state.listSkills.every((elem) => elem.includes(listSkills));
      });
      return newArr;
    },
    deleteSkill: (state, action) => {
      state.listSkills.filter((elem) => elem !== action.payload);
      const newArr = data.filter((elem) => {
        const listSkills = [...elem.languages, elem.role, elem.level];
        return state.listSkills.every((elem) => elem.includes(listSkills));
      });
      return newArr;
    },
    reset: (state, action) => {},
  },
});

export const { loadList, loadNewSkill, deleteSkill } = listSlice.actions;
export const listReducer = listSlice.reducer;
