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
      if (!state.listSkills.includes(action.payload)) {
        state.listSkills.push(action.payload);
      }

      const newArr = data.filter((elem) => {
        const listSkills = [...elem.languages, elem.role, elem.level];
        return state.listSkills.every((elem) => listSkills.includes(elem));
      });

      state.listVac = [...newArr];
    },
    deleteSkill: (state, action) => {
      const newState = state.listSkills.filter(
        (elem) => elem !== action.payload
      );

      if (newState.length === 0) {
        state.listVac = [...data];
      } else {
        const newArr = data.filter((elem) => {
          const listSkills = [...elem.languages, elem.role, elem.level];
          return newState.every((elem) => listSkills.includes(elem));
        });
        state.listVac = [...newArr];
      }

      state.listSkills = [...newState];
    },
    reset: (state, action) => ({ listSkills: [], listVac: data }),
  },
});

export const { loadList, loadNewSkill, deleteSkill, reset } = listSlice.actions;
export const listReducer = listSlice.reducer;
